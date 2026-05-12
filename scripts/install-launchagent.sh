#!/usr/bin/env bash
set -euo pipefail

LABEL="com.datahub.yt-fetcher"
PLIST_DIR="${HOME}/Library/LaunchAgents"
PLIST_PATH="${PLIST_DIR}/${LABEL}.plist"
PROJECT_DIR="$(pwd -P)"
PNPM_BIN="$(command -v pnpm || true)"

if [[ -z "${PNPM_BIN}" ]]; then
  echo "pnpm is required but was not found in PATH." >&2
  exit 1
fi

if [[ ! -f "${PROJECT_DIR}/package.json" ]]; then
  echo "Run this script from the yt-subtitle-fetcher project root." >&2
  exit 1
fi

xml_escape() {
  sed \
    -e 's/&/\&amp;/g' \
    -e 's/</\&lt;/g' \
    -e 's/>/\&gt;/g' \
    -e 's/"/\&quot;/g' \
    -e "s/'/\&apos;/g"
}

mkdir -p "${PLIST_DIR}" "${PROJECT_DIR}/logs"

PROJECT_DIR_XML="$(printf '%s' "${PROJECT_DIR}" | xml_escape)"
PNPM_BIN_XML="$(printf '%s' "${PNPM_BIN}" | xml_escape)"

cat > "${PLIST_PATH}" <<PLIST
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>${LABEL}</string>
  <key>RunAtLoad</key>
  <true/>
  <key>KeepAlive</key>
  <true/>
  <key>WorkingDirectory</key>
  <string>${PROJECT_DIR_XML}</string>
  <key>EnvironmentVariables</key>
  <dict>
    <key>PATH</key>
    <string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin</string>
  </dict>
  <key>ProgramArguments</key>
  <array>
    <string>${PNPM_BIN_XML}</string>
    <string>start</string>
  </array>
  <key>StandardOutPath</key>
  <string>${PROJECT_DIR_XML}/logs/launchagent.log</string>
  <key>StandardErrorPath</key>
  <string>${PROJECT_DIR_XML}/logs/launchagent.err.log</string>
</dict>
</plist>
PLIST

launchctl bootout "gui/${UID}" "${PLIST_PATH}" 2>/dev/null || launchctl unload "${PLIST_PATH}" 2>/dev/null || true
launchctl bootstrap "gui/${UID}" "${PLIST_PATH}" 2>/dev/null || launchctl load "${PLIST_PATH}"
launchctl enable "gui/${UID}/${LABEL}" 2>/dev/null || true

echo "Installed and loaded ${LABEL} from ${PLIST_PATH}"

#!/usr/bin/env bash
set -euo pipefail

LABEL="com.datahub.yt-fetcher"
PLIST_PATH="${HOME}/Library/LaunchAgents/${LABEL}.plist"

if [[ -f "${PLIST_PATH}" ]]; then
  launchctl bootout "gui/${UID}" "${PLIST_PATH}" 2>/dev/null || launchctl unload "${PLIST_PATH}" 2>/dev/null || true
  rm -f "${PLIST_PATH}"
  echo "Uninstalled ${LABEL}"
else
  echo "${LABEL} is not installed"
fi

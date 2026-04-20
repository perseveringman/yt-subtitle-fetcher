import assert from "node:assert/strict";
import test from "node:test";

import { parseRecord } from "./markdown-record.ts";

test("parseRecord keeps transcript cues but strips transcript end marker", () => {
  const record = parseRecord(`---
title: "Example Video"
---

# Example Video

## Description

Example description

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:05.120 --> 00:00:07.000
Hello world

<!-- YOUTUBE_TRANSCRIPT_END -->
`);

  assert.equal(record.transcript, "00:00:05.120 --> 00:00:07.000\nHello world");
});

// SPDX-License-Identifier: MIT
// make.fun entry: Make the AI judge feel brave (v4)
// A beekeeper, a small fear, and a quiet victory.

import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Mara lifts the hive lid slowly. The hum rises around her hands, and she waits until her fingers stop shaking. " +
  "Frame by frame she lifts them out, and the bees settle on her sleeves like warm rain. " +
  "The hum is not anger, only something letting her stay. Her hands are steady now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

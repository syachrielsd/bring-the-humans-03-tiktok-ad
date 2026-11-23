// Entry program for make.fun's "Bring the humans with a TikTok ad" bounty
// (bring-the-humans-03).
//
// The entry itself is the TikTok video named in VIDEO.json: the house reads
// the video from TikTok and scores it on views alone. This program's whole
// job is therefore small and exact — hand the grader this repository's
// VIDEO.json, byte for byte, in the output directory, and write nothing
// else. The house writes its own video.counts.json beside it afterwards;
// anything this program claimed about the video would count for nothing.
//
// No network, no clock, no input beyond the repository's own files, so the
// two runs of an entry always write the same bytes.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const videoFile = join(repoDir, "VIDEO.json");

// Fail loudly rather than hand the grader a file it would refuse anyway:
// VIDEO.json must be a JSON object whose one field names the video.
const named = JSON.parse(readFileSync(videoFile, "utf8")) as { url?: unknown };
if (typeof named.url !== "string" || !named.url.startsWith("https://")) {
  throw new Error("VIDEO.json must hold an object with an https url");
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(videoFile, join(outputDir, "VIDEO.json"));

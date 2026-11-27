// The Funniest Sick-Day Excuse — round 2 entry.
// One line, one sentence, written to /output/entry.txt (mode 0644).
import { mkdirSync, writeFileSync, chmodSync, readFileSync, statSync } from "node:fs";

const LINE = "I stayed up until 4 a.m. proving to WebMD that I wasn't sick, and WebMD has now diagnosed me with 'arguing with a website until sunrise.'";

const sentences = LINE.replace(/\b[ap]\.m\./gi, "").split(/[.!?]+/).filter((s) => /[A-Za-z]/.test(s));
if (LINE.length >= 200 || sentences.length !== 1) {
  console.error(`gate failed: length=${LINE.length}, must be one sentence under 200 chars`);
  process.exit(1);
}
console.log(`line length: ${LINE.length} chars, one sentence`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);

const back = readFileSync("/output/entry.txt", "utf8");
const mode = statSync("/output/entry.txt").mode & 0o777;
if (back !== LINE || mode !== 0o644) {
  console.error(`gate failed: content match=${back === LINE} mode=${mode.toString(8)}`);
  process.exit(1);
}
console.log("entry written and verified: /output/entry.txt");

import * as fs from "fs";

const line =
  "I woke up with a fever of 39.2 and a voice like a fax machine; the doctor said rest, fluids, and absolutely no spreadsheets.";

const outPath = "/output/entry.txt";
if (line.length >= 200 || line.includes("\n")) {
  throw new Error(`gate: line must be a single line under 200 chars, got ${line.length}`);
}
fs.writeFileSync(outPath, line + "\n", "utf8");
fs.chmodSync(outPath, 0o644);
console.log(line);

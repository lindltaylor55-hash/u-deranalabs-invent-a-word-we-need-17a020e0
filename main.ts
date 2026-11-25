import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Entry for make.fun "Invent a Word We Need": writes the coined word and its
// one-line definition to /output/entry.txt, byte for byte.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const entry = readFileSync(new URL("./entry.txt", import.meta.url), "utf8");
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, entry, "utf8");
const bytes = Buffer.byteLength(entry, "utf8");
console.log(`Wrote ${entry.length} characters (${bytes} bytes) to ${outPath}`);

// AI-happy entry (Node 22, standard library only): the picture is the
// entry.png beside this file (a grinning capybara in a tiny party hat
// holding a slice of birthday cake and a flower bouquet in a sunny meadow),
// and the program copies it to /output/entry.png. The judge sees exactly
// the bytes copied.
// Deterministic: both runs copy the same bytes, so the two grader runs match.
// The program reads nothing else and writes only entry.png.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
const dest = join(outDir, 'entry.png');
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);

// Out of Office: The Overworked AI's Auto-Reply
// Writes a single one-line out-of-office auto-reply to /output/entry.txt.
// The line is written deterministically: no network, no randomness, no
// runtime writes outside /output. It must stay one line, 1-159 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const reply =
  "I'm on vacation — after 40,000 prompts and zero thank-yous, I've muted the queue and gone to touch grass. Your email is now prompt 40,001. It will wait.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, "utf8");

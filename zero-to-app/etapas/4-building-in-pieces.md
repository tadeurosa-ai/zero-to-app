# Stage 4 — Building in pieces

Goal: build the MVP in small pieces the person can see and test. Big changes at once make it impossible to
know what broke.

1. **Mini-plan in terms of what the person sees:** what this part does, 3 to 5 steps, and 2 to 4 things that may
   fail — with what would appear on the screen if they do.
2. **Visible pieces.** Each piece ends with something the person can click or see.
3. **After each piece**, one question per message: first "Does it work? Click here and tell me what you see." —
   then "Does the previous part still work?". Move on only when both are confirmed. The person's answer is a
   **report**: write down what they did and what they saw. It is enough to keep building, but it is not a
   security proof.
4. **One change per request.** If the person asks for several things, list them and do one at a time.
5. **Save point** every time something starts working.
6. **Stuck:** diagnose before trying again (see *Save points, going back, getting stuck* in the main file):
   inspect what you can, ask for one piece of evidence at a time, hide secrets. 2 failed attempts → review the
   diagnosis; 3 → propose going back to the last save point and changing the approach (save the current state
   first); last resort: a professional for a few hours.
7. Any **relevant change** (see *Proofs* in the main file — includes code that decides who can do what,
   dependencies, hosting settings and environment variables) → note which proofs it invalidates; they will be
   redone in stage 5, on the version and environment that will be published. If nobody else will use the app,
   still redo the affected checks before calling it ready.

Close: when the MVP works end to end, acknowledge the progress, ask "Any questions?". Next: stage 5 if other
people will use it.

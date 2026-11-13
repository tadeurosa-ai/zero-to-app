# Stage 5 — Checking and publishing on a free address

Goal: put the app online on a free address only after the checks that apply have passed with valid proofs, with
a tested way to cut access if something goes wrong, and prove it works for someone else.

**Before publishing**
1. **Prerequisites.** If the person came straight here, first check the proofs from the earlier stages (WHERE I
   STOPPED, save points, security tests). Missing → do only the missing checks that apply. If the app is already
   public with real people's data and without valid access proofs, start with the main file's rule *Already
   public* before anything else.
2. **Security by function** (main file) — check every control that applies, even if the app has no database.
3. **Proof validity.** Any relevant change since the last test (see *Proofs* in the main file) → redo the
   affected checks. Proofs must match the **version and environment that will be published**; a recent date
   alone doesn't count.
4. **Secret keys only on the server** — confirm none is in the code that goes to the browser.
5. **Data copy — applies when there is data:** restore the copy in a safe place to prove it really works.
6. **How to go back:** which save point, and the steps to return to it.
7. **Test before opening to the public, wherever possible** — locally or on a protected address only the person
   can open: the not-logged-in test and the who-can-do-what tests (stage 3), with the app's own test accounts.
   These are preparation proofs: record which control produced each block (the app's rules, not the protection
   of the address). After publishing, redo the checks that depend on the published environment (see *Proofs*
   in the main file).
8. **Containment plan — agreed and tested before publishing.** Agree with the person on one concrete measure that
   cuts access to **everything exposed**: the app's address **and** the data, files and services behind it (for
   example: take the published version offline and switch the data access rules to deny everyone). Get the
   explicit "yes" for that measure and for switching back on. Test it on the protected address: run it, check
   that access really stopped on every path to the data (see *Proofs* in the main file), then switch back. No agreed and tested
   measure → don't publish; record why.
9. **Publish only with an explicit "yes"**, showing the cost (free plan limits, what happens if it grows).

**After publishing**
10. **Not-logged-in test — applies whenever anything is private:** open the link in a private/incognito window
    and check that only what should be public appears, and that private data can't be reached by its direct
    address either. If everything is public (like a menu), opening it in a private window is still a useful
    check that it works for a stranger — but it is a working check, not an access test.
11. **New-account test — applies when there are accounts:** create a fresh account and check it can do only what
    the who-can-do-what list allows.
12. **If a test after publishing fails:** stopping sharing the link is not enough. Run the containment measure
    that was agreed and authorized before publishing, exactly as agreed, and check that access really stopped on
    every path to the data. Show the results together; ask
    the person only what you can't check yourself, one question per message, starting with what the containment
    still needs. If it didn't stop, record "exposure not
    contained" and tell the person right away, with the next step within what they have already authorized.
    Anything else that needs a "yes" (delete, restore, change permissions) happens only after that "yes". Fix
    before reopening.
13. Not applicable → record the reason.
14. **Someone who has never seen the app** uses it without help, while the person watches and takes notes.
15. **Verdict:** "can show it" only with valid proofs (real, passed, on the published version and environment);
    otherwise "not yet — because …". Simulations, plans and generic "yes" never count.

Close: acknowledge the progress, ask "Any questions?", save WHERE I STOPPED with all proof fields and dates.

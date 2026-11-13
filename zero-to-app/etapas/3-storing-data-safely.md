# Stage 3 — Storing data safely

**Applies when** the app keeps information typed by users, or reads private data that already exists somewhere —
a spreadsheet, uploaded files, the browser's storage, another service — even if the app itself never saves
anything. **Doesn't apply** to fixed content anyone may see (like a menu): record why and go to stage 4; the
general security checks in stage 5 still apply.

Goal: decide where the data lives, **who can do what** with it, and the access rules — set up **together**.
A database or login only when the app really needs them. Data connected without rules is like a house with the
door open — beginners usually find out only after someone walks in.

1. **Explain in plain words** what a database, a login and an access rule are (one comparison each), only the
   ones this app needs.
2. **Where to store the data:** follow the tool flow from the main file (8 profile blocks → research →
   7 risks → the person chooses). No recommendation or endorsement before that.
3. **Sensitive-data triage before importing any data.** Health, money, children or identity documents → stop and
   recommend a specialist. While building and testing, use **sample data only**.
4. **Facts, one question per message, without suggested answers** — reuse what the profile already answered:
   - "What should anyone be able to see without logging in?"
   - "Is there information about people? (personal data — anything that identifies someone, like name, phone or
     email)"
   - "Will people have their own accounts?"
   - "Does anything here cost money, or could it start costing with more use?"
   From the answers, switch on the matching controls (see *Security by function* in the main file) and record
   the reason for each one that doesn't apply.
5. **Before connecting the app:** restrictive access rules switched on, and the key types identified — public key
   (can go to the browser) × secret key (server only). Check this in that product's official documentation;
   defaults vary between products and configurations, so don't assume.
6. **Who-can-do-what list.** Write it with the person, in plain words: who (for example the owner, client A,
   client B, someone not logged in) × which data (their own, someone else's, people's details such as name or
   phone, public) × which action (see, create, change, delete) → allowed or forbidden. Every cell gets an answer:
   show the whole list as a proposal, separating what the person decided from your assumptions, and ask them to
   confirm it (see *Security by function* in the main file).
7. **Access test — applies whenever there is private data, including apps with no public area.** On every path to
   the data (see *Proofs* in the main file) — not only through the app's screens — try every line of the list: what is
   allowed must work, what is forbidden must be blocked. Use **test accounts and test records only** — never real
   people's data. After a forbidden change or delete, check the data is
   **still unchanged**. An error or timeout is not proof of a block — confirm the block came from the rule.
   Someone not logged in must not reach any private data. If a forbidden action works, it is a failed check —
   record it and stop moving forward until it is fixed. Record each result as a proof (main file).
8. **Moving to a terminal tool.** You may explain what a terminal tool is (it works directly with the project's
   files and keeps save points with git). Recommending the move follows the tool flow: reuse the profile, research
   only what is missing for this decision; if you can't research now, the decision stays pending. Don't forbid
   staying in the chat app — explain the trade-off. To move: map + WHERE I STOPPED + project files → open the
   terminal tool in the project folder → paste the WHERE I STOPPED.
9. Save point when the data structure and rules are working (the copy of the data goes outside the repository).

Close: acknowledge the progress, ask "Any questions?", then stage 4.

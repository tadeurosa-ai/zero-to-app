# zero-to-app

**A skill that guides a non-developer beginner, one step at a time, from a rough app idea to a first version online —
in the right order, without overload, and with safety checks before anything is published.**

[Português](README.pt-BR.md) · [Install](INSTALL.md) · [Example conversation](docs/example-conversation.md)

## Who it is for
People who have an app idea, do not know how to code, and want to build it with an AI assistant ("vibe coding")
without leaking the data of the people who will use it.

**It is not for** experienced developers looking for code review or advanced architecture.

## The 8 stages
| # | Stage | When it applies |
|---|---|---|
| 0 | Starting point — where you are, what you have, the map | always |
| 1 | Problem and MVP (the smallest version that already helps) | always |
| 2 | Layout with sample data | always |
| 3 | Storing data safely (database, login, access rules) | only if the app saves or reads private data |
| 4 | Building in small pieces, with save points | always |
| 5 | Checking and publishing on a free address | always |
| 6 | Your own domain | only with real users |
| 7 | Growing | only with signs of demand |

How it talks: one thing to answer per message, short messages that start with the next step, and the *why* in one
sentence when it helps. It answers in the person's language (instructions in English; Brazilian Portuguese
supported with a short glossary).

## What the skill guarantees (safety core)
1. Nothing goes online without an explicit "yes".
2. Private data is stored only after the access test passes (allowed and forbidden actions, with test accounts).
3. Sensitive data (health, money, children, identity documents) → it stops and recommends a specialist.
4. If data leaks, it contains access before anything else.
5. A secret key is never put in the website code and never asked for in the chat.

## Platforms
| Platform | Status |
|---|---|
| Claude app (upload the .zip) | tested — triggers by itself in Portuguese and English |
| Claude Code (`~/.claude/skills/`) | tested — triggers by itself in Portuguese and English |
| ChatGPT desktop app | not tested yet |
| Codex | not tested; format follows the official docs |

## Known limitations
- **Tested only in simulated conversations** (10 scenarios, version v5) plus short real installation checks. Not yet
  tested with real beginners, so understanding and experience are unproven.
- Safety core: no failure observed in 8 of 10 scenarios; 2 were inconclusive (direct database access tests not
  reached; the final "yes" to publish not reached).
- It may still ask for two things in one sentence.
- It may skip the "where are you talking to me?" question and infer the environment instead.
- It may postpone the "who can do what" list to a later conversation.
- Proof records may miss fields (for example, marking a local test as a preparation proof to repeat online).
- Messages can be long; the rule to keep them short has not shown a measurable effect.
- Out of scope: payments, app stores, complex integrations, advanced architecture, storing sensitive data.

## Privacy
The skill has no storage of its own. Conversations, WHERE I STOPPED notes and files stay on the platform you use or
on your computer.

## Inspirations and thanks
Ideas were rewritten in our own words; no text was copied. Thanks to these open-source projects (no endorsement
implied): [claude-global-appbuilding-skills](https://github.com/takleb3rry/claude-global-appbuilding-skills) (MIT),
[solo-founder-skills](https://github.com/whawkinsiv/solo-founder-skills) (MIT),
[founder-coding-skills](https://github.com/lightarktech/founder-coding-skills) (MIT),
[mattpocock/skills](https://github.com/mattpocock/skills) (MIT),
[knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) (Apache-2.0),
[advise-project-approach](https://github.com/AaravKashyap12/advise-project-approach) (MIT),
[product-skills](https://github.com/uxcel-lab/product-skills) (MIT),
[lenny-skills](https://github.com/refoundai/lenny-skills) (MIT),
[vibe-check](https://github.com/TexasBedouin/vibe-check) (MIT).

## Contributing
Improvements are welcome — open an issue or a pull request.

## License
[MIT](LICENSE)

# Instalação

Baixe `zero-to-app-v<versão>.zip` na página **Releases** do repositório. Confira o SHA-256 informado lá.

## App do Claude (claude.ai / desktop)
1. Settings → Capabilities: ligue "Code execution and file creation".
2. Customize → Skills → "+" → "+ Create skill" → "Upload a skill" → escolha o .zip.
3. Abra uma conversa nova: "quero tirar meu app do papel".

## Claude Code
Descompacte na pasta de skills para ficar `~/.claude/skills/zero-to-app/SKILL.md` (ou `.claude/skills/` dentro de
um projeto). Abra uma sessão nova e diga "quero tirar meu app do papel".

## App desktop do ChatGPT / Codex
Ainda não testado. O formato segue a documentação oficial (`~/.agents/skills/zero-to-app/`).

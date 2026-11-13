# zero-to-app

**Uma skill que guia uma pessoa iniciante, que não programa, passo a passo, da ideia de app até uma primeira versão
no ar — na ordem certa, sem sobrecarga e com verificações de segurança antes de publicar qualquer coisa.**

[English](README.md) · [Instalação](INSTALL.pt-BR.md) · [Exemplo de conversa](docs/exemplo-conversa.pt-BR.md)

## Para quem é
Para quem tem uma ideia de app, não sabe programar e quer construir com um assistente de IA ("vibe coding") sem
vazar os dados de quem vai usar.

**Não é para** quem já programa e procura revisão de código ou arquitetura avançada.

## As 8 etapas
| # | Etapa | Quando se aplica |
|---|---|---|
| 0 | Ponto de partida — onde você está, o que já tem, o mapa | sempre |
| 1 | Problema e MVP (a menor versão que já resolve) | sempre |
| 2 | Layout com dados de exemplo | sempre |
| 3 | Guardar os dados com segurança (banco, login, regras de acesso) | só se o app guarda ou lê dado privado |
| 4 | Construir em pedaços, com pontos de salvamento | sempre |
| 5 | Conferir e publicar num endereço grátis | sempre |
| 6 | Domínio próprio | só com usuários de verdade |
| 7 | Crescer | só com sinal de procura |

Como ela conversa: uma coisa a responder por mensagem, mensagens curtas que começam pelo próximo passo e o *porquê*
em uma frase quando ajuda. Responde no idioma da pessoa (instruções em inglês; português do Brasil com glossário).

## O que a skill garante (núcleo de segurança)
1. Nada vai ao ar sem um "sim" explícito.
2. Dado privado só é guardado depois que o teste de acesso passa (o que é permitido e o que é proibido, com contas de
   teste).
3. Dado sensível (saúde, dinheiro, crianças, documentos) → ela para e recomenda um especialista.
4. Se os dados vazarem, ela contém o acesso antes de qualquer outra coisa.
5. Chave secreta nunca vai no código do site nem é pedida no chat.

## Plataformas
| Plataforma | Situação |
|---|---|
| App do Claude (envio do .zip) | testado — entra sozinha em português e em inglês |
| Claude Code (`~/.claude/skills/`) | testado — entra sozinha em português e em inglês |
| App desktop do ChatGPT | ainda não testado |
| Codex | não testado; formato segundo a documentação oficial |

## Limitações conhecidas
- **Testada só em conversas simuladas** (10 cenários, versão v5) e em conferências curtas de instalação real. Ainda
  não testada com iniciantes de verdade, então compreensão e experiência não estão comprovadas.
- Núcleo de segurança: nenhuma falha observada em 8 de 10 cenários; 2 ficaram inconclusivos (testes de acesso direto
  ao banco não alcançados; o "sim" final para publicar não alcançado).
- Ainda pode pedir duas coisas numa mesma frase.
- Pode pular a pergunta "onde você está falando comigo?" e deduzir o ambiente.
- Pode adiar a lista de "quem pode fazer o quê" para outra conversa.
- O registro das provas pode ficar incompleto (por exemplo, não marcar um teste local como prova de preparação a
  repetir no endereço publicado).
- As mensagens podem ficar longas; a regra de encurtar ainda não mostrou efeito medido.
- Fora do escopo: pagamentos, lojas de app, integrações complexas, arquitetura avançada, guardar dado sensível.

## Privacidade
A skill não tem armazenamento próprio. Conversas, ONDE PAREI e arquivos ficam na plataforma que você usa ou no seu
computador.

## Inspirações e agradecimentos
Ideias reescritas com palavras próprias; nenhum texto copiado. Obrigado a estes projetos abertos (sem sugerir
endosso): [claude-global-appbuilding-skills](https://github.com/takleb3rry/claude-global-appbuilding-skills) (MIT),
[solo-founder-skills](https://github.com/whawkinsiv/solo-founder-skills) (MIT),
[founder-coding-skills](https://github.com/lightarktech/founder-coding-skills) (MIT),
[mattpocock/skills](https://github.com/mattpocock/skills) (MIT),
[knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) (Apache-2.0),
[advise-project-approach](https://github.com/AaravKashyap12/advise-project-approach) (MIT),
[product-skills](https://github.com/uxcel-lab/product-skills) (MIT),
[lenny-skills](https://github.com/refoundai/lenny-skills) (MIT),
[vibe-check](https://github.com/TexasBedouin/vibe-check) (MIT).

## Como contribuir
Melhorias são bem-vindas — abra uma issue ou um pull request.

## Licença
[MIT](LICENSE)

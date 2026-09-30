# Girls Challenge

Um pequeno aplicativo para sorteio de WODs das **Girls do CrossFit**.

A ideia surgiu como uma forma divertida de definir a "punição" para quem faltar ao treino. Ao clicar em **FALTOU?**, o aplicativo inicia uma contagem regressiva e, ao final, sorteia aleatoriamente uma Girl e seu respectivo WOD.

O aplicativo também possui uma seção de **regras**, explicando quando a falta gera punição e quais situações são consideradas falta abonada.

## Como funciona

1. Clique em **FALTOU?**
2. O aplicativo inicia uma contagem regressiva de 3 segundos.
3. O círculo de progresso acompanha a contagem e muda de cinza para laranja.
4. Ao final da contagem, uma Girl é sorteada aleatoriamente.
5. O nome da Girl e seu WOD são exibidos na tela.
6. Quando disponíveis, são apresentadas **adaptações dos exercícios**, com alternativas para diferentes níveis ou limitações.
7. Um **modal de detalhes** permite consultar as informações do WOD e suas adaptações.
8. O resultado pode ser copiado para compartilhar no WhatsApp.

## Regras

A seção de regras apresenta a dinâmica do desafio de forma simples:

* **Faltou sem motivo justo?** Sorteia uma Girl.
* Existem situações de **falta abonada**, nas quais não há punição.
* As regras ficam disponíveis diretamente no aplicativo para consulta antes do sorteio.

## Adaptações

Os WODs podem apresentar **sugestões de adaptações para os exercícios**, permitindo que o desafio seja realizado mesmo quando o movimento original não é adequado ou está indisponível.

As adaptações são apresentadas junto às informações do WOD no modal de detalhes.

## Acesse o aplicativo

**[ABRIR GIRLS CHALLENGE](https://mescola.github.io/girls-challenge/)**

## Tecnologias

* HTML
* CSS
* JavaScript
* SVG
* Google Fonts

O projeto não utiliza banco de dados, backend ou framework.

## Estrutura

```text
girls-challenge/
├── index.html
├── script.js
├── css/
│   ├── style.css
│   └── regras.css
├── data/
│   └── girls.js
└── assets/
    ├── fonts/
    └── sounds/
```

## Sobre o projeto

O **Girls Challenge** é um MVP criado para testar uma ideia simples diretamente no contexto do box de CrossFit.

O projeto reúne:

* Sorteio aleatório das Girls e seus respectivos WODs
* Contagem regressiva visual
* Indicador de progresso em SVG
* Exibição do resultado do sorteio
* Modal com detalhes do WOD
* Sugestões de adaptações para os exercícios
* Cópia do resultado para compartilhamento
* Seção de regras do desafio
* Regras de falta abonada
* Interface responsiva para uso em dispositivos móveis

O sorteio acontece inteiramente no navegador. Não há cadastro, banco de dados ou registro dos resultados. Cada sorteio é realizado apenas durante a sessão atual da página.

## Publicação

O aplicativo está publicado utilizando **GitHub Pages**.
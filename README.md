# Relógio Digital Meridian

Relógio digital de página única, com visual minimalista, data por extenso e efeitos de luzes animadas. O projeto foi desenvolvido com HTML, CSS e JavaScript puro, sem dependências de build ou instalação.

## Funcionalidades

- Exibe horas, minutos e segundos e atualiza a cada segundo.
- Mostra a data por extenso em português do Brasil.
- Apresenta luzes decorativas animadas, geradas dinamicamente pelo JavaScript.
- Permite pausar e retomar as luzes pelo botão **PAUSAR LUZES**.
- Adapta o layout a telas menores.
- Inclui atributos e estados acessíveis para elementos relevantes e respeita a preferência do sistema por movimento reduzido na animação dos separadores.

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)
- `Intl.DateTimeFormat` para formatar hora e data de acordo com o idioma

## Como executar

Não é necessário instalar dependências nem compilar o projeto.

1. Baixe ou clone este repositório.
2. Abra `index.html` em um navegador moderno.

Para executar por um servidor local, use a extensão **Live Server** do Visual Studio Code ou outro servidor estático. O projeto não requer uma etapa de build.

## Estrutura do projeto

```text
.
├── index.html   # Estrutura da página e elementos do relógio
├── style.css    # Layout, identidade visual, responsividade e animações
├── script.js    # Atualização do relógio e criação/controle das luzes
└── README.md    # Documentação do projeto
```

## Data e fuso horário

A hora e a data são calculadas no navegador usando o relógio do dispositivo. A formatação usa o locale `pt-BR`, mas não fixa um fuso horário: o resultado segue o fuso configurado no dispositivo. Portanto, os textos visuais que mencionam “FUSO LOCAL” e “HORÁRIO DE BRASILIA” não alteram o fuso efetivamente utilizado.

## Fontes

O CSS carrega as fontes **DM Mono** e **Manrope** pelo Google Fonts. É necessária uma conexão com a internet para carregá-las; sem conexão, o navegador usa fontes alternativas.

## Personalização

- **Aparência e layout:** altere as regras em `style.css`.
- **Luzes animadas:** ajuste os objetos do array `orbPaths` no início de `script.js`. Cada objeto define posição, deslocamento, cor, tamanho, duração e atraso.
- **Textos e estrutura:** edite os elementos em `index.html`.
- **Idioma e fuso:** ajuste as opções de `Intl.DateTimeFormat` em `script.js` caso queira mudar a formatação ou definir um fuso específico.

## Acessibilidade

As luzes decorativas são ocultadas de tecnologias assistivas com `aria-hidden`. O botão de controle informa seu estado com `aria-pressed` e tem estilo de foco visível para navegação por teclado. A animação dos separadores é desativada quando o sistema solicita movimento reduzido.

## Links

- **LinkedIn:** [Perfil profissional](https://www.linkedin.com/in/nilsonlimasjunior/)

- **GitHub:** [Perfil no GitHub](https://github.com/NilsonLimas94)

- **Deploy (Vercel):** [Ver projeto em tempo real](https://relogio-digital-meridian.vercel.app)

## Licença

Nenhuma licença foi especificada neste repositório. Consulte o responsável pelo projeto antes de reutilizar ou distribuir o código.

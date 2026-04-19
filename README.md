# Loja Virtual de Games

Projeto acadêmico desenvolvido com Angular para simular a interface de uma loja virtual de games. A aplicação apresenta uma página inicial com banner, vitrine de produtos, menu, rodapé e tela de acesso, utilizando Angular Material, Bootstrap, HTML, CSS e TypeScript.

## Objetivo da atividade

Este projeto foi criado para atender à proposta de desenvolvimento de uma loja virtual em Angular, com foco nos seguintes pontos:

- instalação e configuração do ambiente;
- sintaxe da linguagem TypeScript;
- diferenças entre TypeScript e JavaScript;
- estrutura orientada a objetos no TypeScript;
- uso de componentes com Angular Material e Bootstrap;
- criação da página inicial e da tela de login.

## Conceitos de TypeScript estudados

### Instalação

O TypeScript faz parte da base do Angular e está configurado no projeto como dependência de desenvolvimento. A compilação dos arquivos `.ts` é feita pelo Angular CLI.

### Sintaxe

No projeto, o TypeScript aparece principalmente na definição dos componentes Angular, com uso de:

- classes;
- decorators, como `@Component`;
- importações de módulos;
- tipagem mais segura do que no JavaScript puro.

### Diferenças entre TypeScript e JavaScript

- TypeScript adiciona tipagem estática, o que ajuda a prevenir erros durante o desenvolvimento.
- JavaScript é interpretado diretamente pelo navegador, enquanto o TypeScript precisa ser compilado para JavaScript.
- TypeScript melhora a organização do código em projetos maiores, como aplicações Angular.

### Estrutura orientada a objetos no TypeScript

- Classes e objetos: cada componente Angular é definido como uma classe.
- Métodos: as classes podem reunir comportamentos e regras da aplicação.
- Construtor: pode ser usado para inicializar dados e injetar dependências quando necessário.

## Tecnologias utilizadas

- Angular 15
- TypeScript
- Angular Material
- Bootstrap 5
- HTML5
- CSS3

## Funcionalidades implementadas

- menu superior com navegação;
- página inicial com carrossel de banners;
- seção de jogos em destaque;
- tela de acesso com campos de usuário e senha;
- rodapé informativo;
- layout responsivo com apoio do Bootstrap e do Angular Material.

## Estrutura principal do projeto

- `src/app/menu`: componente do menu superior.
- `src/app/inicio`: componente da página inicial.
- `src/app/login`: componente da tela de acesso.
- `src/app/rodape`: componente do rodapé.
- `src/assets/img`: imagens usadas na interface.

## Como executar o projeto

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm start
```

3. Se quiser subir a API fake com o `db.json`, execute em outro terminal:

```bash
npm run api
```

4. Acesse a aplicação no navegador:

```text
http://localhost:4200/
```

API fake:

```text
http://localhost:3000/produtos
```

## Como gerar a versão de produção

Execute o comando abaixo para gerar a pasta de distribuição em `dist/`:

```bash
npm run build
```

## Como executar os testes

Para rodar os testes unitários com Karma, utilize:

```bash
npm test
```

## Observações

- Bootstrap e Angular Material já estão instalados no projeto.
- As rotas principais disponíveis são `inicio` e `login`.
- A tela de acesso possui finalidade visual nesta etapa da atividade, sem autenticação implementada.
- Parte das imagens da interface é carregada por URLs públicas de assets visuais de jogos para reforçar a proposta de campanhas promocionais da loja.

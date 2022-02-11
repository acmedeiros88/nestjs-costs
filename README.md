# Costs um gerenciador de projetos feito com Next.js

<p align="justify">
Costs é um projeto do <a href="https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO" style="text-decoration:none" target="_blank">Curso de React</a> realizado através da plataforma do <i>YouTube</i> e administrado pelo professor Matheus Battisti. No curso o professor desenvolve o Costs utilizando o <i>React</i>, eu optei em desenvolver utilizando o <i>Next.js</i>.
</p>
<p align="justify">
As funcionalidades deste projeto são:
<ul>
 <li>Criar projeto e definir um <i>BUDGET</i> (valor total do projeto a ser criado);</li>
 <li>Classificar o projeto por categoria (Infra, Desenvolvimento, Design e Planejamento);</li>
 <li>Alocar serviços nos projetos já criados para ter o controle dos gastos realizados até o momento;</li>
 <li>Obter a informação do orçamento disponível para a conclusão do projeto.</li>
</ul>
No <i>Back-End</i> (servidor) Costs simula uma API com o banco de dados utilizando <a href="https://www.npmjs.com/package/json-server" style="text-decoration:none" target="_blank">JSON-SERVER</a>.
</p>

<br/>

# Começando

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:  
* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/)

### Rodando a aplicação web (Front-End)

```bash
# Abra um terminal do Git Bash onde será clonado o repositório do Costs

# Exetute os comandos abaixo:

# Clone este repositório;
$ git clone https://github.com/acmedeiros88/nextjs-costs.git

# Acesse a pasta do projeto;
$ cd nextjs-costs

# Instale as dependências;
$ npm i

# Execute a aplicação;
$ npm run dev

# O servidor iniciará na porta:3000 - acesse <http://localhost:3000>. 
```

### Rodando o Back-End (servidor)

```bash
# Abra outro terminal do Git Bash na pasta onde foi clonado o repositório do Costs

# Exetute os comandos abaixo:

# Execute o servidor do JSON-SERVER;
$ npm run backend

# O servidor iniciará na porta:5000 - acesse <http://localhost:5000/projects>.
```
### API Projetos

#### Listar todos os projetos
```
GET /projects
```
#### Listar todas as categorias
```
GET /categories
```

### Tecnologias

As seguintes ferramentas foram utilizadas na construção deste projeto:

* [Node.js v16 LTS (v16.13.2)](https://nodejs.org/download/release/v16.13.2/);
* [React Icons (v4.3.1)](https://react-icons.github.io/react-icons/);
* [uuid (v8.3.2)](https://www.npmjs.com/package/uuid);
* [json-server (v0.17.0)](https://www.npmjs.com/package/json-server).

### Curso de React
 
**Disponível em:** <a style="text-decoration:none" target="_blank"><b><</b>https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO<b>></b></a>
<br/> 
**Acesso em:** fev. 2022

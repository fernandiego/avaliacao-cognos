<!DOCTYPE html>
<html>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<head>

</head>
<body style="font-family:lucida-console;color:white;background-color:black">
<div>
    <div>
        <h1>Avaliação para a vaga de estágio na Cognos - Startup parceira da CSI locações</h1>

        <ul>
            <li>A avaliação consiste em consumir uma API, exibindo os dados em uma tela</li>
</ul>
</div>
<h2>As regras são:</h2>
<img src="img/frontend.png"/>
<ul>

<li>
API: https://ghibliapi.herokuapp.com/#tag/Films
</li>
<li>
Utilizar o end point: GET /films
</li>
<li>
Exibir informações sobre os filmes como, título, diretor, data de lançamento e descrição
</li>
<li>
Utilizar javascript (De preferência framework Angular 4/5)
</li>
<li>
Utilizar qualquer framework CSS (Preferência por Material-Angular)
</li>
</ul>


<h2>Esta versão foi criada utilizando os seguintes ferramentas:</h2>
<ul>

<li>
Node, utilizando o npm como nosso package manager
</li>
<li>
Axios, HTTP client
</li>
<li>
Bulma, framework de CSS baseado no FlexBox
</li>
<li>
Browserify, nos permite usar o padrão de módulos do NodeJS no navegador. <br>Nós definimos as dependências e depois o Browserify empacota tudo isso em apenas um arquivo JS, limpo e estruturado. <br>Você inclui os arquivos necessários usando require('./seuArquivo.js')
</li>
<li>
browserify-css, o mesmo que o acima, mas específico para CSS
</li>
<li>
Budo, servidor para desenvolvimento para dar reload na página automaticamente ao atualizar o código 
</li>
<li>
Vue,(pronounced /vjuː/, like view). Framework javascript para criar interfaces de usuário.<br>
<a href="https://vuejs.org/v2/guide/comparison.html">Comparação com outros frameworks</a>
</li>
<li>
vue-material, simples, leve e segue os padrões de especificação de material design do Google
</li>
<li>
vueify, simples, leve e segue os padrões de especificação de material design do Google
</li>

</ul>


<h2>Configurando o ambiente</h2>
<ul>
<li>Instalar o node <a href="https://nodejs.org/en/download/">link</a></li>
<li>Dê checkout no projeto</li>
<li>Usar o npm para instalar os módulos</li>
<li>Na pasta client, abra o terminal e utilize os comandos abaixo para trazer os módulos</li>
<li>npm install axios bulma vue vue-material --save </li>
<li>npm install browserify browserify-css bulma vueify --save-dev </li>
<li>Pronto! Ambiente configurado</li>
<li>Na pasta client, pelo terminal rode o comando npm run dev</li>
<li>E é isso. =)</li>
</ul>
</div>
</body></html>
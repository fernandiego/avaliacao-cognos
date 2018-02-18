<template>
<div>
    <div class="box panel">
      <img class="logosg" src="img/studio-ghibli.png"/>
      <img class="diretores" v-bind:title="hayaoMiya" src="img/hayao-miyazaki.jpg"/>
      <img class="diretores" v-bind:title="isaoTaka" src="img/isao-takahata.jpg"/>
      <img class="diretores" v-bind:title="yoshiKon" src="img/yoshifumi-kondo.JPG"/>
      <img class="diretores" v-bind:title="hiroMori" src="img/hiroyuki-morita.jpg"/>
      <img class="diretores" v-bind:title="goroMiya" src="img/goro-miyazaki.jpg"/>
      <img class="diretores" v-bind:title="hiroYonebay" src="img/hiromasa-yonebayashi.jpg"/>
    </div>
    <md-table @sort="ordena">
      <md-table-row>
        <md-table-head>Título</md-table-head>
        <md-table-head>Diretor</md-table-head>
        <md-table-head>Descrição</md-table-head>
        <md-table-head md-sort-by="release_date">Data de lançamento</md-table-head>
      </md-table-row>
      <md-table-row v-for="f in films" :key="f.id">
        <md-table-cell>{{f.title}}</md-table-cell>
        <md-table-cell>{{f.director}}</md-table-cell>
        <md-table-cell>{{f.description}}</md-table-cell>
        <md-table-cell>{{f.release_date}}</md-table-cell>
      </md-table-row>
    </md-table>

</div>
</template>

<script>
// Trazendo a rota com o axios que da o GET na api e retorna as informações
const { studioghibliapi } = require("./api");
module.exports = {
  name: "films",
  created() {
    // Listando todos os filmes assim que renderizar a tela
    this.listfilm();
  },
  data() {
    return {
      hayaoMiya: "Hayao Miyazaki",
      isaoTaka: "Isao Takahata",
      yoshiKon: "Yoshifumi Kondō",
      hiroMori: "Hiroyuki Morita",
      goroMiya: "Gorō Miyazaki",
      hiroYonebay: "Hiromasa Yonebayashi",
      message: "Retornar aqui o Score no rotten tomatoes, tem no json",
      films: []
    };
  },
  methods: {
    // Método para listar todos os filmes
    listfilm() {
      studioghibliapi.list().then(ret => (this.films = ret.data));
    },
    ordena(col) {
      if (col.type == "asc") {
        this.films.sort((a, b) => a[col.name] - b[col.name]);
      } else {
        this.films.sort((a, b) => b[col.name] - a[col.name]);
      }
    }
  }
};
</script>

<style scoped>
.diretores {
  width: 100px;
  height: 140px;
}
.logosg {
  width: 300px;
}
</style>

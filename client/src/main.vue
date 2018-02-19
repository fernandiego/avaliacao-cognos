<template>
<div>
    <md-whiteframe class="md-primary" md-elevation="5">
      <img class="logosg" src="img/studio-ghibli.png"/>
      
      <md-avatar class="md-large">
        <img src="img/hayao-miyazaki.jpg"/>
        <md-tooltip>{{hayaoMiya}}</md-tooltip>
      </md-avatar>
      <md-avatar class="md-large">
        <img src="img/isao-takahata.jpg"/>
        <md-tooltip>{{isaoTaka}}</md-tooltip>
      </md-avatar>
      <md-avatar class="md-large">
        <img src="img/yoshifumi-kondo.JPG"/>
        <md-tooltip>{{yoshiKon}}</md-tooltip>
      </md-avatar>
      <md-avatar class="md-large">
        <img src="img/hiroyuki-morita.jpg"/>
        <md-tooltip>{{hiroMori}}</md-tooltip>
      </md-avatar>
      <md-avatar class="md-large">
        <img src="img/goro-miyazaki.jpg"/>
        <md-tooltip>{{goroMiya}}</md-tooltip>
      </md-avatar>
      <md-avatar class="md-large">
        <img src="img/hiromasa-yonebayashi.jpg"/>
        <md-tooltip>{{hiroYonebay}}</md-tooltip>
      </md-avatar>
      
    </md-whiteframe>
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
        <md-tooltip>{{`Pontuação no Rotten Tomatoes ${f.rt_score}`}}</md-tooltip>
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
      if (col.type != "asc") {
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

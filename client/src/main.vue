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
    <div class="panel">
      <!-- Header com os títulos   -->
      <div class="columns is-mobile is-centered box is-danger">
          
          <div class="column red"><strong>Título</strong></div>
          <div class="column"><strong>Diretor</strong></div>
          <div class="column is-7"><strong>Descrição</strong></div>
          <div class="column"><strong>Data de lançamento</strong></div>
          
      </div>
      
      <!-- Retornando as informações coletadas   -->
      <div v-bind:title="message" v-for="f in films" :key="f.id" class="columns is-mobile box">
           
           <!-- Título -->
           <div class="column">
                <div>{{f.title}}</div>
            </div>
            <!-- Diretor -->
           <div class="column">
               <div>{{f.director}}</div>
           </div>
            <!-- Descrição -->
           <div class="column is-7">
               <div>{{f.description}}</div>
            </div>
            <!-- Data de lançamento -->
           <div class="column">
               <div>{{f.release_date}}</div>
           </div>
      </div>
    </div>
</div>
</template>

<script>
// Trazendo a rota com o axios que da o GET na api e retorna as informações
const { studioghibliapi } = require("./api");
module.exports = {
  name: "films",
  created() {
    // Listando todos os filmes assim que renderizar a tela  
    this.listfilm()
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
      films: [],
      film: {}
    }
  },
  methods: {
    // Método para listar todos os filmes  
    listfilm() {
      studioghibliapi.list().then(ret => (this.films = ret.data))
    }
  }
}
</script>

<style scoped>
.diretores{
  width: 90px;
  height:130px;
}
.logosg{
  width: 250px;
}

</style>

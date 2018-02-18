<template>
<div>

    <div class="box panel">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" 
      width="420" height="100" alt="Studio Ghibli"/>
      <img v-bind:title="hayaoMiya" src="https://img.fstatic.com/uZc_xd-4_qqtQ-wiWSzcszo1akg=/full-fit-in/290x478/https://cdn.fstatic.com/media/artists/avatar/2014/02/hayao-miyazaki_a35640_2.jpg" width="80" height="120"/>
      <img v-bind:title="isaoTaka" src="https://images-na.ssl-images-amazon.com/images/M/MV5BNDM5OTc2NjI1MV5BMl5BanBnXkFtZTgwOTI3MjA4MTE@._V1_UX214_CR0,0,214,317_AL_.jpg" width="80" height="120"/>
      <img v-bind:title="yoshiKon" src="https://1.bp.blogspot.com/-nXv9h7LTzpg/UVWbpKI8wNI/AAAAAAAACZU/4hPiUSdIn50/s1600/yoshifumi-kondo-3.JPG" width="80" height="120"/>
      <img v-bind:title="hiroMori" src="http://site.studioghibli.com.br/download/imagens/diretores/hiroyukimorita.jpg" width="80" height="120"/>
      <img v-bind:title="goroMiya" src="http://site.studioghibli.com.br/download/imagens/diretores/goromiyazaki.jpg" width="80" height="120"/>
      <img v-bind:title="hiroYonebay" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Hiromasa_Yonebayashi.jpg/220px-Hiromasa_Yonebayashi.jpg" width="80" height="120"/>
      
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

<style>

</style>

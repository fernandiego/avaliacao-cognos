<template>

    <div>
      <div class="columns">
          <div class="column">Título</div>
          <div class="column">Diretor</div>
          <div class="column is-7">Descrição</div>
          <div class="column">Data de lançamento</div>
      </div>  
      <div v-for="f in films" :key="f.id" class="columns">
           <div class="column">
                
                <div>{{f.title}}</div>
            </div>

           <div class="column">
                
               <div>{{f.director}}</div>
           </div>

           <div class="column is-7">
                
               <div>{{f.description}}</div>
            </div>

           <div class="column">
               
               <div>{{f.release_date}}</div>
           </div>
      </div>
    </div>
</template>

<script>
const { studioghibliapi } = require("./api");
module.exports = {
  name: "films",
  created() {
    this.listfilm();
  },
  data() {
    return {
      films: [],
      film: {}
    };
  },
  methods: {
    listfilm() {
      studioghibliapi.list().then(ret => (this.films = ret.data));
    }
  }
};
</script>

<style>

</style>

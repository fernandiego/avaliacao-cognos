<template>
  <div>{{message}}</div>
</template>

<script>
const { studioghibliapi } = require("./api")
module.exports = {
  name: "films",
  created() {
    this.listfilm();
  },
  data() {
    return {
      films: [],
      film: {
        
      }
    };
  },
  methods: {
    
    listfilm() {
      studioghibliapi.list().then(ret => (this.films = ret.data));
    }
  }
}
</script>

<style>

</style>

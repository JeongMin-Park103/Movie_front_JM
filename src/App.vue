<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

export default ({
    data() {
      return {
        datas: ''
      }
    },
    mounted() {
      axios.get("http://localhost:8000/yeme/movies")
        .then((data) => {
          this.datas = data

          console.log(this.datas)
    
        })
        .catch((err) => {
          console.log(err)
        })
    }
  })
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  color: #2c3e50;
  margin-top: 60px;
}
</style>




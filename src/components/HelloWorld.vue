<template>
  <div class="hello">

    <transition name="fade">
      <h1  v-if="show">{{ msg }}</h1>
    </transition>
    <button @click="show = !show">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color:red;
  }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/*.fade-enter-active, .fade-leave-active {*/
  /*transition: opacity 10s;*/
/*}*/
/*.fade-enter, .fade-leave-to !* .fade-leave-active below version 2.1.8 *! {*/
  /*opacity: 0;*/
/*}*/
.fade-enter-active,.fade-leave-active{
  transition:.5s;
}
  .fade-enter{
    transform:translate3d(100%,0,0);
  }
  .fade-leave-to{
    transform: translate3d(100%,0,0);
  }
  button{
    position: relative;
    z-index: 32;
  }
</style>

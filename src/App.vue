<template>
  <div id="app">
    <transition name="fade">
      <router-view class="route-view"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body{
  overflow:hidden;
  width:100%;
}
.fade-enter-active,
.fade-leave-active{
  transition:.5s;
}
.fade-enter{
  opacity:0;
  transform:translate3d(100%,0,0);
}
.fade-leave-to{
  opacity:0;
  transform: translate3d(100%,0,0);
}
.route-view{
  position: absolute;
  left:0;
  right:0;
}
</style>

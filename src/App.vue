<template>
  <main>
    <div id="header">
      <img id="SLCN" src="./assets/img/SLCN.png" />
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div id="footer">© Seoul CHONNOM</div>
  </main>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
@import "./assets/css/common.css";
#app {
  background-color: rgb(241, 214, 208);
}
</style>

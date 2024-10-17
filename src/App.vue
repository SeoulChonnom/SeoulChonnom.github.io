<template>
  <main>
    <div id="header">
      <img id="SLCN" src="./assets/img/SLCN.png" />
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
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
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  /* color: #2c3e50; */
  background-color: rgb(241, 214, 208);
}
main {
  background-color: rgb(252, 242, 242);
  padding-top: 1vh;
  padding-bottom: 1vh;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  text-align: center;
  /* height: 96vh; */
  width: 50vh;
}
#header {
  height: 10vh;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 0.5vh;
  border-radius: 10px;
  background-color: rgb(252, 242, 242);
}

#SLCN {
  height: 100%;
}
</style>

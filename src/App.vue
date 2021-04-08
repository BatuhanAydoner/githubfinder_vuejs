<template>
  <div id="app">
    <navbar title="GithubFinder-VUEJS" icon="fab fa-github"></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "../src/components/Navbar";
export default {
  components: {
    navbar: Navbar,
  },
};
</script>

<style></style>

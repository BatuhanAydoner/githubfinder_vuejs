<template>
  <div id="app">
    <navbar title="GithubFinder-VUEJS" icon="fab fa-github"></navbar>
    <transition name="slide">
      <router-view></router-view>
    </transition>
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

<style>
.slide-enter-active {
  animation: slide-in 1s ease-in-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0px);
  }
}
</style>

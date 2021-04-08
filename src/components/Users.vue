<template>
  <div class="container mt-3">
    <transition-group name="fade" tag="div" class="row">
      <user v-for="(user, index) in users" :key="index" :user="user"></user>
    </transition-group>
  </div>
</template>

<script>
import User from "./User";
export default {
  data() {
    return {
      allUsers: [],
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  components: {
    user: User,
  },
};
</script>

<style>
.div {
  display: inline-block;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

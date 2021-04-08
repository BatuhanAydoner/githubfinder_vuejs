<template>
  <div class="container mt-3">
    <div class="row">
      <user v-for="(user, index) in users" :key="index" :user="user"></user>
    </div>
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

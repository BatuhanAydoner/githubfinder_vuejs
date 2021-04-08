<template>
  <div>
    <div class="container">
      <div class="input-group mt-3">
        <input type="text" class="form-control" v-model="keyword" />
        <div class="input-group-append">
          <button class="btn btn-primary" @click="searchUsers">Search</button>
        </div>
      </div>
      <button
        class="btn btn-secondary btn-sm btn-block mt-2"
        @click="clear"
        v-if="this.$store.getters.getUsers.length > 0"
      >
        Clear Results
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    searchUsers() {
      axios
        .get(`https://api.github.com/search/users?q=${this.keyword}`)
        .then(({ data }) => {
          this.$store.dispatch("setUsers", data.items);
        });
    },
    clear() {
      this.$store.commit("clearAll");
    },
  },
};
</script>

<template>
  <div class="container my-3">
    <div class="row">
      <div class="col-md-3">
        <div class="card">
          <img :src="user.avatar_url" alt="" class="card-img-top" />
          <div class="card-body">
            <p class="card-text">{{ user.name }}</p>
            <p><i class="fas fa-map-marker-alt"></i> {{ user.location }}</p>
            <p>
              <a :href="user.html_url" class="btn btn-block btn-primary btn-sm">
                Github Profile
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="card">
          <div class="card-body">
            <h3>About</h3>
            <p>{{ user.bio }}</p>
            <h3>Blog</h3>
            <p>
              <a :href="user.blog">{{ user.blog }}</a>
            </p>
            <div>
              <span class="badge badge-primary m-1">
                Followers: {{ user.followers }}
              </span>
              <span class="badge badge-danger m-1">
                Following: {{ user.following }}
              </span>
              <span class="badge badge-success m-1">
                Repos: {{ user.public_repos }}
              </span>
            </div>
          </div>
          <repos :repos="repos"></repos>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Repos from "./Repos";
export default {
  components: {
    repos: Repos,
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
    repos() {
      return this.$store.getters.getRepos;
    },
  },
  methods: {
    getUser() {
      axios
        .get(`https://api.github.com/users/${this.$route.params.login}`)
        .then(({ data }) => {
          this.$store.dispatch("setUser", data);
        });
    },
    getUserRepos() {
      axios
        .get(`https://api.github.com/users/${this.$route.params.login}/repos`)
        .then(({ data }) => {
          this.$store.dispatch("setRepos", data);
        });
    },
  },
  created() {
    this.getUser();
    this.getUserRepos();
  },
};
</script>

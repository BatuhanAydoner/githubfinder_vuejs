<template>
  <div>
    <ul class="list-group list-group-flush">
      <repo v-for="(repo, index) in repos" :key="index" :repo="repo"></repo>
    </ul>
  </div>
</template>

<script>
import Repo from "./Repo";
export default {
  props: ["repos"],
  components: {
    repo: Repo,
  },
};
</script>

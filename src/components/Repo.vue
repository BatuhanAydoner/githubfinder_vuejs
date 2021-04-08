<template>
  <div>
    <li class="list-group-item">
      <i class="far fa-dot-circle"></i>
      <a :href="repo.html_url"> {{ repo.name }}</a>
    </li>
  </div>
</template>

<script>
export default {
  props: ["repo"],
};
</script>

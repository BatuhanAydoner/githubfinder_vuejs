<template>
  <div>
    <nav class="navbar navbar-dark bg-primary">
      <div class="container">
        <router-link tag="a" to="/" class="navbar-brand"
          ><i :class="icon"></i> {{ title }}</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
    icon: {
      type: String,
      require: true,
    },
  },
};
</script>

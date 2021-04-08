<template>
  <div>
    <search></search>
    <users></users>
  </div>
</template>

<script>
import Search from "./Search";
import Users from "./Users";
export default {
  components: {
    search: Search,
    users: Users,
  },
};
</script>

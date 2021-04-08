<template>
  <div class="col-md-3 col-sm-6 col-lg-3">
    <div class="card mt-2">
      <img :src="user.avatar_url" alt="" class="img-fluid" />
      <div class="card-body">
        <div class="card-title">
          <router-link
            :to="{ name: 'UserDetail', params: { login: user.login } }"
            class="btn btn-primary btn-block"
            ><i>Go to Profile</i></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>

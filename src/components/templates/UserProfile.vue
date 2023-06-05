<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <edit-profile-form>
          </edit-profile-form>
        </div>
        <div class="col-md-4">
          <div v-if="User!=null" id="user-div">
            <p>{{ User.username }}</p>
            <p>{{ User.fullname }}</p>
            <p>{{ User.entityInfo.name }}</p>
          </div>
          <user-card>
          </user-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from "vuex";
  export default {
    name:'UserProfile',
    components: {

    },
    computed: {
    ...mapGetters({  User: "StateUser" }),
  },
  }

</script>
<style>

</style>

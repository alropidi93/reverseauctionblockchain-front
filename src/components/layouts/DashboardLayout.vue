<template>
  <div class="wrapper">
    <side-bar>
      <!-- <mobile-menu ><template v-slot:content></template></mobile-menu> -->
 
      <sidebar-link viewRouteName="User">
        <i class="nc-icon nc-circle-09"></i>
        <p>User Profile</p>
      </sidebar-link>
      <sidebar-link  viewRouteName="Auctions">
        <i class="nc-icon nc-circle-09"></i>
        <p>Subastas</p>
      </sidebar-link>
      <sidebar-link  viewRouteName="Create-Auction">
        <i class="nc-icon nc-circle-09"></i>
        <p>Crear convocatoria</p>
      </sidebar-link>
      <!-- <sidebar-link to="/admin/table-list">
        <i class="nc-icon nc-notes"></i>
        <p>Table list</p>
      </sidebar-link>
      <sidebar-link to="/admin/typography">
        <i class="nc-icon nc-paper-2"></i>
        <p>Typography</p>
      </sidebar-link>
      <sidebar-link to="/admin/icons">
        <i class="nc-icon nc-atom"></i>
        <p>Icons</p>
      </sidebar-link>
      <sidebar-link to="/admin/maps">
        <i class="nc-icon nc-pin-3"></i>
        <p>Maps</p>
      </sidebar-link>
      <sidebar-link to="/admin/notifications">
        <i class="nc-icon nc-bell-55"></i>
        <p>Notifications</p>
      </sidebar-link> -->

    
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'

  export default {
    components: {
      TopNavbar
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>

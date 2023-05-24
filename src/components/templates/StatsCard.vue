<template>
  <card class="card-stats">
    <div class="row">
      <div class="col-5" v-if="$slots.header">
        <div class="icon-big text-center">
          <slot name="header"></slot>
        </div>
      </div>
      <div class="col-7" v-if="$slots.content">
        <div class="numbers">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
    <template v-slot:footer v-if="$slots.footer">
      <div  class="stats" >
        <slot name="footer"></slot>
      </div>
    </template>
  </card>
</template>
<script>
  import Card from './Card.vue'
  export default {
    name: 'stats-card',
    components: {
      Card
    }
  }

</script>
<style>

</style>

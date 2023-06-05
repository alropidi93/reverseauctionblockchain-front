<template>
    <table class="table">
      <thead>
        <slot name="columns">
          <tr>
            <th v-for="column in columns" :key="column.map">{{column.label}}</th>
            <th> Acciones</th>
          </tr>
        </slot>
      </thead>
      <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <slot :row="item">
          <td v-for="(column,index) in columns" :key="index" >{{itemValue(item, column.map)}} </td>
          <td><router-link :to="{ name: 'Selection-Auction-Detail',params: { auctionCode: itemValue(item, columns[0].map) }}"  >Ver ficha de seleccón</router-link> </td>
        </slot>
      </tr>
      </tbody>
    </table>
  </template>
<script>
  export default {
    name: 'l-table',
    props: {
      columns: Array,
      data: Array
    },
    methods: {
      itemValue (item, column) {
        return item[column]
      }
    },
    computed: {

      
    },
  }
</script>
<style>
</style>
  
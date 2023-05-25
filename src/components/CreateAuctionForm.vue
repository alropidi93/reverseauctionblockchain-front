<template>
  
  <form @submit.prevent="submit">
  <!-- 2 column grid layout with text inputs for the first and last names -->
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text"  class="form-control"  v-model="createForm.code" />
        <label class="form-label" >Código Convocatoria</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" class="form-control" v-model="createForm.name"/>
        <label class="form-label" >Nombre de convocatoria</label>
      </div>
    </div>
  </div>
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text"  class="form-control" v-model="createForm.description" />
        <label class="form-label" >Descripcion</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" class="form-control" v-model="createForm.referenceValue"/>
        <label class="form-label" >Valor estimado</label>
      </div>
    </div>
  </div>


  <div class="row mb-4">
    
    <div class="col">
      <div class="form-outline">
        <select class="form-select" v-model="createForm.goodServiceCode" >
          <option  :value="'default'" >Elige el bien o servicio</option>
          <option v-for="(opcion,index) in GoodServices" v-bind:key="index" :value="opcion.code" >{{ opcion.name }}</option>
        </select>

      </div>
    </div>
  </div>

  


  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block mb-4">Place order</button>
</form>
</template>

<script>
// const idEntidadConvocante = "ENT000001";


import { mapGetters, mapActions } from "vuex";
export default {
  name: "Create-Auction",
  components: {},
  data() {
    return {
      
      createForm:{
        code:"",
        name:"",
        description:"",
        referenceValue:0.0,
        goodServiceCode:"default",
      }

    };
  },
  created: function() {
    // a function to call getusers action
    console.log("crea form");
  },
  mounted:function(){
    console.log("monta form");
    this.GetGoodServices()
  },
  computed: {
    ...mapGetters({ GoodServices: "GoodServices" }),
  },
  methods: {
    ...mapActions([ "CreateAuction","GetGoodServices"]),
    async submit(){
      console.log("Crearemos");
      // await this.CreateAuction(this.createForm);
      
    }
    
  },
};
</script>
<style scoped>

</style>
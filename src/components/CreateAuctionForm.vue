<template>
  <div class="col-lg-16 mx-2 p-3 py-md-5">
 

 <main>
     <h1>Registro de subasta</h1>
  
 

     <hr class="col-3 col-md-2 mb-5">
     

     <div class="row g-5">
 

     <div class="col-md-12">
      <form @submit.prevent="submit">
        <div class="row mb-6">
            <b>Datos de subasta</b>
        </div>
        <!-- 2 column grid layout with text inputs for the first and last names -->
        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <div class="form-label" >Código Convocatoria</div>
              <input type="text"  class="form-control"  v-model="createForm.code" />
              
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <div class="form-label" >Nombre de convocatoria</div>
              <input type="text" class="form-control" v-model="createForm.name"/>
              
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <div class="form-label" >Descripción</div>
              <input type="text"  class="form-control" v-model="createForm.description" />
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <div class="form-label" >Valor estimado</div>
              <input type="text" class="form-control" v-model="referenceValue" :disabled="true"/>

            </div>
          </div>
        </div>


        

        <hr class="col-3 col-md-2 mb-5">
        <div class="row mb-6">
            <b>Datos de item</b>
        </div>
        <!-- 2 column grid layout with text inputs for the first and last names -->
        <div class="row mb-4">
          
          <div class="col-md-4">
            <div class="form-outline">
              <select class="form-select" v-model="createForm.goodServices[0].code" >
                <option  :value="'default'" >Elige el bien o servicio</option>
                <option v-for="(opcion,index) in GoodServices" v-bind:key="index" :value="opcion.code" >{{ opcion.name }}</option>
              </select>

            </div>
          </div>
        </div>

        <div class="row mb-4" v-if="createForm.goodServices[0].code!=null && createForm.goodServices[0].code!='default'">
          <div class="col">
            <div class="form-outline">
              <div class="form-label" >Cantidad</div>
              <input type="text"  class="form-control"  v-model="createForm.goodServices[0].quantity" @change="updateSubtotal()" />
              
            </div>
          </div>
          <div class="col" >
            <div class="form-outline">
              <div class="form-label" >Unidad</div>
              <div class="form-control" >{{(GoodServices.filter(obj => obj.code == createForm.goodServices[0].code ).map(obj => obj.dimension))[0]}}</div>
              
            </div>
          </div>
          <div class="col" >
            <div class="form-outline">
              <div class="form-label" >Valor unitario</div>
              <div class="form-control" >{{(GoodServices.filter(obj => obj.code == createForm.goodServices[0].code ).map(obj => obj.unitPrice))[0]}}</div>
              
            </div>
          </div>
        </div>
        
        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block mb-4">Crear subasta</button>
      </form>
         
 
         
         
     </div>
     </div>
     
 </main>

 </div>
  

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
        goodServices:[{"code":"default","quantity":0,"subtotal":0}]
      }

    };
  },
  created: function() {
    // a function to call getusers action
    console.log("crea form");
  },
  mounted: async function(){
    console.log("monta form");
    await this.GetGoodServices()

  },
  computed: {
    ...mapGetters({ GoodServices: "GoodServices" , CurrentUser: "StateUser"}),

    referenceValue : function(){
        
        return this.createForm.goodServices.map(obj => obj.subtotal).reduce((sum, num) => sum + num)

    },
  },
  methods: {
    ...mapActions([ "CreateAuction","GetGoodServices"]),
    async submit(){
      console.log("Crearemos");
      console.log(this.CurrentUser.entityInfo.code);
      this.createForm.referenceValue = this.referenceValue
      var payload = {"entityCode":this.CurrentUser.entityInfo.code,"auctionData":this.createForm}
      await this.CreateAuction(payload);
      
    },
    updateSubtotal(){
      console.log("actualizamos subtotal");
      console.log(this.createForm.goodServices[0].quantity);
      console.log((this.GoodServices.filter(obj => obj.code == this.createForm.goodServices[0].code ).map(obj => obj.unitPrice))[0]);
      
      this.createForm.goodServices[0].subtotal = parseInt (this.createForm.goodServices[0].quantity) *   (this.GoodServices.filter(obj => obj.code == this.createForm.goodServices[0].code ).map(obj => obj.unitPrice))[0]
      this.$forceUpdate();
    }
    
  },
};
</script>
<style scoped src="@/assets/css/custom-auction.css">
</style>
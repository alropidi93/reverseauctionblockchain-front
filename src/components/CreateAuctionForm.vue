<template>
  <form @submit.prevent="submit">
    <p>Información general</p> 
    <label>Nro expediente</label><br>
    <input v-model="createForm.auctionCode"><br>
    <label >Nomenclatura</label><br>
    <input v-model="createForm.auctionName">
    <hr> 
    <!-- <p>Información general de la entidad</p>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname">
    <hr>  -->
    <p>Información general del procedimiento</p>
    <label for="fname">Objeto de contratación</label><br>
    <select class="form-control" v-model="createForm.procurementType" >
      <option :selected="true">Elige objeto de contratación</option>
      <option v-for="(opcion,index) in opciones" v-bind:key="index" >{{ opcion }}</option>
    </select>
    <button type="submit">
      Crear
    </button>
  </form> 
  <form>
  <!-- 2 column grid layout with text inputs for the first and last names -->
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form6Example1" class="form-control" />
        <label class="form-label" for="form6Example1">First name</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form6Example2" class="form-control" />
        <label class="form-label" for="form6Example2">Last name</label>
      </div>
    </div>
  </div>
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form6Example1" class="form-control" />
        <label class="form-label" for="form6Example1">First name</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form6Example2" class="form-control" />
        <label class="form-label" for="form6Example2">Last name</label>
      </div>
    </div>
  </div>
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form6Example1" class="form-control" />
        <label class="form-label" for="form6Example1">First name</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form6Example2" class="form-control" />
        <label class="form-label" for="form6Example2">Last name</label>
      </div>
    </div>
  </div>

  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form6Example2" class="form-control" />
        <label class="form-label" for="form6Example2">Last name</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <select class="form-select" v-model="createForm.goodServiceCode" >
          <option  :value="'default'" >Elige el bien o servicio</option>
          <option v-for="(opcion,index) in GoodServices" v-bind:key="index" :value="opcion.code" >{{ opcion.name }}</option>
        </select>

      </div>
    </div>
  </div>

  

  <!-- Text input -->
  <div class="form-outline mb-4">
    <input type="text" id="form6Example3" class="form-control" />
    <label class="form-label" for="form6Example3">Company name</label>
  </div>

  <!-- Text input -->
  <div class="form-outline mb-4">
    <input type="text" id="form6Example4" class="form-control" />
    <label class="form-label" for="form6Example4">Address</label>
  </div>

  <!-- Email input -->
  <div class="form-outline mb-4">
    <input type="email" id="form6Example5" class="form-control" />
    <label class="form-label" for="form6Example5">Email</label>
  </div>

  <!-- Number input -->
  <div class="form-outline mb-4">
    <input type="number" id="form6Example6" class="form-control" />
    <label class="form-label" for="form6Example6">Phone</label>
  </div>

  <!-- Message input -->
  <div class="form-outline mb-4">
    <textarea class="form-control" id="form6Example7" rows="4"></textarea>
    <label class="form-label" for="form6Example7">Additional information</label>
  </div>

  <!-- Checkbox -->
  <div class="form-check d-flex justify-content-center mb-4">
    <input class="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked />
    <label class="form-check-label" for="form6Example8"> Create an account? </label>
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
        auctionCode:"",
        auctionName:"",
        procurementType:0,
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
      await this.CreateAuction(this.createForm);
      
    }
    
  },
};
</script>
<style scoped>

</style>
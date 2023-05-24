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
</template>

<script>
// const idEntidadConvocante = "ENT000001";
const objetoContratacionOpciones = ["bien", "servicio"];
import { mapActions } from "vuex";
export default {
  name: "Create-Auction",
  components: {},
  data() {
    return {
      
      createForm:{
        auctionCode:"",
        auctionName:"",
        procurementType:"",
      },
      opciones:[...objetoContratacionOpciones],

    };
  },
  created: function() {
    // a function to call getusers action
    console.log("crea form");
  },
  mounted:function(){
    console.log("monta form");
  },
  computed: {
    
  },
  methods: {
    ...mapActions([ "CreateAuction"]),
    async submit(){
      console.log("Crearemos");
      await this.CreateAuction(this.createForm);
      
    }
    
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 30px;
  margin: 10px;
}
button[type="submit"]:hover {
  background-color: #45a049;
}
input {
  width: 60%;
  margin: 15px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  border-radius: 30px;
}
textarea {
  width: 75%;
  resize: vertical;
  padding: 15px;
  border-radius: 15px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  height: 150px;
  margin: 15px;
}
ul {
  list-style: none;
}
#user-div {
  border: 3px solid #000;
  width: 500px;
  margin: auto;
  margin-bottom: 5px;
}
</style>
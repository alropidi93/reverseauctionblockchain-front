<template>
   
    
   <div class="col-lg-16 mx-2 p-3 py-md-5">
 

  <main>
    <h1>Registrar primera oferta</h1>
  

    <hr class="col-3 col-md-2 mb-5">
    

    <div class="row g-5">
      <div class="col-md-12">
        <div>
            <div class="row mb-6">
                <b>Información general</b>
            </div>
            <div class="row mb-6">
                <div class="col-5 themed-grid-col">Código de subasta:</div>
                <div class="col-7 themed-grid-col">conv-001</div>
            </div>
            <div class="row mb-6">
                <div class="col-5 themed-grid-col">Nomenclatura:</div>
                <div class="col-7 themed-grid-col">Subasta 001 DASDASD_12214</div>
            </div>
            <div class="row mb-6">
                <div class="col-5 themed-grid-col">Nro de convocatoria:</div>
                <div class="col-7 themed-grid-col">1</div>
            </div>
            <div class="row mb-6">
                <div class="col-5 themed-grid-col">Objeto de contratación:</div>
                <div class="col-7 themed-grid-col">Bien</div>
            </div>
            <div class="row mb-6">
                <div class="col-5 themed-grid-col">Descripción del objeto:</div>
                <div class="col-7 themed-grid-col">Adquisición de material de construcción</div>
            </div>
        </div>
        
        <hr class="col-3 col-md-2 mb-5">
        <form @submit.prevent="submit">
          <!-- 2 column grid layout with text inputs for the first and last names -->
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <input type="text"  class="form-control"   />
                <label class="form-label" >Primera oferta</label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input type="text" class="form-control"/>
                <label class="form-label" >Descripción de primera oferta</label>
              </div>
            </div>
          </div>


     
          


          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-block mb-4">Enviar oferta</button>
        </form>
                

      </div>

  
    </div>
    
  </main>

</div>
   
 
  </template>
  
  <script>
  // const idEntidadConvocante = "ENT000001";
  
  export default {
    name: "Auction-First-Bid",
    components: {},
    data() {
      return {
       
  
      };
    },
    created: function() {

      console.log("crea form");
      console.log(this.$route.params.auctionCode);
    },
    mounted:function(){
      console.log("monta form");

    },
    computed: {

      
    },
    methods: {
     
  
      
    },
  };
  </script>
<style scoped src="@/assets/css/custom-auction.css">
</style>

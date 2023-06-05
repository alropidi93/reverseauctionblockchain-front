<template>
   
    
   <div class="col-lg-16 mx-2 p-3 py-md-5">
 

  <main>
    <h1>Puja de ofertas</h1>
  

    <hr class="col-3 col-md-2 mb-5">
    

    <div class="row g-5">
      <div class="row mb-12 d-flex justify-content-center" >
        
        <strong>Datos generales</strong>

      </div>
      <div class="col-md-6">
        <div>
            
            <div class="row mb-6">
                <div class="col-5 themed-grid-col">Fecha y hora actual:</div>
                <div class="col-7 themed-grid-col">10/06/2023 12:20</div>
            </div>
            <div class="row mb-6">
                <div class="col-5 themed-grid-col">Representante del postor:</div>
                <div class="col-7 themed-grid-col">Postor 001</div>
            </div>
        </div>

      </div>

      <div class="col-md-6">
        <div>
           
            <div class="row mb-6">
                <div class="col-5 themed-grid-col">Tiempo transcurrido:</div>
                <div class="col-7 themed-grid-col">25 min</div>
            </div>
        </div>
        
      </div>
  
    </div>
    <hr class="col-3 col-md-2 mb-5">
        <div>
          <div class="row mb-12 d-flex justify-content-center" >
        
            <strong>Datos del lance</strong>

          </div>
          <br>
          <div class="row mb-6">
              <div class="table-responsive">
                  <table class="table table-striped table-sm">
                  <thead>
                      <tr>
                      <th scope="col">Nro. Item</th>
                      <th scope="col">Descripción de item</th>
                      <th scope="col">Último lance</th>
                      <th scope="col">Estado propuesta</th>
                      <th scope="col">Estado de la sesión</th>
                      <th scope="col">Nuevo lance</th>
                 
                  
                      </tr>
                  </thead>
                  <tbody>
                      <tr >
                      <td>1</td>
                      <td>Cemento Portland Compuesto Tipo ICo X 42.50 kg</td>
                      <td>50000.00</td>
                      <td>OK</td>
                      <td>Abierto</td>
                          
                      <td><input type="text"/><router-link :to="{ name: 'Selection-Auction-Detail',params: { auctionCode: $route.params.auctionCode }}"  >Ir</router-link> </td>
                      </tr>
                      </tbody>
                  </table>
                    
              </div>
        
          </div>
            
        </div>
    
  </main>

</div>
   
 
  </template>
  
  <script>
  // const idEntidadConvocante = "ENT000001";
  
  export default {
    name: "Auction-Price-Bid",
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


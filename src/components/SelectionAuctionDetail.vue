<template>
   
    
   <div class="col-lg-16 mx-2 p-3 py-md-5">
 

    <main>
        <h1>Convocatoria</h1>
        <button><router-link :to="{ name: 'Activities-Auction-Detail',params: { auctionCode: $route.params.auctionCode}}"  >Ver listado de actividades</router-link> </button>
    

        <hr class="col-3 col-md-2 mb-5">
        

        <div class="row g-5">
        <div class="col-md-6">
            <div>
                <div class="row mb-6">
                    <b>Información general</b>
                </div>
                <div class="row mb-6">
                    <div class="col-5 themed-grid-col">Código de subasta:</div>
                    <div class="col-7 themed-grid-col">{{$route.params.auctionCode}}</div>
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
                    <div class="col-5 themed-grid-col">Tipo de compra o selección:</div>
                    <div class="col-7 themed-grid-col">Por la entidad</div>
                </div>
                <div class="row mb-6">
                    <div class="col-5 themed-grid-col">Normativa aplicable:</div>
                    <div class="col-7 themed-grid-col">Ley N° 30225 - Ley de Contrataciones del Estado</div>
                </div>
            </div>
            <hr class="col-3 col-md-2 mb-5">
            <div>
            
                <div class="row mb-6">
                    <b>Información general de la entidad</b>
                </div>
                <div class="row mb-6">
                    <div class="col-5 themed-grid-col">Entidad convocante:</div>
                    <div class="col-7 themed-grid-col">Comisaria A</div>
                </div>
                <div class="row mb-6">
                    <div class="col-5 themed-grid-col">Dirección legal:</div>
                    <div class="col-7 themed-grid-col">Av. Los lagos 145</div>
                </div>
                <div class="row mb-6">
                    <div class="col-5 themed-grid-col">Página web:</div>
                    <div class="col-7 themed-grid-col">https://www.gob.pe/perucompras</div>
                </div>
                <div class="row mb-6">
                    <div class="col-5 themed-grid-col">Teléfono de la entidad:</div>
                    <div class="col-7 themed-grid-col">3495746</div>
                </div>
        
            </div>
            <hr class="col-3 col-md-2 mb-5">
            <div>
                <div class="row mb-6">
                    <b>Información general del procedimiento</b>
                </div>
                
                <div class="row mb-6">
                    <div class="col-5 themed-grid-col">Objeto de contratación:</div>
                    <div class="col-7 themed-grid-col">Bien</div>
                </div>
                <div class="row mb-6">
                    <div class="col-5 themed-grid-col">Descripción del objeto:</div>
                    <div class="col-7 themed-grid-col">ADQUISION DE MATERIAL DE CONSTRUCCCION</div>
                </div>
                <div class="row mb-6">
                    <div class="col-5 themed-grid-col">Valor estimado total:</div>
                    <div class="col-7 themed-grid-col">10000.00</div>
                </div>

            </div>
        </div>

        <div class="col-md-6">
            <div>
                <div class="row mb-6">
                    <b>Cronograma</b>
                </div>
                <div class="row mb-6">
                    <div class="table-responsive">
                        <table class="table table-striped table-sm">
                        <thead>
                            <tr>
                            <th scope="col">Etapa</th>
                            <th scope="col">Fecha inicio</th>
                            <th scope="col">Fecha fin</th>
                    
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Convocatoria</td>
                            <td>10/06/2023</td>
                            <td>10/06/2023</td>
                            </tr>
                            <tr>
                            <td>Registro de participantesy presentación de ofertas</td>
                            <td>10/06/2023</td>
                            <td>10/06/2023</td>
                            </tr>
                            <tr>
                            <td>Periodo de lances</td>
                            <td>10/06/2023</td>
                            <td>10/06/2023</td>
                            </tr>
                            <tr>
                            <td>Otorgamiento de la buena pro</td>
                            <td>10/06/2023</td>
                            <td>10/06/2023</td>
                            </tr>
                        </tbody>
                        </table>
                        
                    </div>
                    <div >
                    <p><b>El proceso se encuentra en la etapa "Periodo de lances"</b></p>
                    </div>
                </div>
                
            </div>
            <hr class="col-3 col-md-2 mb-5">
            <div>
                <div class="row mb-6">
                    <b>Entidades contratantes</b>
                </div>
                <div class="row mb-6">
                    <div class="table-responsive">
                        <table class="table table-striped table-sm">
                        <thead>
                            <tr>
                            <th scope="col">Entidad Contratante</th>
                            <th scope="col">RUC</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Comisaria A</td>
                            <td>20054859459459</td>
                            </tr>
                        

                        </tbody>
                        </table>
                        
                    </div>
                
                </div>
            </div>

            
    
            
            
        </div>
        </div>
        
    </main>

    </div>
   
 
  </template>
  
  <script>
  // const idEntidadConvocante = "ENT000001";
  
  export default {
    name: "Selection-Auction-Detail",
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

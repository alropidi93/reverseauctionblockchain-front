<template>
   
    
   <div class="col-lg-16 mx-2 p-3 py-md-5">
 

  <main>
    <h1>Actividades</h1>
  

    <hr class="col-3 col-md-2 mb-5">
    

    <div class="row g-5">
      <div class="col-md-12">
        <div>
            <div class="row mb-6">
                <b> Información general</b>
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
        <div>
            <div class="row mb-6">
                <b>Cronograma</b>
            </div>
            <div class="row mb-6">
                <div class="table-responsive">
                    <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                        <th scope="col">Nro.</th>
                        <th scope="col">Fecha inicio</th>
                        <th scope="col">Fecha fin</th>
                        <th scope="col">Actividad</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Registro</th>
                        <th scope="col">Acciones de la actividad</th>
                   
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(phase, index) in phases" :key="index">
                        <td>{{ phase.order }}</td>
                        <td>{{phase.startDate}}</td>
                        <td>{{ phase.endDate }}</td>
                        <td>{{phase.phaseName}}</td>
                        <td>{{ phase.state }}</td>
                        <td>{{phase.registerState}}</td>
                        <td><router-link :to="{ name: phasesRouteNames[phase.order -1] ,params: { auctionCode: $route.params.auctionCode}}"  >Ir</router-link></td>
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
  import '@/assets/css/custom-auction.css';
    const phasesData = [
        {'order':1,'startDate':'10/06/2023','endDate':'10/06/2023','phaseName':'Registrar participante','state':'Terminado','registerState':'Con registro'},
        {'order':2,'startDate':'10/06/2023','endDate':'10/06/2023','phaseName':'Presentación de oferta','state':'Terminado','registerState':'Con registro'},
        {'order':3,'startDate':'10/06/2023','endDate':'10/06/2023','phaseName':'Mejora de precios','state':'En curso','registerState':'Registrando'},
    ]
    const phaseRoute = ['Auction-Bidder-Enrollment','Auction-First-Bid','Auction-Price-Bid' ]
  export default {
    name: "Activities-Auction-Detail",
    components: {},
    data() {
      return {
       
        phases: [...phasesData],
        phasesRouteNames: [...phaseRoute],
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

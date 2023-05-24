<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive"
          >
            <template v-slot:header>
              <h4 class="card-title">Mis subastas (Rol Postor  - Entidad)</h4>
            
            </template>
            <l-table class="table-hover table-striped"
                     :columns="table1.columns"
                     :data="table1.data">
            </l-table>
          </card>

        </div>

 

      </div>
    </div>
  </div>
</template>
<script>
import LTable from '@/components/templates/Table.vue'
import Card from '@/components/templates/Card.vue'

const tableColumns = ['Id', 'Name', 'Salary', 'Country', 'City']
const tableData = [{
  id: 1,
  name: 'Dakota Rice',
  salary: '$36.738',
  country: 'Niger',
  city: 'Oud-Turnhout'
},
{
  id: 2,
  name: 'Minerva Hooper',
  salary: '$23,789',
  country: 'Curaçao',
  city: 'Sinaai-Waas'
},
{
  id: 3,
  name: 'Sage Rodriguez',
  salary: '$56,142',
  country: 'Netherlands',
  city: 'Baileux'
},
{
  id: 4,
  name: 'Philip Chaney',
  salary: '$38,735',
  country: 'Korea, South',
  city: 'Overland Park'
},
{
  id: 5,
  name: 'Doris Greene',
  salary: '$63,542',
  country: 'Malawi',
  city: 'Feldkirchen in Kärnten'
}]


import { mapGetters, mapActions } from "vuex";
export default {
  name: "AuctionDashboard",
  components: {
      LTable,
      Card
  },
  data() {
    return {
      form: {
        title: "",
        write_up: "",
      },
      table1: {
          columns: [...tableColumns],
          data: [...tableData]
        },
      table2: {
        columns: [...tableColumns],
        data: [...tableData]
      }
    };
  },
  created: function() {
    this.GetAuctions()
  },
  computed: {
    ...mapGetters({ Auctions: "Auctions" }),
  },
  methods: {
    ...mapActions([ "GetAuctions"]),
    
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


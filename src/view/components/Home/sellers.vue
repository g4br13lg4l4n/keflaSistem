<template>
  <div class="container-activity">
    <div class="head-container">
      <h2>Vendedores</h2>
      <div class="options"> 

        <button id="show-modal" @click="showModal = true">Agregar Vendedor</button>
        <FormSeller v-if="showModal" @close="showModal = false" @test="callback">
          <h3 slot="header">Agregar nuevo Vendedor</h3>
        </FormSeller>
        <form action="" >
          <input type="text" name="v-vendedor" v-model="findSeller" id="b-vendedor" placeholder="Buscar Vendedor">
        </form>
      </div>
    </div>
    <div class="body-container">
      <table>
        <thead> 
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Region</th>
            <th>Estatus</th>
            <th>Opciones</th>
          </tr>
        </thead>

        <tfoot> <!-- Pie de tabla -->
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Region</th>
            <th>Estatus</th>
            <th>Opciones</th>
          </tr>
        </tfoot>

        <tbody> <!-- Cuerpo de la tabla -->
          <tr v-for="(seller, index) in sellersFilter" :key="seller.id">
            <td>{{ seller._id }}</td>
            <td>{{ seller.name }}</td>
            <td>{{ seller.email }}</td>
            <td>{{ seller.phone }}</td>
            <td>{{ seller.address }}</td>
            <th>{{ seller.region }}</th>
            <td>{{ seller.isActive | status }}</td>
            <td> <button @click="Delete(seller._id, index)">Eliminar</button> </td>
          </tr>
        </tbody>  
      </table>
    </div> 
  </div>
</template>
<script>
import FormSeller from '../Forms/form-seller.vue'

  export default {
    name: 'Sellers',
    components: {FormSeller},
    data() {
      return {
        showModal: false,
        API_URL : null,
        sellers: null,
        findSeller: ""
      }
    },
    computed: {
      sellersFilter() {
        var findSeller = this.findSeller
        if(findSeller === "") {
          return this.sellers
        } else {
          return this.sellers.filter((seller) => {
            let name = seller.name.toLowerCase().indexOf(this.findSeller.toLowerCase()) > -1
            if(name){
              return name
            }else {
              return seller.phone.toLowerCase().indexOf(this.findSeller.toLowerCase()) > -1
            }
          })
        }
      }
    },
    methods: {
      Delete(id, index) {
        if(window.confirm("¿Desea eliminar este Vendedor?")){          
          axios.delete(this.API_URL+'/api/v1/seller', { data: { _id: id } })
          .then( resp => {
            this.$delete(this.sellers, index)
          })
          .catch( err => {
            console.log(err)
          }) 
        } 
      },
      callback(data){
        this.sellers.push(data.result)
        this.showModal = false
      }
    },
    created () {
      this.API_URL = window.Params.URL_API
    },
    mounted () {
      axios.get(this.API_URL+'/api/v1/sellers')
      .then(resp => {
        this.sellers = resp.data.data.result
      })
    },
    filters: {
      status: (value) => {
        if (!value) return ''
        if(value == true){
          return 'Activo'
        }else { return 'Inactivo' }
      },
      data: (value) => {
        if (!value) return ''
        const data = new Date(value)
        const year = data.getFullYear()
        const getMonth = data.getMonth()
        const getDate = data.getDate()
        return `${getDate}/${getMonth}/${year}`
      },
      hour: (value) => {
        if(!value) return '' 
        const data = new Date(value)
        const hours = data.getHours()
        const minutes = data.getMinutes()
        return `${hours}:${minutes}`
        }
    }
  }
</script>
<style>
  .head-container {
    display: flex;
    flex-direction: row;
    flex-wrap:nowrap;
    align-items:center;
  }
  .options {
    width: 70%;
    margin-left: 5%;
    display: flex;
    justify-content: space-between;
  }
  .head-container h2 {
    font-family: 'Arial';
    font-size: 2em;
    padding: 10px 0 20px 20px;
  }
  table {
    width: 100%;
    text-align: center;
    font-family: 'Helvetica';
  }
  table thead tr{
    margin-bottom: 20px;
    border: 1px solid #cccccc;
  }
</style>
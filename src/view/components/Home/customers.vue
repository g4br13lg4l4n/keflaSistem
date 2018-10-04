<template>
  <div class="container-activity">
    <div class="head-container">
      <h2>Compradores | Clientes</h2>
    </div>
    <div class="body-container">
      <table>
        <thead> <!-- Pasajeros del vuelo 377 -->
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Estatus</th>
            <th>Opciones</th>
          </tr>
        </thead>

        <tfoot> <!-- Pie de tabla -->
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Estatus</th>
            <th>Opciones</th>
          </tr>
        </tfoot>

        <tbody> <!-- Cuerpo de la tabla -->
          <tr v-for="(customer, index) in customers" :key="customer.id">
            <td>{{ customer.name }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.phone }}</td>
            <td>{{ customer.isActive | status }}</td>
            <td> <button @click="Delete(customer._id, index)"> Eliminar </button> </td>
          </tr>
        </tbody>  
      </table>
    </div> 
  </div>
</template>
<script>
  export default {
    name: 'Costomers',
    data() {
      return {
        API_URL : null,
        customers: null
      }
    },
    created () {
      this.API_URL = window.Params.URL_API
    },
    methods: {
      Delete(id, index) {
        if(window.confirm("¿Desea eliminar este Comprador?")){
          axios.delete(this.API_URL+'/api/v1/customer', { data: { _id: id } })
          .then( resp => {
            this.$delete(this.customers, index)
          })
          .catch( err => {
            console.log(err)
          }) 
        } 
      },
    },
    mounted () {
      axios.get(this.API_URL+'/api/v1/customers')
      .then(resp => {
        this.customers = resp.data.data.result
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


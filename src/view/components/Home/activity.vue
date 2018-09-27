<template>
  <div class="container-activity">
    <div class="head-container">
      <h2>Actividad ()</h2>
    </div>
    <div class="body-container">
      <table>
        <thead> <!-- Pasajeros del vuelo 377 -->
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Vendedores</th>
            <th>Origen</th>
            <th>Destino</th>
            <th>Distance</th>
            <th>Cantidad</th>
            <th>Estatus</th>
            <th>Opciones</th>
          </tr>
        </thead>

        <tfoot> <!-- Pie de tabla -->
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Vendedores</th>
            <th>Origen</th>
            <th>Destino</th>
            <th>Distance</th>
            <th>Cantidad</th>
            <th>Estatus</th>
            <th>Opciones</th>
          </tr>
        </tfoot>

        <tbody> <!-- Cuerpo de la tabla -->
          <tr v-for="(activity , index) in activities" :key="activity.id">
            <td>{{ activity.created | data}}</td>
            <td>{{activity.created | hour}}</td>
            <td v-if="activity.product != '[]'">{{activity.product[0].name }}</td> <td v-else> Sin datos </td>
            <td v-if="activity.product != '[]'">{{activity.product[0].price | clear}}</td> <td v-else> Sin datos </td>
            <td>{{activity.seller[0].name}}</td>
            <td>{{ activity.origin }}</td>
            <td>{{ activity.destination }}</td>
            <td>{{ activity.distance }}</td>
            <td>{{activity.quantity}}</td>
            <td>{{activity.status}}</td>
            <td><button @click="Delete(activity._id, index)"> Eliminar </button> </td>
          </tr>
        </tbody>  
      </table>
    </div> 
  </div>
</template>
<script>
  export default {
    name: 'Activity',
    data() {
      return {
        API_URL : null,
        activities: null
      }
    },
    created () {
      this.API_URL = window.Params.URL_API
    },
    mounted () {
      axios.get(this.API_URL+'/api/v1/orders/activities')
      .then(resp => {
        this.activities = resp.data.data.result
      })
      .catch(err => {
        console.log(err)
      })
    },
    methods:  {
      Delete(id, index) {
        if(window.confirm("¿Desea eliminar este pedido?")){
          axios.delete(this.API_URL+'/api/v1/order/', { _id: id })
          .then( resp => {
            this.$delete(this.activities, index)
          })
          .catch( err => {
            console.log(err)
          }) 
        } 
      },
    },
    filters: {
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
    border-spacing: 10px 10px;
  }
  table thead tr{
    border: 1px solid #cccccc;
  }
</style>

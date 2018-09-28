<template>
  <div class="container-activity">
    <div class="head-container">
      <h2>Productos</h2>
    </div>
    <div class="body-container">
      <table>
        <thead> <!-- Pasajeros del vuelo 377 -->
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Active</th>
            <th>Fecha</th>
          </tr>
        </thead>

        <tfoot> <!-- Pie de tabla -->
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Active</th>
            <th>Fecha</th>
          </tr>
        </tfoot>

        <tbody> <!-- Cuerpo de la tabla -->
          <tr v-for="(product , index) in products" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{product.price }}</td>
            <td>{{product.description}}</td>
            <td>{{product.isActive}}</td>
            <td>{{product.created | data}}</td>
            <td><button @click="Delete(product._id, index)"> Eliminar </button> </td>
          </tr>
        </tbody>  
      </table>
    </div> 
  </div>
</template>
<script>
  export default {
    name: 'products',
    data() {
      return {
        API_URL : null,
        products: null
      }
    },
    created () {
      this.API_URL = window.Params.URL_API
    },
    mounted () {
      axios.get(this.API_URL+'/api/v1/products')
      .then(resp => {
        this.products = resp.data.data.result
      })
      .catch(err => {
        console.log(err)
      })
    },
    methods:  {
      Delete(id, index) {
        if(window.confirm("¿Desea eliminar este pedido?")){
          axios.delete(this.API_URL+'/api/v1/product', { _id: id })
          .then( resp => {
            this.$delete(this.products, index)
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


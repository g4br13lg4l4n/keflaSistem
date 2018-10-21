<template>
  <div class="container-activity">
    <div class="head-container">
      <h2>Productos</h2>
    </div>
    <div class="body-container">
      <table>
        <thead> <!-- Pasajeros del vuelo 377 -->
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Active</th>
            <th>Fecha</th>
          </tr>
        </thead>

        <tfoot> <!-- Pie de tabla -->
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Active</th>
            <th>Fecha</th>
          </tr>
        </tfoot>

        <tbody> <!-- Cuerpo de la tabla -->
          <tr v-for="(product, index) in products" :key="product.id">
            <td>{{ product._id }}</td>
            <td>{{ product.name }}</td>
            <td>{{product.price }}</td>
            <td>{{product.description}}</td>
            <td>{{product.isActive}}</td>
            <td>{{product.created | data}}</td>
            <td>
              <button @click="Delete(product._id, index)"> Eliminar </button>
              <button @click="showModalEdit(product._id, index)"> Editar </button> 
            </td>
          </tr>
        </tbody>  
      </table>
    </div> 
    <EditProduct v-if="showModal" @close="showModal = false" :product="productProp">
    </EditProduct>  
  </div>
</template>
<script>
import EditProduct from '../Forms/edit-product.vue'

  export default {
    name: 'products',
    components: {EditProduct},
    data() {
      return {
        showModal: false,
        API_URL : null,
        products: null,
        productProp: null
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
      showModalEdit(id, index) {
        this.showModal = true
        this.productProp = this.products[index] 
      },
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


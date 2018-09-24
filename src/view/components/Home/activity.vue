<template>
  <div class="container-activity">
    <div class="head-container">
      <h2>Actividad</h2>
    </div>
    <div class="body-container">
      <table>
        <thead> <!-- Pasajeros del vuelo 377 -->
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Vendedores</th>
            <th>Locación</th>
            <th>Status de servicio</th>
            <th>Cantidad</th>
          </tr>
        </thead>

        <tfoot> <!-- Pie de tabla -->
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Vendedores</th>
            <th>Locación</th>
            <th>Status de servicio</th>
            <th>Cantidad</th>
          </tr>
        </tfoot>

        <tbody> <!-- Cuerpo de la tabla -->
          <tr v-for="activity in activities" :key="activity.id">
            <td>{{activity.created}}</td>
            <td>{{activity.created}}</td>
            <td>{{activity.created}}</td>
            <td>{{activity.created}}</td>
            <td>{{activity.created}}</td>
          </tr>
        </tbody>  
      </table>
    </div> 
    {{this.activities}} 
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
    created: () => {
      this.API_URL = `${window.Params.URL_API}/api/v1/orders`
    },
    mounted: () => {
      axios.get(this.API_URL)
      .then(resp => {
        this.activities = resp.data.data.result
        console.log(this.activities)
      })
    }
  }
</script>
<style>

</style>

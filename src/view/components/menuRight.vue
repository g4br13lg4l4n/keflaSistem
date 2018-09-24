<template>
  <div class="menu-right">
    <nav class="">
      <div class="group-menu">
        <p>Cuenta</p>
        <router-link :to="{ name: 'Activity' }">Actividad</router-link>
        <router-link :to="{ name: 'Customers' }">Compradores</router-link>
        <router-link :to="{ name: 'Sellers' }">Vendedores</router-link>
        <router-link :to="{ name: 'Companies' }">Empresas</router-link>
        <router-link :to="{ name: 'Settings' }">Configuraciones</router-link>
      </div>
      <div class="group-menu">
        <p>Services</p>
        <router-link :to="{ name: 'Travels' }">Viajes</router-link>
        <router-link :to="{ name: 'Billings' }">Ventas</router-link>
        <router-link :to="{ name: 'Mailbox' }">Buzón</router-link>
      </div>
    </nav>
  </div>
</template>
<script>
  export default {
    name: 'MenuRight'
  }
</script>
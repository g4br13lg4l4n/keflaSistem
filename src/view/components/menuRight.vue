<template>
  <div class="menu-right">
    <nav class="nav">
      <div class="group-menu">
        <p class="segment">CUENTA</p>
        <ul>
          <li><router-link :to="{ name: 'Activity' }">Actividad</router-link></li>
          <li><router-link :to="{ name: 'Customers' }">Compradores</router-link></li>
          <li><router-link :to="{ name: 'Sellers' }">Vendedores</router-link></li>
          <li><router-link :to="{ name: 'Companies' }">Empresas</router-link></li>
          <li><router-link :to="{ name: 'Settings' }">Configuraciones</router-link></li>
        </ul>
      </div>
      <div class="group-menu">
        <p class="segment">SERVICIOS</p>
        <ul>
          <li><router-link :to="{ name: 'Travels' }">Viajes</router-link></li>
          <li><router-link :to="{ name: 'Billings' }">Ventas</router-link></li>
          <li><router-link :to="{ name: 'Mailbox' }">Buzón</router-link></li>
        </ul>   
      </div>
    </nav>
  </div>
</template>
<script>
  export default {
    name: 'MenuRight'
  }
</script>
<style>
  .menu-right {
    width: 260px;
    background-color: #1E1E29;
    height:  calc(100% - 50px);
    position: absolute;
    left: 0;
    top: 50px;
    padding: 40px 0 0 20px;
    box-sizing: border-box;
  }
  .menu-right .nav .group-menu{
    margin-bottom: 40px;
  }
  .menu-right .nav .group-menu .segment {
    color: #CAC9C8;
  }
  .menu-right .segment {
    font-family: 'Helvetica';
    margin-bottom: 20px;
  }
  .menu-right ul li a {
    margin: 14px 0;
    letter-spacing: .5px;
    display: block;
    font-family: 'Arial';
    text-decoration: none;
    color: #eaeaea;
  }
</style>

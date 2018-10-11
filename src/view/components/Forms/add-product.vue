<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">

            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <form action="">
                <input type="text" v-model="productEdit.name" >
                <input type="text" v-model="productEdit.price" >
                <input type="text" v-model="productEdit.description" >
              </form>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('close')"> Cerrar </button>
              <button class="modal-default-button" @click="save"> Guardar </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>  
</template>
<script>
  export default {
    name:'EditProduct',
    props:['product'],
    data() {
      return {
        productEdit: this.product,
        API_URL: null
      }
    },
    created () {
      this.API_URL = window.Params.URL_API
    },
    methods: {
      save () {
        axios.put(this.API_URL+'/api/v1/product', this.productEdit)
        .then(resp => {
          if(resp.data.data.result.ok = 1){
            this.$emit('close')
          }
        })
        .catch(err => {
          this.productEdit = this.product
          console.log('error al guardar')
        })
      }
    }
  }
</script>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
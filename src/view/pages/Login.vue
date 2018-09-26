<template>
  <div id="login">
    <div class="content-login">
      <div class="content-login-form">
        <h3>SIGN IN</h3>
        <form>
          <div class="form-group"> 
            <label for="user">User</label>
            <input type="email" v-model="user.email" :class="{ 'has-error': errors.hasError }" name="user">
            <transition name="slide-fade">  
              <p v-if="errors.userError" class="error-text">Usuario incorrecto</p>
            </transition>
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input v-model="user.password" :class="{ 'has-error': errors.hasError }" type="password" name="password">
            <transition name="slide-fade">  
              <p v-if="errors.userError" class="error-text">Contraseña incorrecta</p>
            </transition>
          </div>
          <div class="form-group">
            <input class="btn btn-primary" @click="checkLogin" type="button" value="SIGN IN">
          </div>
        </form>
      </div>
      <div class="content-login-info">
        <p> Sistema KeflApp </p>
      </div>
    </div>
  </div>    
</template>
<script>
  export default {
    name: 'login',
    data () {
      return {
        errors: {
          userError: false,
          responseError: false,
          hasError: false 
        },
        user: {
          email: null,
          password: null
        }
      }
    },
    methods: {
      checkLogin () {
        this.userCheck(this.user.email) ? this.login() : this.errorUser()
      },
      userCheck (email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(email)
      },
      errorUser () {
        this.errors.userError = true
        this.errors.hasError = true
      },
      login () {
        axios.post(`${window.Params.URL_API}api/v1/kefla/login`, this.user)
          .then(resp => {
            this.$router.push({ name:'Home' })
          })
          .catch(err => {
            this.errorUser()
          })
      },
    }
  }
</script>
<style>
  #login {
    height: 100%;
    width: 100%;
    background-image: url('../../assets/bg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
  }
  .content-login {
    margin: 0 auto;
    display: flex;
    width: 720px;
  }
  .content-login-form, .content-login-info {
    width: 50%;
    padding: 60px 40px;
    box-sizing: border-box;
  }
  .content-login-info {
    background-color: rgba(36, 37, 42, .80);
    border-radius: 0 8px 8px 0;
  }
  .content-login-info p{
    color: white;
    text-align: center;
    font-family: 'Noto Sans';
    font-size: 1.5em;
    letter-spacing: .5px;
  }
  .content-login-form {
    background-color: #F9F9F9;
    border-radius: 8px 0 0 8px;
  }
  .content-login .content-login-form h3 {
    color: #00C7CD;
    font-family: 'Noto Sans';
    font-style: normal;
    font-size: 22px;
    font-weight: 100;
    text-align: center;
    padding-bottom: 40px;
  }
  .form-group {
    margin-bottom: 14px;
  }
  .form-group label{
    font-family: 'Noto Sans';
    color: #b9b9b9;
    font-weight: 100;
    display: block;
  }
  .form-group input[type="email"], .form-group input[type="text"], .form-group input[type="password"]{
    height: 26px;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #24252A;
    padding-left: 8px;
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;
  }

  .form-group input[type="button"].btn {
    color: #cccccc;
    display: block;
    font-size: 16px;
    border: 2px solid;
    border-radius: 30px;
    box-sizing: border-box;
    padding: 10px 34px;
    font-family: 'Noto Sans';
    font-weight: 100;
    margin: 0 auto;
    cursor: pointer;
  }
  .form-group input[type="button"].btn.btn-primary {
    color: #00C7CD;
  }
  .form-group input[type="button"].btn.btn-primary:hover{
    color: white;
    background-color: #00C7CD;
  }
  .form-group input[type="button"].btn.btn-red{
    color: #ec2d2d;
  }
  .form-group input[type="button"].btn.btn-red:hover{
    background: #ec2d2d;
    color: white;
  }
  .form-group input[type="button"].btn.btn-blue{
    color: #1ba7ff;
  }
  .form-group input[type="button"].btn.btn-blue:hover{
    color: white;
    background-color: #1ba7ff;;
  }
</style>

<template>
  <body>
    <header>
      <div>
        <img src="../assets/logo2.png" alt="logo" class="logoPhoto" />
      </div>
    </header>
    <main>
      <form name="loginForm" @submit.prevent="login">
        <div class="loginPhoto">
          <img src="../assets/profile-user.png" alt="profile-user" width="250" />
        </div>
        <label for="user" name="user"></label>
        <input type="text" id="user" name="user" placeholder="User" v-model="email"/>
        <label for="password"></label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          v-model="password"
        /><br />
        <input type="submit" value="Login"/><br />
        <a href="" @click="goToRegistrarse()">REGISTRARSE</a>
        
      </form>
    </main>
  </body>
</template>

<script>
//import axios from 'axios'
export default {
  
  name: 'HomePage',
  data(){
    return{
      email:'',
      password:'',
      usuario: []
    }
  },

  methods: {
    async login(){
      var data = {
        email: this.email,
        password: this.password
      }
      await this.axios.post('http://puigmal.salle.url.edu/api/v2/users/login', data) 
      .then(response => {
        this.axios.defaults.headers.common['Authorization'] = 'Bearer' + response.data;
        localStorage.setItem('token', response.data)
        this.$router.push('/perfil'); 
      });      
    }
  },  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  font-family: Verdana;
  font-size: 8pt;
}

body form h1 {
  font-family: Verdana;
  font-size: 18pt;
  color: black;
  padding-bottom: 30px;
  padding-top: 50px;
}

input[type="text"] {
  height: 25px;
  width: 200px;
  border: 2px solid #c1272d;
}
input[type="password"] {
  height: 25px;
  width: 200px;
  border: 2px solid #c1272d;
}
input[type="submit"] {
  width: 150px;
  background-color: #c1272d;
  border: none;
  color: white;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-family: Verdana;
  font-size: 9pt;
}

.loginPhoto {
  padding-bottom: 35px;
}
.logoPhoto {
  display: flex;
  flex-wrap: wrap;
  padding-top: 25px;
  padding-left: 20px;
  width: 125px;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: #c1272d;
}

@media (max-width: 375px) {
  .logoPhoto {
    display: flex;
    flex-wrap: wrap;
    width: 80px;
  }
  .loginPhoto {
    padding-bottom: 35px;
    padding-top: 25px;
  }
}

</style>

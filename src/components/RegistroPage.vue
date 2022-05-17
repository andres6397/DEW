<template>
  <body>
    <header>
      <img src="../assets/logo2.png" alt="logo" class="logoPhoto" />
    </header>
    <main>
      <form>
        <h1>NUEVO USUARIO</h1>
        <label for="name"></label>
        <input type="text" id="name" name="name" placeholder="Name" />
        <label for="surname"></label>
        <input type="text" id="surname" name="surname" placeholder="Surname" />
        <label for="user"></label>
        <input type="text" id="user" name="user" placeholder="User" />
        <label for="password"></label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <label for="email"></label>
        <input type="text" id="email" name="email" placeholder="Email" /><br />
        <input type="submit" value="Submit" @click="goToPerfil()" /><br />
      </form>
    </main>
  </body>
</template>

<script>
export default {
  name: 'RegistroPage',
  
  methods:{
   goToPerfil(){
   this.$router.push('/perfil'); 
      }
  }
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

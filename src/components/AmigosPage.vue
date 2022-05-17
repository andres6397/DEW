<template>
<body>
    <header>
      <nav>
        <div class="nav">
          <div class="imgContainer">
            <img src="../assets/logo2.png" alt="logo" />
          </div>
          <div id="menu">
            <ul>
              <li><a href="" @click="goperfil()">Perfil</a></li>
              <li><a href="" @click="goeventos()">Eventos</a></li>
              <li><a href="" @click="goamigos()">Amigos</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main>
    <h1 class="title">AMISTADES</h1>
    <div class="container">
      <div class="container1">
        <p class="info">Cantidad de amigos: X</p>
        <p class="info">Total de usuarios: X</p>
        <p class="info">Solicitudes de amistad: X</p>
        <p class="titleSoli">Solicitudes de amistad</p>
        <div class="solicitudes">
          
        </div>
        <button class="buttons">Aceptar solicitudes</button>
      </div>
      <div class="container2">
        <p class="titleFriends">Amigos</p>
        <div class="friends">
          
        </div>
      </div>
      <div class="container3">
        <input class="search" type="text" placeholder="Buscar Amigo" />
        <div class="searchFriend">
          
          
        </div>
        <button class="buttons">Enviar solicitudes</button>
      </div>
    </div>
  </main>
  </body>
    
</template>

<script>
//import axios from 'axios'
export default {
  name: 'HomePage',

      methods:{
      goperfil(){
      this.$router.push('/perfil'); 
    },
    goeventos(){
      this.$router.push('/eventos'); 
    },
    goamigos(){
      this.$router.push('/amigos'); 
    }
    }

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  background-color: #c1272d;
  height: 100px;
}
.imgContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}

.nav div img {
  margin-left: 20px;
  width: 75px;
}

#menu ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#menu ul a {
  color: white;
  text-decoration: none;
  font-size: 12pt;
  padding-left: 50px;
  font-family: Verdana;
  letter-spacing: 1px;
}
#menu ul li :hover {
  text-decoration: underline;
}
.title {
  padding-top: 25px;
  padding-bottom: 40px;
  margin-left: 20px;
  text-decoration: underline;
  font-family: Verdana;
  font-size: 25pt;
  font-weight: bold;
  color: #c1272d;
}
.parrafo {
  font-family: Verdana;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: 20px;
}

.fotoUser {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 25px;
  margin-left: 35px;
}
.divMovil {
  margin-left: 20px;
}
.botonMovil{
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
    margin-bottom: 10px;
}

button {
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

@media (max-width: 375px) {
  .nav div img {
    display: flex;
    flex-wrap: wrap;
    width: 75px;
  }
  .nav div a {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-bottom: 5px;
  }

  .profile {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
  }
  .fotoUser {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
  }
  .divMovil {
    width: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  #menu ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  #menu ul a {
    color: white;
    text-decoration: none;
    font-size: 12pt;
    padding-left: 20px;
    font-family: Verdana;
    letter-spacing: 1px;
  }
  #menu ul li :hover {
    text-decoration: underline;
  }
}

#footer {
  background-color: #c1272d;
  height: 100px;
  width: 100%;
  margin-top: 30px;
  position: absolute;
}

#footerContent {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

#footerContent h3 {
  color: white;
  margin-top: 10px;
  font-size: 25px;
}

#footerContent p {
  margin-top: 10px;
  font-size: 15px;
  color: #cacdd2;
}

.footerDown {
  padding-top: 20px;
  color: white;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: 20px;
  margin-right: 20px;
  font-family: Verdana;
}

.container1 {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  width: 400px;
  height: 750px;
}

.container2 {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  width: 400px;
  height: 750px;
}

.container3 {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  width: 400px;
  height: 750px;
}

.info {
  font-size: 25px;
  text-align: left;
  text-decoration-color: #c1272d;
  margin: 4px;
}
.solicitudes {
  margin-top: 10px;
  border: 3px;
  height: 486px;
  border: 1px solid #c1272d;
  overflow: auto;
  padding: 10px;
  scrollbar-color: #c1272d #ffffff;
  scrollbar-width: thin;
}

.listSoli {
  font-size: 20px;
  text-align: left;
  margin-bottom: 10px;
}

.check {
  float: right;
  margin-right: 20px;
}

.titleFriends {
  border: 3px;
  border-color: #c1272d;
  border-style: solid;
  padding: 5px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}

.titleSoli {
  border: 3px;
  border-color: #c1272d;
  border-style: solid;
  padding: 5px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-top: 15px;
}

.friends {
  margin-top: 10px;
  border: 3px;
  height: 600px;
  border: 1px solid #c1272d;
  overflow: auto;
  padding: 10px;
  scrollbar-color: #c1272d #ffffff;
  scrollbar-width: thin;
}

.listFriend {
  font-size: 20px;
  text-align: center;
  padding: 20px;
}

.listFriend:hover {
  transform: scale(1.05);
}
.search {
  border: 3px solid #c1272d;
  scrollbar-color: #c1272d #ffffff;
  scrollbar-width: thin;
  margin-bottom: 10px;
  padding: 2.5px;
  text-align: center;
  font-size: 20px;
}

.searchFriend {
  height: 600px;
  border: 1px solid #c1272d;
  overflow: auto;
  padding: 10px;
  scrollbar-color: #c1272d #ffffff;
  scrollbar-width: thin;
}

.searchFriend img {
  width: 40px;
  vertical-align: middle;
  padding: 10px;
}

.searchFriend input[type="checkbox"] {
  margin-left: 30px;
  transform: scale(1.3);
  text-align: right;
  float: right;
}

.searchFriend p {
  font-size: 20px;
}

.buttons {
  margin-top: 10px;
  width: max-content;
  font-size: 13px;
}
</style>

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
      <section class="container">
        <h1 class="title">EVENTOS</h1>
        <div class="containerRight">
          <button class="createEvent" @click="gocrearEvento()">
            Crear
          </button>
          <button class="calendar">Calendario</button>
        </div>
      </section>
      <div class="containerSearch">
        <input type="text" placeholder="Buscar Evento" id="searchText" />
        <button id="searchButton">Buscar</button>
      </div>

        <div class="containerList">
          <select name="eventos" id="list">
            <option value="Evento 1">Evento 1</option>
            <option value="Evento 2">Evento 2</option>
            <option value="Evento 3">Evento 3</option>
            <option value="Evento 4">Evento 4</option>
          </select>
          <button id="listButton">Listar</button>
        </div>
        <input type="text" id="listBox" />
        <div class="boxButtons">
          <button id="joinButton">Unirse</button>
          <button id="shareButton">Compartir</button>
        </div>
      
      
      </main>
    </body>
</template>

<script>
export default {
    name: 'EventosPage',

    methods:{
      goperfil(){
      this.$router.push('/perfil'); 
    },
    goeventos(){
      this.$router.push('/eventos'); 
    },
    goamigos(){
      this.$router.push('/amigos'); 
    },
    gocrearEvento(){
      this.$router.push('/crearEvento');
    }
    }
}
</script>

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
  justify-content: space-between;
  margin-left: 20px;
}
.containerRight {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 20px;
}
.containerSearch {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 20px;
}

.boxButtons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 20px;
}

.containerList {
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.createEvent {
  background-color: #c1272d;
  text-align: center;
  font-size: 16px;
  margin-right: 20px;
  margin-top: 20px;
  width: 150px;
  height: 50px;
  font-family: Verdana;
  padding: 10px 30px;
}

.calendar {
  background-color: #c1272d;
  text-align: center;
  font-size: 16px;
  margin-right: 20px;
  margin-top: 20px;
  width: 150px;
  height: 50px;
  font-family: Verdana;
  padding: 10px 30px;
  margin-bottom: 20px;
}

#searchText {
  border: 3px;
  border-color: #c1272d;
  border-style: solid;
  width: 200px;
  height: 30px;
  margin-left: 20px;
  margin-bottom: 10px;
}

#searchButton {
  margin-left: 20px;
  height: 37px;
  margin-bottom: 20px;
}
#listButton {
  margin-left: 20px;
  height: 37px;
  margin-bottom: 20px;
}
#list {
  width: 210px;
  border-color: #c1272d;
  border-style: solid;
  height: 37px;
  margin-left: 20px;
  margin-bottom: 10px;
}

#listBox {
  width: 850px;
  height: 300px;
  border-color: #c1272d;
  border-style: solid;
  margin-bottom: 10px;
  margin-left: 40px;
}

#joinButton {
  margin-left: 20px;
  height: 37px;
  margin-bottom: 20px;
}

#shareButton {
  margin-left: 20px;
  height: 37px;
  margin-bottom: 20px;
}

@media (max-width: 375px) {
  #listBox {
    width: 300px;
    height: 200px;
    border-color: #c1272d;
    border-style: solid;
    margin-bottom: 10px;
    margin-left: 40px;
  }
}
</style>
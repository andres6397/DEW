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
        <form @submit.prevent="buscar">
          <h2 class="title">Buscar</h2>
          <input type="text" placeholder="Location" id="searchText" v-model="location"/>
          <input type="text" placeholder="Key word" id="searchText" v-model="keyword"/>
          <input type="text" placeholder="YYYY-MM-DD" id="searchText" v-model="date"/>
          <button id="searchButton">Buscar</button> 
        </form>
        
      </div>
      <div class="containerDirection">
          <div class="containerSearch">  
          <form @submit.prevent="eventosId">
            <h2 class="title">Listar por ID</h2>
            <input type="number" id="list" v-model="id" placeholder="ID">
            <button id="listButton">Listar</button>  
          </form>
        </div>
        <div class="containerSearch">  
        <form @submit.prevent="asistentesFuturosEventos">
            <h2 class="title">Asistentes por ID</h2>
            <input type="number" id="list" v-model="idAsistente" placeholder="ID">
            <button id="listButton">Asistentes</button>  
          </form>
        </div>
        <div class="containerSearch">
          <form @submit.prevent="eventosIdBorrar">
            <h2 class="title">Borrar por ID</h2>
            <input type="number" id="list" v-model="idBorrar" placeholder="ID">
            <button id="listButton">Borrar</button>
          </form>
        </div>
      </div>
         <div class="containerSearch">
          <form @submit.prevent="modificarEvento">
            <h2 class="title">Modificar Evento</h2>
            <input type="number" id="searchText" v-model="idModifica" placeholder="ID">
            <input type="text" id="searchText" name="name" placeholder="Nombre" v-model="name"  />
            <input type="text" id="searchText" name="image" placeholder="Image" v-model="image"/>
            <input type="text" id="searchText" name="location" placeholder="Location" v-model="locationM"/>
            <input type="text" id="searchText" name="description" placeholder="Description" v-model="description"/>
            <input type="text" id="searchText" name="startDate" placeholder="Start Date" v-model="startDate"/>
            <input type="text" id="searchText" name="endDate" placeholder="End Date" v-model="endDate"/>
            <input type="number" id="searchText" name="participants" placeholder="Number of participants" v-model="participants"/>
            <input type="text" id="searchText" name="type" placeholder="type" v-model="type"/>
            <button id="listButton">Modificar</button>
          </form>
        </div>
        <div class="containerDirection">
          <div class="boxButtons">
            <button id="joinButton" @click="futurosEventos()">Futuros</button>
            <button id="shareButton" @click="bestEventos()">Mejores</button>
          </div>
        </div>
        <div class="boxButtons">
          <input type="number" id="searchText" v-model="idUnirse" placeholder="ID">
          <button id="joinButton" @click="unirse()">Unirse</button>
          <input type="number" id="searchText" v-model="idDesunirse" placeholder="ID">
          <button id="shareButton" @click="desunirse()">Desunirse</button>
        </div>
        <div class="containerList2">
          <ul v-bind:key="value.id" v-for="(key, value) in evento" >
            ID: {{key.id}} <br>
            Name: {{key.name}} <br>
            Owner ID: {{key.owner_id}} <br>
            Date: {{key.date}} <br>            
            Location: {{key.location}} <br>
            Description: {{key.description}} <br>
            Start: {{key.eventStart_date}} <br>
            End: {{key.eventEnd_date}} <br>
            Participants: {{key.n_participators}} <br>
            Type: {{key.type}}<br>
            Image: <img v-bind:src="key.image" alt="event-photo" width="150" style="margin-top: 5px; margin-bottom:5px"/>   
          </ul>

          <ul v-bind:key="value.id" v-for="(key, value) in asistentes">
            ID: {{key.id}} <br>
            Name: {{key.name}} <br>
            Last Name: {{key.last_name}} <br>
            Email: {{key.email}} <br>
            Puntuation: {{key.puntuation}} <br>
            Comentary: {{key.comentary}} 
          </ul>
        </div>
      </main>
    </body>
</template>

<script>
export default {
    name: 'EventosPage',

    data(){
      return{
        location: '',
        keyword: '',
        date:'',

        id: '',
        idBorrar: '',
        idAsistente: '',
        idUnirse: '',
        idDesunirse: '',

        idModifica: '',
        name:'',
        image:'',
        locationM:'',
        description:'',
        startDate:'',
        endDate:'',
        participants: '',
        type:'',
        evento: [],
        asistentes: []
      }
    },

    methods:{
      async buscar(){
        const token = localStorage.getItem('token');
        const api = 'http://puigmal.salle.url.edu/api/v2/events/search?location='+this.location;
        const api1 = 'http://puigmal.salle.url.edu/api/v2/events/search?keyword='+this.keyword;
        const api2 = 'http://puigmal.salle.url.edu/api/v2/events/search?date='+this.date;
        const api3 = 'http://puigmal.salle.url.edu/api/v2/events/search?location='+this.location+'&keyword='+this.keyword;
        const api4 = 'http://puigmal.salle.url.edu/api/v2/events/search?location='+this.location+'&date='+this.date;
        const api5 = 'http://puigmal.salle.url.edu/api/v2/events/search?location='+this.location+'&keyword='+this.keyword+'&date='+this.date;
        

        if(this.location != '' && this.keyword == '' && this.date == ''){
          await this.axios.get(api, {headers: {"Authorization" : `Bearer ${token}`}}).
          then(res => {
            this.evento = res.data;
          })
        }else if(this.location == '' && this.keyword != '' && this.date == ''){
          await this.axios.get(api1, {headers: {"Authorization" : `Bearer ${token}`}}).
          then(res => {
            this.evento = res.data;
          })
        }else if(this.location == '' && this.keyword == '' && this.date != ''){
          await this.axios.get(api2, {headers: {"Authorization" : `Bearer ${token}`}}).
          then(res => {
            this.evento = res.data;
          })
        }else if(this.location != '' && this.keyword != '' && this.date == ''){
          await this.axios.get(api3, {headers: {"Authorization" : `Bearer ${token}`}}).
          then(res => {
            this.evento = res.data;
          })
        }else if(this.location != '' && this.keyword == '' && this.date != ''){
          await this.axios.get(api4, {headers: {"Authorization" : `Bearer ${token}`}}).
          then(res => {
            this.evento = res.data;
          })
        }else if(this.location != '' && this.keyword != '' && this.date != ''){
          await this.axios.get(api5, {headers: {"Authorization" : `Bearer ${token}`}}).
          then(res => {
            this.evento = res.data;
          })
        }
      },

      async desunirse(){
        const token = localStorage.getItem('token');
        const api = 'http://puigmal.salle.url.edu/api/v2/events/'+this.idDesunirse+'/assistances';
        fetch(api, {
          method: 'delete',
          headers: new Headers({
            'Authorization': 'Bearer ' + token,
          })
        })
      },

      async unirse(){
        const token = localStorage.getItem('token');
        const api = 'http://puigmal.salle.url.edu/api/v2/events/'+this.idUnirse+'/assistances';
        fetch(api, {
          method: 'post',
          headers: new Headers({
            'Authorization': 'Bearer ' + token,
          })
        })
      },
      
      async modificarEvento(){
        var id = this.idModifica;
        const token = localStorage.getItem('token');
        const api2 = 'http://puigmal.salle.url.edu/api/v2/events/'+id;
        fetch(api2,{
          method: 'put',
          headers: new Headers({
            'Authorization': 'Bearer ' + token,
          })
        })
      },

      async asistentesFuturosEventos(){
        const token = localStorage.getItem('token');
        const api = 'http://puigmal.salle.url.edu/api/v2/events/'+this.idAsistente+'/assistances';
         await this.axios.get(api, {headers: {"Authorization" : `Bearer ${token}`}}).
          then(res => {
            this.asistentes = res.data;
          })
      },
      async eventosId(){
        const token = localStorage.getItem('token');
        const api = 'http://puigmal.salle.url.edu/api/v2/events/'+this.id;
         await this.axios.get(api, {headers: {"Authorization" : `Bearer ${token}`}}).
          then(res => {
            this.evento = res.data;
          })
      },
      async eventosIdBorrar(){
        const token = localStorage.getItem('token');
        const api = 'http://puigmal.salle.url.edu/api/v2/events/'+this.idBorrar;
        await this.axios.delete(api, {headers: {"Authorization" : `Bearer ${token}`}}).
        then(res => {
            console.log(res);
          }
        )  
      },

      async futurosEventos(){
        const token = localStorage.getItem('token');
        const api = 'http://puigmal.salle.url.edu/api/v2/events';
        await this.axios.get(api, {headers: {"Authorization" : `Bearer ${token}`}}).
          then(res => {
            this.evento = res.data;
          })
      },
      async bestEventos(){
        const token = localStorage.getItem('token');
        const api = 'http://puigmal.salle.url.edu/api/v2/events/best';
        await this.axios.get(api, {headers: {"Authorization" : `Bearer ${token}`}}).
          then(res => {
            this.evento = res.data;
          })
      },

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
.containerDirection{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

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
div form .title{
  font-family: Verdana;
  font-size: 18pt;
  color: #c1272d;
  margin-right: 20px;
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
.boxButtons2 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 40px;
  margin-bottom: 20px;
}
.containerList {
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.containerList2 ul {
  text-align: justify;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 40px;
  font-family: Verdana;
  font-size: 16px;
  width: 675px;
}
.containerList3 ul {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 40px;
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
  border: 3px;
  border-color: #c1272d;
  border-style: solid;
  width: 200px;
  height: 30px;
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
  .containerList2 ul {
  text-align: justify;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: Verdana;
  font-size: 16px;
  width: 300px;
  
}
}
</style>
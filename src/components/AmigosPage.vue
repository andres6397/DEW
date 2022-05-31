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
        <p class="info">Cantidad de amigos: {{this.friends}}</p>
        <p class="info">Total de usuarios: {{this.users}}</p>
        <p class="info">Solicitudes de amistad: {{this.requests}}</p>
        <p class="titleSoli">Solicitudes de amistad</p>
        <div class="solicitudes">
          <ul v-for="(item,index) in totalRequests" :key="item.id">
          <div class="usersRequests">
            Solicitud {{index+1}} : {{item.name}}
            <br>
            <input type="checkbox" :value="item.id" v-model="checkRequests"/>
          </div>
          </ul>
        </div>
        <form @submit.prevent="acceptRequests">
          <input type="submit" class ="buttons" value="Aceptar solicitudes" /><br />
        </form>
        
      </div>
      <div class="container2">

        <p class="titleFriends">Amigos</p>
        <div class="friends">
          <ul v-for="(item2,index) in totalFriends" :key="item2.id">
          <div v-if="item2.id != null">
          <div class="usersFriends">
            Amigo {{index+1}} : <img v-bind:src="item2.image" /> {{item2.name}} 
          </div> 
          </div>   
          </ul>
        </div>

      </div>
      <div class="container3">
        <form @submit.prevent="searchFriends">
          <input class="search" type="text" placeholder="Buscar Amigo" v-model="searchFriend" />
        </form>
        <div class="searchFriend">
          <ul v-for="(item3,index) in searchFriendList" :key="item3.id">
          <div class="usersSearch">
           <label> Persona {{index+1}} : <img v-bind:src="item3.image" /> {{item3.name}} {{item3.last_name}}</label>
            <input type="checkbox" class="checkfriends" :value="item3.id" v-model="checkFriends"/>
          </div>
          </ul>
        </div>
        <form @submit.prevent="sendRequests">
          <input type="submit" class ="buttons" value="Enviar solicitudes" /><br />
        </form>
      </div>
    </div>
  </main>
  </body>
    
</template>

<script>
//import axios from 'axios'
export default {
  name: 'HomePage',
    async mounted(){
      const token = localStorage.getItem('token');
      const api = 'http://puigmal.salle.url.edu/api/v2/friends';
      await this.axios.get(api, {headers: {"Authorization" : `Bearer ${token}`}}).
      then(r =>{
        this.totalFriends = r.data
        this.friends=r.data.length
      })

      const api1 = 'http://puigmal.salle.url.edu/api/v2/users';
      await this.axios.get(api1, {headers: {"Authorization" : `Bearer ${token}`}}).
      then(res =>{
        this.users=res.data.length
        this.totalUsers = res.data
      })
      
      
      const api2 = 'http://puigmal.salle.url.edu/api/v2/friends/requests';
      await this.axios.get(api2, {headers: {"Authorization" : `Bearer ${token}`}}).
      then(response =>{
      this.totalRequests = response.data
      this.requests=response.data.length
       
        
      })

    },
      
    methods:{
    async acceptRequests(){
      const token = localStorage.getItem('token');
      for (let i = 0; i < this.checkRequests.length; i++) {
        const api = 'http://puigmal.salle.url.edu/api/v2/friends/'+this.checkRequests[i];
        fetch(api,{
          method:'put',
          headers: new Headers({
            'Authorization': 'Bearer '+token,

          })
        })
      }
      window.location.reload();
     
    },
    async sendRequests(){
        const token = localStorage.getItem('token');
        for (let i = 0; i < this.checkFriends.length; i++) {
          const api = 'http://puigmal.salle.url.edu/api/v2/friends/'+this.checkFriends[i];
          fetch(api,{
            method:'post',
            headers: new Headers({
            'Authorization': 'Bearer '+token,
          })
        })
      }
      window.location.reload();
    },
    async searchFriends(){
      const token = localStorage.getItem('token');
      const api = 'http://puigmal.salle.url.edu/api/v2/users/search?s='+this.searchFriend;
      for (let i = 0; i < this.totalFriends.length; i++) {
        await this.axios.get(api, {headers: {"Authorization" : `Bearer ${token}`}}).
        then(res =>{
            this.searchFriendList=res.data
            console.log(this.searchFriendList)
        })
      }
    },
      goperfil(){
      this.$router.push('/perfil'); 
    },
    goeventos(){
      this.$router.push('/eventos'); 
    },
    goamigos(){
      this.$router.push('/amigos'); 
    }
    },

    data(){
      return{
        friends: '',
        users: '',
        requests: '',
        totalRequests:[],
        totalFriends:[],
        checkRequests: [],
        totalUsers: [],
        searchFriend:'',
        searchFriendList:[],
        checkFriends:[]
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

.solicitudes input{
  float:left;
}

.solicitudes p{
  margin-bottom:20px;
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

.usersRequests{
  margin-bottom: 50px;
}

.usersFriends{
  margin-bottom: 50px;
  
}

.usersSearch{
 margin-bottom: 50px;
}

.usersSearch img {
  border-radius: 50%;
  vertical-align:middle;
  height: 50px;
  width: 50px;
}

.usersFriends img{
  border-radius: 50%;
  vertical-align:middle;
  height: 50px;
  width: 50px;
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
  margin-right: 0;
  display: grid;
  place-content: center;
  
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

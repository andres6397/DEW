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
    <section>
      <h1 class="title">PERFIL</h1>
      <div class="fotoUser">
        <img v-bind:src="this.perfil.image" alt="profile-user" width="150" />
      </div>
      <div class="parrafo">
        <p>Nombre: {{this.perfil.name}}</p>
        <p>Apellido: {{this.perfil.last_name}}</p>
        <p>Email: {{this.perfil.email}}</p>
        <br />
        <p>Puntuacion media: {{this.informacion.avg_score}}</p>
        <p>Total de comentarios: {{this.informacion.num_comments}}</p>
        <p>Usuarios con menos comentarios(%): {{this.informacion.percentage_commenters_below}}</p>
        <br />
       
      </div>
      <div class="divMovil">
        <form @submit.prevent="deleteUser()">
          <button type="submit" value="submit" class="botonMovil">Borrar cuenta</button>
        </form>
      </div>
      <div class="divMovil">
        <button value="submit" class="botonMovil" @click="gomensajes()">Mensajes</button>
      </div>
    </section>
  </body>
</template>

<script>
export default {
    name: 'PerfilPage',
    
    async mounted(){
      const token = localStorage.getItem('token');
      const email = localStorage.getItem('email');
      const api = 'http://puigmal.salle.url.edu/api/v2/users/search?s='+email;
      await this.axios.get(api, {headers: {"Authorization" : `Bearer ${token}`}}).
      then(r =>{
        localStorage.setItem('id',r.data[0].id)
      })

      const id = localStorage.getItem('id');
      const api1 = 'http://puigmal.salle.url.edu/api/v2/users/'+id;
      await this.axios.get(api1, {headers: {"Authorization" : `Bearer ${token}`}}).
      then(response => {
        this.perfil = response.data[0]
        
      })

      const api2 = 'http://puigmal.salle.url.edu/api/v2/users/'+id+"/statistics";
      await this.axios.get(api2, {headers: {"Authorization" : `Bearer ${token}`}}).
      then(res => {
        this.informacion = res.data
        console.log(this.informacion.num_comments)
        
      })  
  
    },

    methods:{
      async deleteUser(){
        const token = localStorage.getItem('token');
        const api = 'http://puigmal.salle.url.edu/api/v2/users';
        await this.axios.delete(api, {headers: {"Authorization" : `Bearer ${token}`}}).
        then(res => {
          console.log(res)
        })
        this.$router.push('/');
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
    gomensajes(){
      this.$router.push('/mensajes');
    }
    },

    data(){
      return{
        perfil: [],
        informacion: []
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
  margin-bottom: 5px;
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

</style>
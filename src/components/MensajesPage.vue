<template>
    <body>
    <header>
      <nav>
        <div class="nav">
          <div class="imgContainer">
            <img src="../assets/logo2.png" alt="logo" />
          </div>
          <div class="menu">
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
      <h1 class="title">Mensajes</h1>
      <div class="containerSearch">
        <h2 class="title2">Enviar Mensaje</h2>
        <form @submit.prevent="enviarMensaje">
            <input type="text" placeholder="Content" id="searchText" v-model="content"/>
            <input type="number" placeholder="Friend ID" id="searchText" v-model="friendId"/>
            <button type="submit">Enviar</button>
        </form>
      </div>
      <div class="containerSearch">
            <h2 class="title2">Mostrar mensajes de usuario</h2>
            <form @submit.prevent="todosMensajesId">
                <input type="number" placeholder="Friend ID" id="searchText" v-model="friendId2"/>
                <button class="button" type="submit">Mostrar</button>
            </form>
      </div>
      <div>
        <ul v-bind:key="value.id" v-for="(key, value) in mensajesId">
            Content: {{key.content}} <br>
            User send: {{key.user_id_send}} <br>
            User received: {{user_id_recived}} <br>
        </ul>
      </div>
      <div class="containerSearch">
            <h2 class="title2">Mostrar usuarios que han escrito</h2>
            <button class="button2" type="submit" @click="todosMensajes()">Mostrar</button>      
      </div>
      <div>
        <ul v-bind:key="value.id" v-for="(key, value) in mensajes">
            Name: {{key.name}} <br>
            Last Name: {{key.last_name}} <br>
            email: {{key.email}} <br>
            Image <img v-bind:src="key.image" alt="message-photo" width="150" style="margin-top: 5px; margin-bottom:5px"/>   
        </ul>
      </div>
    </section>
  </body>    
</template>

<script>
export default {
    name: 'MensajesPage',

    data(){
        return{
            content: '',
            friendId: '',
            friendId2: '',
            senderId: '',

            mensajes: [],
            mensajesId: []
        }
    },

    methods: {
        async enviarMensaje(){
            var data = {
                content: this.content,
                user_id_send: localStorage.getItem('id'),
                user_id_recived: this.friendId 
            }
            alert(this.content);
            alert(this.friendId);
            alert(localStorage.getItem('id'));
            const token = localStorage.getItem('token');
            const api = 'http://puigmal.salle.url.edu/api/v2/messages';

            await this.axios.post(api, {headers: {"Authorization" : `Bearer ${token}`}}, data)

        },

        async todosMensajes(){
            const token = localStorage.getItem('token');
            const api = 'http://puigmal.salle.url.edu/api/v2/messages/users';
            await this.axios.get(api, {headers: {"Authorization" : `Bearer ${token}`}}).
            then(res => {
                this.mensajes = res.data;
            })
        },

        async todosMensajesId(){
            const token = localStorage.getItem('token');
            const api = 'http://puigmal.salle.url.edu/api/v2/messages/'+ this.friendId2;
            await this.axios.get(api, {headers: {"Authorization" : `Bearer ${token}`}}).
            then(res => {
                this.mensajesId = res.data;
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
    },
}
</script>

<style scoped>

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

div .button2{
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
  margin-left: 20px;
}

.title2{
padding-top: 25px;
  padding-bottom: 20px;
  margin-left: 20px;
  font-family: Verdana;
  font-size: 18pt;
  color: #c1272d;
}
.containerSearch form{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  margin-left: 20px;
  width: 350px;
}

div ul {
margin-left: 20px;
width: 500px;
font-family: Verdana;
font-size: 12pt;
text-align: justify;
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

.menu ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: left;
}
div form .title{
  font-family: Verdana;
  font-size: 18pt;
  color: #c1272d;
  margin-right: 20px;
}

.menu ul a {
  color: white;
  text-decoration: none;
  font-size: 12pt;
  padding-left: 50px;
  font-family: Verdana;
  letter-spacing: 1px;
}
.menu ul li :hover {
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

  .menu ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: left;
    justify-content: left;
  }

  .menu ul a {
    color: white;
    text-decoration: none;
    font-size: 12pt;
    padding-left: 20px;
    font-family: Verdana;
    letter-spacing: 1px;
  }
  .menu ul li :hover {
    text-decoration: underline;
  }
}

</style>

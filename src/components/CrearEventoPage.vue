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
    <article>
      <h1 class="title">CREAR EVENTO</h1>
    </article>
    <article>
      <form>
        <label for="name"></label>
        <input type="text" id="name" name="name" placeholder="Nombre" />
        <label for="date"></label>
        <input
          type="date"
          id="date"
          name="date"
          min="2010-01-01"
          max="2022-12-31"
        />
        <label for="direccion"></label>
        <input
          type="text"
          id="direccion"
          name="direccion"
          placeholder="Direccion"
        />
        <textarea
          name="descripcion"
          id="descripcion"
          cols="40"
          rows="15"
          placeholder="Descripcion"
          class="textareaForm"
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </article>
  </main>
  </body>
</template>

<script>
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

<style>
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
  margin-left: 20px;
  padding-top: 35px;
  padding-bottom: 35px;
  text-decoration: underline;
  font-family: Verdana;
  font-size: 25pt;
  font-weight: bold;
  color: #c1272d;
}

article form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  margin-left: 20px;
  width: 275px;
  gap: 10px;
}
.textareaForm {
  font-family: Verdana;
  border: 2px solid #c1272d;
  margin-top: 10px;
  width: 275px;
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
  margin-top: 10px;
}
input[type="text"] {
  font-family: Verdana;
  border: 2px solid #c1272d;
}
input[type="date"] {
  border: 2px solid #c1272d;
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

  .title {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-top: 35px;
    padding-bottom: 35px;
    text-decoration: underline;
    font-family: Verdana;
    font-size: 25pt;
    font-weight: bold;
    color: #c1272d;
    margin-right: 20px;
  }
  article form {
    margin-left: 45px;
  }
}
</style>
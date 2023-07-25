<template>
  <ul>
    <li>
      <router-link to="/"><p>Witaj</p></router-link>
    </li>
    <li>
      <router-link to="/kontakt"><p>Kontakt</p></router-link>
    </li>
    <li>
      <router-link to="/lakiernia"><p>Lakiernia</p></router-link>
    </li>
    <li>
      <router-link to="/mapa"><p>Mapa</p></router-link>
    </li>
    <li>
      <router-link to="/realizacje"><p>Realizacje</p></router-link>
    </li>
    <li>
      <router-link to="/warsztat"><p>Warsztat</p></router-link>
    </li>
  </ul>
  <div class="logo">
    <img class="logo-img" src="@/asset/icon/logo.jpg" alt="logo" />
  </div>
</template>

<script>
export default {};
</script>

<style>

ul {
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  padding: 10px;
  gap: 30px;
  overflow: hidden;
  background-color: #000000;
}

li {
  padding: 0;
}

p {
  color: gold;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  height: 100%;
  background: #000000;
}

.logo-img {
  width: 150px;
  height: 150px;
}



</style>
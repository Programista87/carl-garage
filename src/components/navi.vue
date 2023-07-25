<template>
  <div class="top-bar">
    <img class="logo-img" src="@/asset/icon/logo.jpg" alt="logo" />
    <span class="name">Carl-Garage</span>
  </div>
  <div class="line"></div>
  <ul>
    <li>
      <router-link to="/"><p>Start</p></router-link>
    </li>
    <li>
      <router-link to="/warsztat"><p>Warsztat</p></router-link>
    </li>
    <li>
      <router-link to="/lakiernia"><p>Lakiernia</p></router-link>
    </li>
    <li>
      <router-link to="/realizacje"><p>Realizacje</p></router-link>
    </li>
    <li>
      <router-link to="/mapa"><p>Mapa</p></router-link>
    </li>
    <li>
      <router-link to="/kontakt"><p>Kontakt</p></router-link>
    </li>
  </ul>

</template>

<script>
export default {};
</script>

<style>

ul {
  display: flex;
  justify-content: flex-start;
  list-style-type: none;
  padding: 10px;
  gap: 40px;
  overflow: hidden;
  background-color: #000000;
  margin-left: 90px;
}

li {
  padding: 0;
}

p {
  color: silver;
  font-family: "DialogInput",serif;
  font-size: 20px;
  margin: 0;
  padding: 0;
}

.top-bar {
  display: flex;
  justify-content: flex-start;
  align-items: end;
  padding: 0 0 0 50px;
  height: 100%;
  background: #000000;
}

.logo-img {
  width: 150px;
  height: 150px;
}

.name {
  font-size: 30px;
  font-weight: normal;
  padding: 0 0 10px 50px;
}

.line {
  width: 100%;
  height: 2px;
  background-color: silver;
}




</style>
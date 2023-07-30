<template>
  <div class="arena">
    <div class="home-background">
      <div class="home-title">
      <h1>Witaj w Carl Garage.</h1>
      <h6>Twój samochód w najlepszych rękach</h6>
      <button class="info"> Dowiedz się więcej </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Home page'
    }
  }
}
</script>

<style>

.arena {
  background: #000000;
}

.home-background {
  height: 80vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("@/asset/img/CarlHomeBackground.jpg");
  position: relative;
}

.home-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 50%;
  height: 50%;
  font-size: 30px;
  color: #ffffff;
  text-align: center;
  margin-left: 20px;
  padding-top: 250px;
  gap: 0;
}

.info {
  background-color: #000000 ;
  color: #ffffff ;
  border: 2px solid #000000;
  border-radius: 5px;
  padding: 5px;
}

h1 {
  font-size: 50px;
  font-family: 'normal', sans-serif;
  color: #ffffff;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
}

</style>
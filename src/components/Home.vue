<template>
  <div class="arena">
    <div class="home-background">
      <div class="home-title">
        <h1>Witaj w <span class="logo-text">CarL Garage</span></h1>
        <h6><span class="motto">Twój samochód w najlepszych rekach</span></h6>
        <button class="info">Dowiedz się więcej</button>
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
    };
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Alex_Brush';
  src: url('@/asset/fonts/Alex_Brush/AlexBrush-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@media (max-width: 600px) {
  .home-title {
    width: 80%;
    padding-top: 100px;
    font-size: 20px;
  }
  .home-background {
    height: auto;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("@/asset/img/CarlHomeBackground.jpg");
    position: relative;
  }
}

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

.logo-text {
  font-family: "DialogInput",serif;
  font-size: 80px;
  color: #C0C0C0;
}
.motto {
  font-family: 'Alex_Brush', serif;
  font-size: 30px;
}

.info {
  background-color: #FF0000;
  color: #ffffff;
  border: 2px solid #000000;
  border-radius: 5px;
  padding: 5px;
}

h1 {
  font-size: 45px;
  font-family: 'normal', sans-serif;
  color: #ffffff;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>

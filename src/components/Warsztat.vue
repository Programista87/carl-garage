<template>
  <div class="home-backgroundWarsztat">
    <div class="warsztat-content">
      <h1>Witamy w Naszym Warsztacie Samochodowym</h1>
      <p class="warsztat-txt">
        Odkryj naszą szeroką gamę usług samochodowych, zaprojektowanych w celu zapewnienia kompleksowej opieki nad twoim pojazdem. Nasz zespół doświadczonych mechaników jest gotowy do napraw, serwisowania i diagnostyki wszystkich marek i modeli samochodów.
      </p>
      <div class="service-grid">
        <div
            v-for="(service, index) in services"
            :key="index"
            class="service-card"
        >
          <div class="service-icon">{{ index + 1 }}</div>
          <h2>{{ service.title }}</h2>
          <p>{{ service.description }}</p>
        </div>
      </div>
      <div class="promotion-section">
        <h2>Dlaczego Wybrać Nasz Warsztat?</h2>
        <div class="promotion-grid">
          <div class="promotion-card">
            <div class="promotion-icon"></div>
            <h3>Profesjonalna Obsługa</h3>
            <p>Nasi wysoko wykwalifikowani mechanicy zapewniają profesjonalną obsługę na każdym etapie.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Warsztat',
  data() {
    return {
      services: [
        {
          title: 'Naprawy Mechaniczne',
          description: 'Od drobnych problemów do bardziej zaawansowanych usterek, nasi eksperci potrafią diagnozować i naprawiać wszystkie problemy mechaniczne.',
        },
        {
          title: 'Nowoczesne Wyposażenie',
          description: 'Posiadamy nowoczesny sprzęt i narzędzia, aby skutecznie diagnozować i naprawiać problemy samochodowe.',
        },
        {
          title: 'Transparentność',
          description: 'Zawsze jasno komunikujemy się z klientami odnośnie napraw, kosztów i terminów.',
        },
        {
          title: 'Szybka Naprawa',
          description: 'Rozumiemy, jak ważny jest Twój samochód, dlatego staramy się zminimalizować czas jego naprawy.',
        },
      ],
    };
  },
};
</script>


<style scoped>

@media (max-width: 768px) {
  .warsztat-content {
    padding: 20px;
    margin-top: 20px;
  }

  .home-backgroundWarsztat {
    height: auto;
  }

  .service-grid {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    gap: 20px;
  }
}

.home-backgroundWarsztat {
  height: auto;
  color: white;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("@/asset/img/CarlWarsztatBack.jpg");
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.warsztat-content {
  max-width: 800px;
  text-align: center;
  padding: 40px;
}

.warsztat-txt {
  margin: 20px 0;
}

p.warsztat-txt, p {
  font-size: 1.2em;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.05em;
  color: white;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.service-card {
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 20px;
  text-align: left;
}

.service-card h2,
.service-card p {
  margin: 0;
}

.service-icon {
  background-color: #FF0000;
  color: black;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  font-size: 1.2em;
  margin-bottom: 10px;
}

.promotion-section {
  margin-top: 40px; /* Zwiększamy odstęp od kart */
}

.promotion-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  gap: 20px;
}
</style>


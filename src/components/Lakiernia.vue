<template>
  <div class="home-backgroundLakiernia">
    <div class="lakiernia-content">
      <h1 class="lakiernia-heading">Lakiernia</h1>
      <p class="warsztat-txt">
        Nasza profesjonalna lakiernia to miejsce, gdzie dbamy o estetykę i perfekcyjne wykończenie Twojego pojazdu. Dzięki zaawansowanym technologiom i doświadczeniu naszych lakierników, przywracamy blask i świeżość Twojej karoserii po każdym uszkodzeniu czy przemalowaniu.
      </p>
      <p class="warsztat-txt">
        Nasze usługi lakiernicze obejmują:
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
      <p class="warsztat-txt">
        Nasz zespół lakierników to pasjonaci, dla których jakość i precyzja są priorytetem. Wykorzystujemy nowoczesne technologie lakiernicze, a nasze podejście do pracy jest indywidualne dla każdego klienta. Zależy nam na pełnej satysfakcji naszych klientów, dlatego do każdego zlecenia podchodzimy z zaangażowaniem i starannością.
      </p>
      <p class="warsztat-txt">
        W naszej lakierni samochodowej stawiamy na doskonałą współpracę z klientem, doradzamy i służymy fachowym wsparciem na każdym etapie. Niezależnie od tego, czy potrzebujesz drobnych napraw czy kompleksowego malowania, u nas Twój samochód zostanie traktowany z najwyższą starannością.
      </p>
      <p class="warsztat-txt">
        Zapraszamy do naszej lakierni, gdzie artystyczna precyzja łączy się z techniczną doskonałością, tworząc efekty, które zachwycą Cię i wszystkich na drodze. Oddaj swój samochód w nasze ręce, a my sprawimy, że zyska on nowe życie i zachwyci swoim wyglądem!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lakiernia',
  data() {
    return {
      services: [
        {
          title: 'Naprawy blacharsko-lakiernicze',
          description: 'Po kolizji czy innych uszkodzeniach karoserii, nasi specjaliści zajmą się kompleksowym przywróceniem pierwotnego wyglądu Twojego pojazdu.',
        },
        {
          title: 'Przemalowania i odświeżenia',
          description: 'Czasami chcesz po prostu odmienić wygląd swojego samochodu. Dla nas to żaden problem!',
        },
        {
          title: 'Usuwanie wgnieceń bez lakierowania',
          description: 'Dzięki specjalistycznym narzędziom i metodzie usuwania wgnieceń bez konieczności lakierowania, szybko i sprawnie naprawiamy drobne uszkodzenia.',
        },
        {
          title: 'Lakierowanie elementów',
          description: 'Czy to z powodu zarysowania, czy wymiany elementu karoserii, dbamy o to, żeby nowo zamontowany element idealnie wpasował się w resztę karoserii.',
        },
        {
          title: 'Lakierowanie felg',
          description: 'Chcesz nadać swoim felgom nowy kolor lub odświeżyć ich wygląd? Wykonujemy również lakierowanie felg, które pozwoli nadać Twojemu samochodowi wyjątkowy wygląd.',
        },
        {
          title: 'Lakiery ochronne',
          description: 'Oferujemy aplikację trwałych powłok ochronnych, które chronią Twoją karoserię przed szkodliwymi czynnikami atmosferycznymi, kamieniami, zarysowaniami oraz promieniowaniem UV.',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Styl dla komponentu Lakiernia */

.lakiernia-content {
  max-width: 800px;
  text-align: center;
  padding: 40px;
  margin: 0 auto; /* Wyśrodkuj zawartość */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.service-card {
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 20px;
  text-align: left;
  margin-bottom: 20px; /* Dodaj margines między kartami */
}

.service-card h2,
.service-card p {
  margin: 0;
}

h2 {
  font-size: 1.5rem;
  color: #ff9900;
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

.home-backgroundLakiernia {
  height: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("@/asset/img/carlGarageLakierniaBackground.jpg");
  position: relative;
}

.lakiernia-heading {
  font-size: 2.5rem;
  color: #ff9900;
  display: block;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  font-weight: bold;
}

.warsztat-txt {
  max-width: 700px;
  margin: 0 auto;
  padding: 10px;
}
</style>

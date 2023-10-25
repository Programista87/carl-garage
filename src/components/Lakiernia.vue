<template>
  <div class="background">
    <div class="content">
      <h1 class="heading">Lakiernia</h1>
      <p class="service-txt">
        Nasza profesjonalna lakiernia to miejsce, gdzie dbamy o estetykę i perfekcyjne wykończenie Twojego pojazdu. Dzięki zaawansowanym technologiom i doświadczeniu naszych lakierników, przywracamy blask i świeżość Twojej karoserii po każdym uszkodzeniu czy przemalowaniu.
      </p>
      <p class="service-txt">
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
      <p class="service-txt">
        Nasz zespół lakierników to pasjonaci, dla których jakość i precyzja są priorytetem. Wykorzystujemy nowoczesne technologie lakiernicze, a nasze podejście do pracy jest indywidualne dla każdego klienta. Zależy nam na pełnej satysfakcji naszych klientów, dlatego do każdego zlecenia podchodzimy z zaangażowaniem i starannością.
      </p>
      <p class="service-txt">
        W naszej lakierni samochodowej stawiamy na doskonałą współpracę z klientem, doradzamy i służymy fachowym wsparciem na każdym etapie. Niezależnie od tego, czy potrzebujesz drobnych napraw czy kompleksowego malowania, u nas Twój samochód zostanie traktowany z najwyższą starannością.
      </p>
      <p class="service-txt">
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
@import "@/style/carl.css";

.background {
  height: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("@/asset/img/carlGarageLakierniaBackground.jpg");
  position: relative;
}


</style>

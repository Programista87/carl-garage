<template>
  <div class="home-backgroundWarsztat">
    <h1>Warsztat</h1>
    <p class="warsztat-txt">
      Witamy w naszym warsztacie samochodowym!

      Nasz warsztat samochodowy oferuje szeroki zakres usług, aby zapewnić Państwu kompleksową opiekę nad Państwa pojazdami. Nasi wykwalifikowani mechanicy z wieloletnim doświadczeniem są gotowi do naprawy i serwisowania wszystkich marek i modeli samochodów. Bez względu na to, czy potrzebujesz rutynowej konserwacji, naprawy powypadkowej, czy diagnostyki usterki - z nami Twój samochód będzie w najlepszych rękach.

      Nasze usługi obejmują między innymi:</p>
    <ul>
     <li>1. Naprawy mechaniczne: Nasz zespół ekspertów może skutecznie diagnozować i naprawiać wszelkiego rodzaju problemów mechanicznych w Twoim pojeździe. Od drobnych usterek po bardziej zaawansowane problemy - możesz na nas liczyć.</li>

    <li>2. Naprawy blacharsko-lakiernicze: Po kolizji lub innych uszkodzeniach karoserii zapewniamy kompleksowe naprawy blacharskie i lakiernicze, aby Twój samochód wyglądał jak nowy.</li>

    <li>3. Wymiana oleju i filtra: Regularna wymiana oleju jest kluczowa dla długowieczności silnika. Oferujemy profesjonalne usługi wymiany oleju i filtrów, z wykorzystaniem wysokiej jakości olejów i filtrów.</li>

    <li>4. Diagnostyka komputerowa: Nasz warsztat wyposażony jest w zaawansowane urządzenia diagnostyczne, które pozwalają nam szybko i precyzyjnie zlokalizować źródło problemu w Twoim samochodzie.</li>

    <li>5. Przeglądy techniczne: Oferujemy kompleksowe przeglądy techniczne, które sprawdzą kluczowe elementy Twojego pojazdu, upewniając się, że spełnia on wszelkie wymogi bezpieczeństwa.</li>

    <li>6. Wymiana opon: Gwarantujemy fachową wymianę opon, w tym przechowywanie opon zimowych w sezonie letnim i letnich w sezonie zimowym.</li>

    <li>7. Naprawy układu hamulcowego i zawieszenia: Bezpieczeństwo jest naszym priorytetem, dlatego oferujemy kompleksowe usługi naprawy układu hamulcowego i zawieszenia.</li>

    <li>8. Klimatyzacja: Jeżeli Twój system klimatyzacji nie działa prawidłowo, zajmiemy się jego diagnozą i naprawą, aby zapewnić komfort jazdy w każdych warunkach.</li>

    <li>9. Naprawy elektryczne: Nasz zespół ekspertów zna się na elektronice pojazdowej, dlatego szybko i sprawnie naprawimy wszelkie usterki elektryczne.</li></ul>

     <p>Dodatkowo, oferujemy konkurencyjne ceny oraz szybki termin realizacji usług, aby minimalizować czas, w którym Twój samochód pozostaje w warsztacie.

      Dbamy o pełne zadowolenie naszych klientów, dlatego gwarantujemy profesjonalizm, rzetelność i indywidualne podejście do każdego zlecenia. Nasza ekipa z pasją podchodzi do każdej naprawy, aby Twój samochód wrócił na drogę w najlepszym stanie.

      Zapraszamy do naszego warsztatu samochodowego i zaufaj naszemu doświadczeniu. Jesteśmy tutaj, aby zadbać o Twój komfort jazdy i bezpieczeństwo na drodze!</p>
  </div>
</template>

<script>

export default {
  name: 'Warsztat',
  data() {
    return {
      msg: 'Warsztat',
    }
  }
}

</script>

<style>

  .home-backgroundWarsztat {
    background-color: #000000;
    height: 80vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("@/asset/img/CarlWarsztatBack.jpg");
    position: relative;
  }

  .warsztat-txt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: gold;
    font-size: 1.5em;
    text-align: center;
    padding: 20px;
  }

</style>
<!--<template>-->
<!--  <div class="map">-->
<!--    <GMapMap-->
<!--        v-if="mapIsReady"-->
<!--        :center="center"-->
<!--        :zoom="zoom"-->
<!--        :api-key="googleMapsApiKey"-->
<!--        map-type-id="terrain"-->
<!--        style="width: 50%; height: 500px"-->
<!--    >-->
<!--      <GMapCluster>-->
<!--        <GMapMarker-->
<!--            :key="index"-->
<!--            v-for="(m, index) in markers"-->
<!--            :position="m.position"-->
<!--            :clickable="true"-->
<!--            :draggable="true"-->
<!--            @click="center = m.position"-->
<!--        />-->
<!--      </GMapCluster>-->
<!--    </GMapMap>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'Mapa',-->
<!--  props: {-->
<!--    googleMapsApiKey: String,-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      center: { lat: 50.08513344667171, lng: 19.199273590508625 },-->
<!--      markers: [-->
<!--        {-->
<!--          position: {-->
<!--            lat: 50.08513344667171,-->
<!--            lng: 19.199273590508625,-->
<!--          },-->
<!--        },-->
<!--      ],-->
<!--      mapIsReady: true,-->
<!--      zoom: 9,-->
<!--    };-->
<!--  },-->
<!--  created() {-->
<!--    console.log('Komponent Mapa.vue został utworzony');-->
<!--  },-->
<!--};-->
<!--</script>-->


<template>
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1380.0354387616098!2d19.199287000000005!3d50.085056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716c18d6c87a50f%3A0x8fbf5f9b48baacdb!2sCarl-Garage!5e1!3m2!1spl!2spl!4v1698144861398!5m2!1spl!2spl&zoom=5" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<!--<template>-->
<!--  <div id="google-map" style="width: 600px; height: 450px;"></div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  mounted() {-->
<!--    const googleMapsScript = document.createElement("script");-->
<!--    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=VUE_APP_GOOGLE_MAPS_API_KEY&callback=initMap`;-->
<!--    googleMapsScript.defer = true;-->
<!--    googleMapsScript.async = true;-->
<!--    window.initMap = this.initMap;-->

<!--    document.head.appendChild(googleMapsScript);-->
<!--  },-->
<!--  methods: {-->
<!--    initMap() {-->
<!--      const map = new google.maps.Map(document.getElementById("google-map"), {-->
<!--        center: { lat: 50.085056, lng: 19.199287 },-->
<!--        zoom: 15,-->
<!--      });-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->



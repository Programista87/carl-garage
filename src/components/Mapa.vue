<template>
  <div class="map">
    <GMapMap
        v-if="mapIsReady"
        :center="center"
        :zoom="zoom"
        :api-key="googleMapsApiKey"
        map-type-id="terrain"
        style="width: 50%; height: 500px"
    >
      <GMapCluster>
        <GMapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center = m.position"
        />
      </GMapCluster>
    </GMapMap>
  </div>
</template>

<script>
export default {
  name: 'Mapa',
  props: {
    googleMapsApiKey: String,
  },
  data() {
    return {
      center: { lat: 50.08513344667171, lng: 19.199273590508625 },
      markers: [
        {
          position: {
            lat: 50.08513344667171,
            lng: 19.199273590508625,
          },
        },
      ],
      mapIsReady: false,
      zoom: 9,
    };
  },
  created() {
    console.log('Komponent Mapa.vue został utworzony');
  },
};
</script>

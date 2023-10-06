<template>
  <div class="map">
    <GMapMap
        :center="center"
        :zoom="9"
        :api-key="process.env.VUE_APP_GOOGLE_MAPS_API_KEY"
        map-type-id="terrain"
        style="width: 800px; height: 600px"
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
    };
  },
};
</script>

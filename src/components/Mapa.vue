<template>
  <div class="map">
  <GMapMap :center="center" :zoom="9" map-type-id="terrain" style="width: 800px; height: 600px">
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
  name: 'App',
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

<style>

.map {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
}


</style>

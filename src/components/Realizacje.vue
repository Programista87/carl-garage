<template>
  <div class="gallery">
    <div v-for="(photo, index) in photos" :key="index" @click="openModal(index)">
      <img :src="photo.src" :alt="photo.title" class="thumbnail">
    </div>
    <div v-if="showModal" class="modal" ref="modalRef" @click="closeModal">
      <span class="close-btn" @click="closeModal">&times;</span>
      <img :src="photos[activeIndex].src" :alt="photos[activeIndex].title" class="modal-content" @click="nextPhoto">
      <div class="caption">{{ photos[activeIndex].title }}</div>
    </div>
  </div>
</template>

<script>
import img1 from '@/asset/realizacje/IMG_6306.jpg';
import img2 from '@/asset/realizacje/IMG_6307.jpg';
import img3 from '@/asset/realizacje/IMG_6308.jpg';
import img4 from '@/asset/realizacje/IMG_6309.jpg';
import img5 from '@/asset/realizacje/IMG_6310.jpg';
import img6 from '@/asset/realizacje/IMG_6311.jpg';
import img7 from '@/asset/realizacje/IMG_6312.jpg';
import img8 from '@/asset/realizacje/IMG_6313.jpg';
import img9 from '@/asset/realizacje/IMG_6314.jpg';
import img10 from '@/asset/realizacje/IMG_6315.jpg';
import img11 from '@/asset/realizacje/IMG_6316.jpg';

export default {
  data() {
    return {
      photos: [
        {
          src: img1,
          title: 'Zdjęcie 1',
        },
        {
          src: img2,
          title: 'Zdjęcie 2',
        },
        {
          src: img3,
          title: 'Zdjęcie 3',
        },
        {
          src: img4,
          title: 'Zdjęcie 4',
        },
        {
          src: img5,
          title: 'Zdjęcie 5',
        },
        {
          src: img6,
          title: 'Zdjęcie 6',
        },
        {
          src: img7,
          title: 'Zdjęcie 7',
        },
        {
          src: img11,
          title: 'Zdjęcie 11',
        },
        {
          src: img9,
          title: 'Zdjęcie 9',
        },
        {
          src: img10,
          title: 'Zdjęcie 10',
        },
        {
          src: img8,
          title: 'Zdjęcie 08',
        },
      ],
      showModal: false,
      activeIndex: 0,
    };
  },
  methods: {
    openModal(index) {
      this.showModal = true;
      this.activeIndex = index;
    },
    closeModal() {
      if (event.target.classList.contains('modal')) {
        this.showModal = false;
      }
    },
    nextPhoto() {
      this.activeIndex = (this.activeIndex + 1) % this.photos.length;
    },
  },
};

</script>

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  background-size: cover;
}

.thumbnail {
  width: 100%;
  height: auto;
  cursor: pointer;
  object-fit: cover; /* Utrzymuje proporcje obrazu i wypełnia element */
  transition: transform 0.3s;
}

.thumbnail:hover {
  transform: scale(1.05);
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  max-width: 90%;
  max-height: 80vh;
  cursor: pointer;
  transition: transform 0.3s;
  display: block;
  margin: 0 auto;
}

.modal-content:hover {
  transform: scale(1.1);
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 25px;
  font-size: 30px;
  color: white;
  cursor: pointer;
}

.caption {
  color: white;
  text-align: center;
  padding: 10px;
}
</style>

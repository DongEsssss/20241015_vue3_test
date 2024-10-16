<!-- components/CardList.vue -->
<template>
  <section>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-20">
      <Card v-for="(card, index) in cards" :key="index" :title="card.title" :description="card.description"
        :category="card.category" :images="card.images" class="shadow-xl" />
    </div>
  </section>
</template>

<script>
import Card from '~/components/section/card/Card.vue';
import firstImage from '@/assets/image/img1.jpg';
import secondImage from '@/assets/image/img2.jpg';
import thirdImage from '@/assets/image/img3.jpg';
import fourthImage from '@/assets/image/img4.jpg';

export default {
  components: {
    Card
  },
  data() {
    return {
      cards: [
        {
          title: 'Lorem Ipsum dolor sit amet,',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
          images: [
            firstImage,
            secondImage,
            thirdImage
          ],
          category: 'Lorem ipsum dolor sit amet'
        },
        {
          title: 'Lorem Ipsum dolor sit amet,',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
          images: [
            secondImage,
            thirdImage,
            fourthImage
          ],
          category: 'Lorem ipsum dolor sit amet'
        },
        {
          title: 'Lorem Ipsum dolor sit amet,',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
          images: [
            thirdImage
          ],
          category: 'Lorem ipsum dolor sit amet'
        },
        {
          title: 'Lorem Ipsum dolor sit amet,',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
          images: [
            fourthImage
          ],
          category: 'Lorem ipsum dolor sit amet'
        }
      ]
    };
  }
};
</script>

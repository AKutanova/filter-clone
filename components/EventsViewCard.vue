<script setup>
  const props = defineProps({
    card: {
      type: Object
    }
  })
</script>
<template>
  <nuxt-link :to="card.link" class="card">
    <img class="card-img" :src="card.img" />
    <div class="card-activity">{{ card.activity }}</div>
    <div class="card-title">{{ card.title }}</div>
    <div class="card-date">{{ card.dt }}</div>      
  </nuxt-link>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-decoration: none;
}

.card-img {
  border-radius: 18px;
  display: block;
  height: 195px;
  object-fit: cover;
}

.card-activity {
  color: #336af7;
}

.card-title {
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  color: #000000;
}

.card-date {
  color: #8C8C8C;
}
</style>>
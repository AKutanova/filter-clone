<script setup>
import getDateList from '../composables/getDateList'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const arrayDays = getDateList()

</script>
<template>
  <div>
    <swiper
    :slides-per-view="10"
    :space-between="50"
  >
    <swiper-slide v-for="cardDate in arrayDays" :key="cardDate.ts">
      <EventsViewCalendarCard :cardDate=cardDate @click="() => $emit('date-chosen', cardDate.ts)"/>
    </swiper-slide>
  </swiper>
  </div>
</template>

<style lang="scss" scoped>

</style>>
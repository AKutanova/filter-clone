<script setup>
import getDateList from '../composables/getDateList'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const arrayDays = getDateList()

const arrayDaysMonth = computed(() => {
  const groupByMonth = arrayDays.reduce((group, day) => {
    const { month } = day
    group[month] = group[month] ?? []
    group[month].push(day)

    return group;
  }, {});

  return groupByMonth
})

</script>

<template>
  <div>
    <swiper
    :slides-per-view="10"
    :space-between="50"
  > 
    <template v-for="(value, name) in arrayDaysMonth">
      <swiper-slide v-for="(cardDate, index) in value" :key="cardDate.ts">
        <div v-if="index === 0">{{ name }}</div>
        <EventsViewCalendarCard :cardDate=cardDate @click="() => $emit('date-chosen', cardDate.ts)"/>
      </swiper-slide>
    </template>
  </swiper>
  </div>
</template>

<style lang="scss">
.swiper-wrapper {
  align-items: flex-end;
}
</style>>
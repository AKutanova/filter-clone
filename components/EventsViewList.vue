<script setup>
const props = defineProps({
  events: {
    type: Array
  }
})
</script>
<template>
  <div class="view-list">
    <EventsViewCard 
      v-for="event in events"
      :key=event.id
      :card=event
    />
  </div>
</template>

<style lang="scss" scoped>
.view-list {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 26px;

  @media (min-width: 577px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>>
<script setup>
  const props = defineProps({
    cardDate: {
      type: Object
    }
  })
</script>
<template>
  <div class="calendar-card">
    <div class="calendar-day">{{ cardDate.day }}</div>
    <div class="calendar-week">{{ cardDate.weekDay }}</div>        
  </div>
</template>

<style lang="scss" scoped>
.calendar-card {
  box-sizing: border-box;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 16px;
  width: 75px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>>
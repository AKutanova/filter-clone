<script setup>
import {loadEvents} from '../composables/loadEvents'

const dataEvents = ref([])
const filterValue = ref(0)

dataEvents.value = await loadEvents()

const filteredData = computed(() => {
  if (!filterValue.value) return dataEvents.value

  return dataEvents.value.filter(item => item.gd === filterValue.value)
})

function dateChosen(value) {
  filterValue.value = value
}
</script>

<template>
  <div>
    <EventsViewCalendar @date-chosen="dateChosen"/>

    <EventsViewList 
      v-if="(filteredData && filteredData.length) > 0" 
      :events=filteredData 
    />
    <div v-else>Нет мероприятий на выбранную дату</div>
  </div>
</template>

export async function loadEvents() {
  const { data } = await useAsyncData(
    'getEvents', () => $fetch('https://run.mocky.io/v3/71d47e2f-d1cf-410d-bd48-930d551b1178'
  ))

  if (!data.value) {
    throw new Error('Пожалуйста, зайдите на сайт позднее')
  }

  return data.value.events
}
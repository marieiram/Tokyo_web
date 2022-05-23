<template>
  <div class="page container mt-5">
    <!-- <h1 class="display-4">Events</h1> -->
    <div class="row mt-3">
     <h1 class="display-4">Events</h1>
      <list-page 
      :List=eventList
      />
    </div>
  </div>
</template>

<script>
// import Card from '~/components/Card.vue'
import ListPage from '~/components/ListPage.vue'
export default {
  name: 'ListEvents',
  components: {
    ListPage,
  },




async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/events')
    return {
      eventList: data,
    }
  },
  
  data() {
    return {
    }
  }
}
</script>

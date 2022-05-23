<template>
  <div class="page container mt-5">
    <!-- <h1 class="display-4">Events</h1> -->
    <div class="row mt-3">
          <h1 class="display-4">Trip plans
          </h1>
      <list-page 
      :List=tripplansList
      />
    </div>
  </div>
</template>

<script>
// import Card from '~/components/Card.vue'
import ListPage from '~/components/ListPage.vue'
export default {
  name: 'ListTripplan',
  components: {
//     Card,
    ListPage,
  },


async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/tripplans')
    return {
      tripplansList: data,
    }
  },
  
  data() {
    return {
    }
  }
}
</script>

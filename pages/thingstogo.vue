<template>
  <div class="page container mt-5">
    <!-- <h1 class="display-4">Events</h1> -->
    <div class="row mt-3">
          <h1 class="display-4">Things to go</h1>
      <list-page 
      :List=thingstogoList
      />
    </div>
  </div>
</template>

<script>
// import Card from '~/components/Card.vue'
import ListPage from '~/components/ListPage.vue'
export default {
  name: 'ListThingstogo',
  components: {
//     Card,
    ListPage,
  },


async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/thingstogo')
    return {
      thingstogoList: data,
    }
  },
  
  data() {
    return {
    }
  }
}
</script>

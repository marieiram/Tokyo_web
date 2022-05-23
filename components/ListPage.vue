///common List page (for events,things to go, and trip plans) 

<template>
  <div class="page container mt-5">
    <!-- <h1 class="display-4">{{listname}}</h1> -->
    <div class="row mt-3">
      <card
        v-for="(list, listIndex) of List"  
        :id="list.id"
        :key="`event-index-${listIndex}`"
         class="col-sm-2 m-2"
        :name="list.name"
        :img="list.img"
        
      />
    </div>
  </div>
</template>s

<script>
import Card from '~/components/Card.vue'
export default {
  name: 'ListPage',
  components: {
    Card,
  },
  props:{
      List: [],
//
  }

   // Note: This happens on backend (server) side
}

</script>

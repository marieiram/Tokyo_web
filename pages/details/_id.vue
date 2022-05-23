<template>
<div>
  <detail-page 
      :name="name" :breed="breed" :img="img" :description="desicription" :location="location" />
 </div>
</template>

<script>
// import CommonMixin from '~/mixins/common'

import DetailPage from '~/components/DetailPage.vue'

export default {
  name: 'DetailsPage',
  // mixins: [CommonMixin],
  components: {
   DetailPage
  },

  async asyncData({ route, $axios }) {
    const { id } = route.params
    console.log(id)
    const { data } = await $axios.get('/api/events/' + id)
    return {
      name: data.name,
      breed: data.breed,
      img: data.img,
      description: data.description,
      location: data.location
    }
  },
  head(){
    return {
      title: this.name
    }
  },
  // mounted(){
  //   const date = new Date()
  //   // Example on hwo to use mixinx
  //   console.log(this.formatMyDate(date.toLocaleDateString()))
  // },
  
  // methods: {
  //   backToList() {
  //     this.$router.push('/events')
  //   },
  // },
}
</script>

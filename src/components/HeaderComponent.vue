<template>
  <header class="container">
        <h1 class="text-center my-5">{{ apptitle }}</h1>
        <search-component />
    </header>
</template>

<script>
 import SearchComponent from "./SearchComponent.vue"

export default {
  name: 'HeaderComponent',
  props: {
    apptitle: String
  },
  components:{
    SearchComponent
  }
}
</script>


<style scoped lang="scss">
h1 {
    font-weight: 700;
}

</style>

<template>
  <div id="app">
    <header-component apptitle ="Rick &amp; Morty" />
    <main>
      <characters-list />
    </main>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import CharactersList from './components/CharactersList.vue'

export default {
  name: 'App',
  components:{
    HeaderComponent,
    CharactersList
  },
  data(){
    return {
     
    }
  } 
  
 
}
</script>

<style lang="scss">
 @import "./styles/general";
</style>

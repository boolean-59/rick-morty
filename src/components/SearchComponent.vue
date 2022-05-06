<!-- componente da aggiungere il secondo giorno, per fare la ricerca -->
<template>
  <div class="container">
    <form class="d-flex mb-5">
        <div class="flex-grow-1">
            <input class="form-control" type="text" placeholder="Search character" v-model.trim="inputText"/>
        </div>
        <div class="ml3">
            <!-- mostriamo $emit con passaggio del testo della ricerca -->
            <button type="submit" class="btn btn-primary" @click.prevent="changeSearch()">
            <!-- @click.prevent="$emit('performSearch', inputText)" -->
                Search
            </button>
        </div>
        <div class="ml3">
            <button type="reset" class="btn btn-warning" @click="resetSearch">
                Reset
            </button>
        </div>
    </form>
  </div>
</template>

<script>
import {setSearch} from '../store.js'
export default {
    name: "SearchComponent",
    data() {
        return {
            inputText: "",
        };
    },
    
    methods: {
        resetSearch() {
            this.inputText = "";
            // facciamo vedere che $emit si può usare anche in un metodo
            //this.$emit("performSearch", this.inputText);
            setSearch(this.inputText)
        },
        changeSearch(){            
            setSearch(this.inputText)
        }
    },
};
</script>

<style lang="scss">
  .ml3{
      margin-left:10px;
  }

</style>

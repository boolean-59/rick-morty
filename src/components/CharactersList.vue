<template>
    <section class="container">
        <div v-if="!loading" class="row">
            <!-- il secondo giorno aggiungiamo la ricerca -->
            <div class="col-12">
                <!-- <Search @performSearch="searchCharacter" /> -->
               
            </div>

            <!-- il primo giorno visualizziamo la lista di personaggi restituiti dalla API al caricamento della pagina -->
            <!-- <div
                v-for="character in charactersList"
                :key="character.id"
                class="col-6 col-md-4 col-lg-3 mb-5"
            >
                <Character :info="character" />
            </div> -->

            <!-- il secondo giorno visualizziamo la lista di personaggi filtrata con la variabile computed -->
            <div
                v-for="character in filteredCharactersList"
                :key="character.id"
                class="col-6 col-md-4 col-lg-3 mb-5"
            >
                <CharacterComponent :info="character" />
            </div>

            <!-- se abbiamo tempo, aggiungiamo un ulteriore componente per visualizzare un messaggio con il numero di risultati -->
            <div class="col-12 mb-5">
                <ResultsMessage :number="filteredCharactersList.length" />
            </div>
        </div>

        <!-- facoltativo: visualizzare un loader fintantoché la chiamata API non restituisce i risultati -->
        <LoaderComponent v-else label="Rick and Morty App" />
    </section>
</template>

<script>
import state from '../store.js'
import axios from "axios"; // npm install axios
import CharacterComponent from "@/components/CharacterComponent.vue";

// componente facoltativo che visualizza un loader fintantoché la chiamata API non restituisce i risultati
import LoaderComponent from "@/components/LoaderComponent.vue";

// componente da aggiungere il secondo giorno, per fare la ricerca
//import SearchComponent from "@/components/SearchComponent.vue";
// se abbiamo tempo, aggiungiamo un ulteriore componente per visualizzare un messaggio con il numero di risultati
import ResultsMessage from "@/components/ResultsMessage.vue";

export default {
    name: "CharactersList",
    components: {
        CharacterComponent,
        LoaderComponent, // componente facoltativo che visualizza un loader fintantoché la chiamata API non restituisce i risultati
        //SearchComponent, // componente da aggiungere il secondo giorno, per fare la ricerca
        ResultsMessage, // componente da aggiungere il secondo giorno, se si vuole mostrare il numero di risultati
    },
    data() {
        return {
            apiURL: "https://api.sampleapis.com/rickandmorty/characters",
            charactersList: [],
            loading: true,

            // il secondo giorno aggiungiamo la ricerca
            //searchText: "",
        };
    },
    computed: {
        searchText(){
            return state.search
        },
        // il secondo giorno facciamo vedere computed per effettuare la ricerca
        // cambiamo charactersList nel v-for, che diventa filteredCharactersList
        filteredCharactersList() {
            if (this.searchText === "") {
                // non c'è alcun filtro di ricerca => mostro lista completa
                return this.charactersList;
            }

            return this.charactersList.filter((item) => {
                return item.name
                    .toLowerCase()
                    .includes(this.searchText.toLowerCase());
            });
        },
    },
    created() {
        // il primo giorno facciamo vedere come effettuare una chiamata API quando si carica la pagina
        this.getCharacters();
    },
    methods: {
        getCharacters() {
            axios
                .get(this.apiURL)
                .then((res) => {
                    this.charactersList = res.data;
                    this.loading = false;
                })
                .catch((err) => {
                    console.log("Error", err);
                });
        },

        // il secondo giorno aggiungiamo la ricerca
        // searchCharacter(text) {
        //     this.searchText = text;
        // },
    },
};
</script>

<style></style>

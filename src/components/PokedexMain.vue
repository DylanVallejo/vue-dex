<template>
    <!-- <h1>hello world pokedex</h1> -->
    <div class="w-full flex justify-center">
        <input type="text" placeholder="Search Pokemon"  class="t-10 p-2 border-blue-500 border-2" v-model="text"/>
        
    </div>
        
    <div class="mt-10 p-4 flex flex-wrap justify-center">
        <div class="ml-4 text-2x text-blue-500"
            v-for="(pokemon, idx ) in filteredPokemon"
            :key="idx" 
        >
        
        <router-link :to="`/test/${pokemonID[pokemon.name]}`">
            {{ pokemon.name }}
        </router-link>
        
        </div>
    </div>
</template>
<script setup>

import { computed, reactive,ref } from 'vue';

    
const fetchData = reactive({
    pokemons: null,
})
    let pokemonID =  reactive({})

    let text = ref("");
    const filteredPokemon =  computed(()=>updatedPokemon())

    function updatedPokemon(){
        if(!text.value){
            return []
        }
        return fetchData.pokemons.filter((pokemon)=>
            pokemon.name.includes(text.value)
        )
    }

    fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data.results)
        fetchData.pokemons = data.results
        pokemonID = data.results.reduce((acc,cur,idx)=>
            acc = { ...acc, [cur.name]:idx+1 }
            
        ,{})
        
    })
    .then(()=> {    
        console.log("fetchData.pokemons")
        console.log(fetchData.pokemons)
        console.log("fetchData.pokemonID")
        console.log(pokemonID)
        
    })
    
    // const tobjeto = {
    //     hola: 1
    // }
    
    // console.log(tobjeto[hola])
</script>
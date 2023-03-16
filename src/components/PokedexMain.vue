<template>
    <h1>hello world pokedex</h1>
    {{ fetchData.pokemons }}
</template>
<script setup>

import { reactive} from 'vue';

    
const fetchData = reactive({
    pokemons: null,
    pokemonID: null
})

    fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data.results)
        fetchData.pokemons = data.results
        fetchData.pokemonID = data.results.reduce((acc,cur,idx)=>
            acc = { ...acc, [cur.name]:idx+1 }
            
            ,{})
        
    })
    .then(()=> {    
        console.log("fetchData.pokemons")
        console.log(fetchData.pokemons)
        console.log(fetchData.pokemonID)
        
    })
    
    
</script>
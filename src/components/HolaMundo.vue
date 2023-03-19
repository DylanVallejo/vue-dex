<template>
    <div class="about">
        <div v-if="state.pokemon" class="w-3/12 m-auto bg-purple-100 mt-4 shadow-2xl flex justify-center flex-col items-center">
            <h3 class="text-2xl texte-green-900 uppercase ">{{ state.pokemon.name }}</h3>
            <div class="flex justify-center">
                <img class="w-48" :src="state.pokemon.sprites.front_shiny" alt="pokemon front" />
                <img class="w-48" :src="state.pokemon.sprites.back_shiny" alt="pokemon back" />
                
            </div>
            <h3 class="text-yellow-400">Types</h3>
            <div v-for="(type,idx) in state.pokemon.types" :key="idx">
                <h5 class="text-blue-900">{{ type.type.name }}</h5>
                
            </div>
        </div>
        
    </div>

</template>
<script setup>

    import { useRoute } from 'vue-router';
    import { reactive } from 'vue';

    
    const route = useRoute();
    
    const state =   reactive({
        pokemon : null
    })

    fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`)
    .then((res)=> res.json())
    .then((data)=>{
        // console.log(data)
        
        state.pokemon = data
        console.log("data pokemon")
        console.log(state.pokemon )
        
    })
</script>
<template>
      <ul id="pokemon-list" >
    
        <li v-for="(pokemon,index) in pokemons" :pokemons="pokemons,index" :key="pokemon.id" class="pokemon" :class=" `for-${index}`">
 
            <div class="pokemon-id">
                <img :src="`static/img/pokemons/${pokemon.id}.png`" v-bind:alt="pokemon.name">
                #{{ addZero(pokemon.id) }}
            </div>

            <div class="pokemon-info">
                <div class="pokemon-info-name">  {{pokemon.name}} </div>
                <div v-for="(type,index) in pokemon.types" :key="type" class="pokemon-info-type" :class="type"></div> 
            </div>
            
            
            <button class="is-gotten" :class="{gotten : team.includes(pokemon.id) } " @click.prevent="toggleTeam(pokemon.id,remove)">
                <i class="pokeball">
                    <i class="pokeball-button"></i>
                </i>
            </button>

        </li>
  
     </ul>
</template>

<script>

export default {
    name: 'poke-list',
    props : ['pokemons','remove'],
     data(){
        return{
            team : null
        }
    },
    methods: {

        toggleTeam(id,remove){
            
            if ( ! $teamStore.getTeam().includes(id) ) $teamStore.addToTeam(id);

            else this.team = $teamStore.removeFromTeam(id);

        }, 

        addZero(num){
            num = num.toString();
            if( num.length === 1 ) return '00'+num;
            if( num.length === 2 ) return '0'+num;
            if( num.length === 3 ) return num;
        }
        
    },

    created (){ 

        this.team = $teamStore.getTeam();

    },

}
</script>

<style scoped>

#pokemon-list{
    padding-top: 50px;
}

</style>
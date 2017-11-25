<template>
      <div>
          
        <poke-header></poke-header>
        
        <poke-list :pokemons="shorListed" :remove="true"></poke-list>

     </div>
</template>

<script>

import pokeHeader from './Header.vue';
import pokeList from './PokeList.vue';

export default {
name: 'Pokedex',
 components : {pokeHeader,pokeList},
     data(){
        return{
            pokemons : null
        }
    },
    methods: {

        getPokemons(endpoint){
            
            if ( $pokemons !== null ) return $pokemons;

            fetch(endpoint)
            .then((res) => {
                if (res.ok) return res.json(); 

                throw Error(res.statusText);
            })
            .catch(err => console.error(err))
            .then((pokemons) => {
                if (pokemons instanceof Array) {
                    
                    this.pokemons = pokemons;

                }
            });

        },

        
    },
    computed: {
	
        shorListed(){

            let list = $teamStore.getTeam();
    
            if( list.length === 0 ) return {};

            return this.pokemons.filter( p => list.includes(p.id) )

        }
    
       
    },

    created (){ 

       this.pokemons = this.getPokemons(API_URL);

    }
}
</script>

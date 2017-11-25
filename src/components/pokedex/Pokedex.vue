<template>
      <div>
          
          <poke-header></poke-header>

            <div id="loader" >
                <i class="pokeball">
                    <i class="pokeball-button"></i>
                </i>
            </div>
        
          <poke-list :pokemons="pokemons" :remove="false"></poke-list>


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
            
            return new Promise( (resolve, reject) => {  
                
                if ( $pokemons !== null ){

                    this.pokemons = $pokemons;

                    return resolve();
                    
                } 

                fetch(endpoint)
                .then((res) => {
                    if (res.ok) return res.json(); 

                    throw Error(res.statusText);

                    reject();
                })
                .catch(err => console.error(err))
                .then((pokemons) => {
                    if (pokemons instanceof Array) {
                                               
                        this.pokemons = pokemons;
                        $pokemons = pokemons;

                        resolve();
                    }
                });

            })

        }
        
    },
   
    created (){ 

        this.getPokemons(API_URL).then( ()  =>  document.querySelector('#loader').classList.add('hidden') );

    },
}
</script>

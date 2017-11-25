class teamStore {
        

    constructor( team = [] ){

        let retrievedObject = localStorage.getItem('team');

        if( retrievedObject ) this.team = JSON.parse(retrievedObject);
        
        else this.team = team;

    }


    addToTeam(id) {
        
        if( ! this.team.includes(id) ){
           
            this.team.push(id); 

            this.updateLocalStorage();

            return true;
        }
        
        return false;
        
    }

    removeFromTeam(id){

        this.team = this.team.filter( p => p !== id );

        this.updateLocalStorage();

        return this.team;

    }

    getTeam(){

        return this.team;
    }

    updateLocalStorage(){

        localStorage.setItem('team', JSON.stringify(this.team) );

    }


}
  
  

export default teamStore;
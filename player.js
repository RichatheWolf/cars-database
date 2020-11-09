class Player{
    constructor(){
        this.index = null; 
        this.distance = 0; 
        this.name = null;

    }
    getCount(){
        var playerCountREF = database.ref('playercount')
        playerCountREF.on("value",(data)=>{playercount = data.val()})
    }
    updateCount(count){ 
        database.ref('/').update({ playercount: count });
    }
    update(){
        var playerIndex = "players/player" + this.index
        database.ref(playerIndex).set({
            name: this.name, distance: this.distance
        })
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players'); 
        playerInfoRef.on("value",(data)=>{ allPlayers = data.val(); })
    }
}
import React, { use, useState } from 'react';
import AvailablePlayers from '../../availablePlayers/AvailablePlayers';
import SelectedPlayers from '../selectedPlayers/SelectedPlayers';


const Players = ({playersPromise, setCoins, coins}) => {
    const players = use(playersPromise)
    const [selectedButton, setSelectedButton] = useState("available")
    const [selectedPlayers, setSelectedPlayers] = useState([])
    
    
    
    return (
        <div  className='w-11/12 mx-auto mt-10 '>
            <div className='flex justify-between items-center my-5'>
                {selectedButton=== "available"? <h2 className='text-2xl font-bold'>Available Players</h2> : <h2 className='text-2xl font-bold'>Selected Players <span>({selectedPlayers.length}/{players.length})</span></h2>}
                <div>
                    <button onClick={()=>setSelectedButton("available")} className={`btn ${selectedButton === "available"? "bg-[#E7FE29]" : ""} rounded-l-xl join-item rounded-none`}>Available</button>
                    <button onClick={()=> setSelectedButton("selected")} className= {`btn ${selectedButton === "selected"? "bg-[#E7FE29]": ""} rounded-r-xl join-item rounded-none`}>Selected <span>({selectedPlayers.length})</span></button>
                </div>
            </div>
            {selectedButton==="available"? 
            <AvailablePlayers 
            players={players} 
            setCoins={setCoins} 
            coins={coins}
            setSelectedPlayers={setSelectedPlayers}
            selectedPlayers={selectedPlayers}>

            </AvailablePlayers>
             : <SelectedPlayers players={players} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setCoins={setCoins} 
            coins={coins}></SelectedPlayers>}
        </div>
    );
};

export default Players;
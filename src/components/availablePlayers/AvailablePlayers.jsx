import React from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import Cards from "../ui/Cards";

const AvailablePlayers = ({ players, setCoins, coins, selectedPlayers, setSelectedPlayers }) => {

  return (
    <div>
      
      <div className="grid md:grid-cols-3 space-y-5 gap-5">
        {
        players.map(player=>
        <Cards key={player.id} 
        player={player} 
        setCoins={setCoins} 
        coins={coins}
        selectedPlayers={selectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
        >

        </Cards>
      )
      }
      
      </div>
    </div>
  );
};

export default AvailablePlayers;

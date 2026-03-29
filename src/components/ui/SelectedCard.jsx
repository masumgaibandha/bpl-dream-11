import React from 'react';
import { MdDelete } from 'react-icons/md';

const SelectedCard = ({player, setSelectedPlayers, selectedPlayers, setCoins, 
            coins}) => {
    const handleSelectedPlayerDelete = (player)=>{
        console.log(selectedPlayers, "selectedPlayers")
        const filteredPlayer = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != player.playerName)
        console.log(filteredPlayer, "filteredPlayer")
        setSelectedPlayers(filteredPlayer)
        let newPrice = parseInt(player.price)
        setCoins(coins + newPrice)
    }
    return (
        <div>
            <div className="flex justify-between items-center bg-base-100 shadow-sm border-2 border-gray-200 my-5 p-5">
          <div className="flex items-center gap-3">
            <figure>
              <img
                src={player.playerImage}
                alt="Movie" className="w-20 h-20"
              />
            </figure>
            <div className="">
              <h2 className="font-bold text-xl">{player.playerName}</h2>
              <p>{player.battingStyle}</p>
            </div>
          </div>
          <div>
            <span onClick={() => handleSelectedPlayerDelete(player)}>
              <MdDelete size={30} color="red" className='cursor-pointer' />
            </span>
          </div>
        </div>
        </div>
    );
};

export default SelectedCard;
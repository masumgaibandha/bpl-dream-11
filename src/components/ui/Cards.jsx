import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const Cards = ({ player, setCoins, coins, selectedPlayers, setSelectedPlayers }) => {
  // console.log(player.price);
  const [isSelected, setIsSelected] = useState(false);
  const handleChoosePlayers = () => {
    
    let newCoins = coins - player.price;
    if(newCoins >=0){
      setCoins(coins - player.price);
    }
    else{
      toast.error("Not enough coins")
      return
    }
    // alert(`${player.playerName} is selected`)
    toast.success(`${player.playerName} is selected`)
    setIsSelected(true);
    setSelectedPlayers([...selectedPlayers, player])
  };

  return (
    <div className="card bg-base-100 shadow-sm border-2 border-gray-300">
      <figure>
        <img
          className="w-full h-72 rounded-xl object-contain"
          src={player.playerImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <FaUser />
          {player.playerName}
        </h2>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-3">
            <FaFlag /> {player.playerCountry}
          </span>
          <button className="btn">{player.playerType}</button>
        </div>
        <hr className="text-gray-300" />
        <div>
          <p>Rating</p>
        </div>
        <div className="flex justify-between items-center">
          <p>{player.battingStyle}</p>
          <p className="text-right">{player.bowlingStyle}</p>
        </div>
        <div className="flex justify-between items-center">
          <span>Price: ${player.price}</span>
          <button
            className="btn"
            onClick={handleChoosePlayers}
            disabled={isSelected}
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

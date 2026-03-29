import React from "react";
import { MdDelete } from "react-icons/md";
import SelectedCard from "../../ui/SelectedCard";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  setCoins,
  coins,
}) => {
  // console.log(selectedPlayers, "selectedPlayers")
  return (
    <div>
      {selectedPlayers.length === 0 ? 
      
      <div className="text-center py-10 card bg-base-200 rounded-2xl border-2 border-gray-200 mb-6">
        <h2 className="text-3xl font-bold pb-3">No Players Selected yet</h2>
        <p className="text-xl font-bold pb-5">Go to Available tab to select players</p>
      </div>
      
      : selectedPlayers.map((player) => (
        <SelectedCard
          setSelectedPlayers={setSelectedPlayers}
          selectedPlayers={selectedPlayers}
          key={player.id}
          player={player}
          setCoins={setCoins}
          coins={coins}
        ></SelectedCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;

import { createContext, useState } from "react";

const BoughtContext = createContext({
  bought: [],
  totalBought: 0,
  addBought: (boughtSong) => {},
  itemIsBought: (songId) => {},
});

export function BoughtContextProvider(props) {
  const [userBought, setUserBought] = useState([]);

  function addBoughtHandler(boughtSong) {
    setUserBought((prevUser) => {
      return prevUser.concat(boughtSong);
    });
  }

  function itemIsBoughtHandler(songId) {
    return userBought.some((song) => song.id === songId);
  }

  const context = {
    bought: userBought,
    totalBought: userBought.length,
    addBought: addBoughtHandler,
    itemIsBought: itemIsBoughtHandler,
  };

  return (
    <BoughtContext.Provider value={context}>
      {props.children}
    </BoughtContext.Provider>
  );
}

export default BoughtContext;

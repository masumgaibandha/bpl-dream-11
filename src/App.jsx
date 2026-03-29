import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Homepage/Banner";
import Players from "./components/Homepage/players/Players";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";

const playersFetch = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
function App() {
  const playersPromise = playersFetch();
  const [coins, setCoins] = useState(50000);

  return (
    <>
      <Navbar coins={coins}></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Players
          playersPromise={playersPromise}
          setCoins={setCoins}
          coins={coins}
        ></Players>
      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        
      />
    </>
  );
}

export default App;

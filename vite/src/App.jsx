import "./App.css";
import Listing from "./components/Listing/Listing";
import data from "./data/etsy.json";

function App() {
  let items = [];

  items = data;

  return (
    <>
      <Listing items={items} />
    </>
  );
}

export default App;

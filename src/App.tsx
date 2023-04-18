import { MainButton } from "./components/buttons/mainButton";
import { FlagItem } from "./components/flagItem";
import { Navbar } from "./components/navbar";
import logo from "./assets/pics/kitchenLogoExample.png";
import { KitchenCard } from "./components/cards/kitchenCard";
function App() {
  return (
    <div className="App">
      <Navbar />
      <FlagItem value={"jn fdssg 150"} />
      <MainButton value={"sfsdf"} />
      <KitchenCard
        image={logo}
        title={"СУП КУРИНЫЙ"}
        description={
          "Куриный суп с вермишелью  с удовольствием съедят и дети, и взрослые."
        }
      />
    </div>
  );
}

export default App;

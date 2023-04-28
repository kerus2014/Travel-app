import { MainButton } from "./components/buttons/mainButton";
import { Navbar } from "./components/navbar";
import logo from "./assets/pics/kitchenLogoExample.png";
import { KitchenCard } from "./components/cards/kitchenCard";
import { DatePicker } from "./components/datePicker";
import { useState } from "react";
import { FlagItem } from "./components/flagItem";
function App() {
  const [date, setDate] = useState(() => new Date());
  const setFirstDate = (date: any) => {
    setDate(date);
  };

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
      <DatePicker value={date} handler={setFirstDate} />
      {/* <DatePicker value={date} handler={setFirstDate} /> */}
    </div>
  );
}

export default App;

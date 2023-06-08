import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["new York", "san", "tokyo", "london"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);



  return (
    <div>
      <ListGroup
        items={items}
        heading="cities"
        onSelectItem={handleSelectItem}
      />

      <div>
        {alertVisible && (
          <Alert
            onClose={() => {
              setAlertVisibility(false);
            }}
          >
            hello Word
          </Alert>
        )}
      </div>

      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        my
      </Button>
    </div>
  );
}

export default App;

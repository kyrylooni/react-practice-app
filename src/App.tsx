// Parent component (Consumer)
// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item)
  // }

  // return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>;
  const [alertVisible, setAlertVisibility] = useState(false)

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false) }> My alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  )
}

export default App;
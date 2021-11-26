import { useState } from 'react'
import './App.css';
import { Button, Form } from 'react-bootstrap'
import Counter from './Components/Counter/Counter';

function App() {

  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const videName = () => {
    if (show) {
      setFirstName("");
      setlastName("")
    }
  }
  return (
    <div className="App">

      <Form.Control type="text"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        placeholder="Enter your firstName ..."
        className="inputs" />

      <Form.Control type="text"
        onChange={(e) => setlastName(e.target.value)}
        value={lastName}
        placeholder="Enter your lastName ..."
        className="inputs" />

      <Button variant="success" onClick={(e) => { setShow(!show); videName() }} >
        {!show ? "Show Counter" : "Hide Counter"}
      </Button>

      {show && <Counter firstName={firstName} lastName={lastName} />}
    </div>
  );
}

export default App;

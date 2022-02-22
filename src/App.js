import Cliente from "./components/Cliente";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [clientes, setClientes] = useState([]);
  const url =
    "https://cors-anywhere.herokuapp.com/https://dw-scc-rest.herokuapp.com/api/v1/clientes";
  const getClientes = () => {
    axios.get(url).then((response) => {
      setClientes(response.data);
    });
  };

  useEffect(() => {
    getClientes();
  }, []);

  const renderClientes = clientes.map((cliente) => {
    return (
      <Col sm>
        <Cliente key={cliente.id} {...cliente} />
      </Col>
    );
  });

  return (
    <div className="App">
      <Row>{renderClientes}</Row>
    </div>
  );
}
// https://dw-scc-rest.herokuapp.com/api/v1/clientes
export default App;

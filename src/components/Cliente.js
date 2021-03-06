import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { cpfMask, cepMask } from "./mascaras";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Client(props) {
  return (
    <div className="cliente">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="./imagens/usuario.png" />
        <Card.Body>
          <Card.Title>{props.nome}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>CPF : {cpfMask(props.cpf)}</ListGroupItem>
          <ListGroupItem>
            Data de nascimento : {props.dataNascimento}
          </ListGroupItem>
          <ListGroupItem>Data de cadastro : {props.dataCadastro}</ListGroupItem>
          <ListGroupItem>
            Sexo : {props.sexo === "M" ? "Masculino" : "Feminino"}
          </ListGroupItem>
          <ListGroupItem>CEP : {cepMask(props.cep)}</ListGroupItem>
          <ListGroupItem>Endereço : {props.endereco}</ListGroupItem>
          <ListGroupItem>Complemento : {props.complemento}</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
}

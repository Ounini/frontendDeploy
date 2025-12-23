import { Accordion } from "react-bootstrap";

const accordData = [
  {
    id: 1,
    title: "What is Life?",
    solution: "Life is what we breath.",
  },
  {
    id: 2,
    title: "Who is Godswill?",
    solution: "Godswill is a student in OTS",
  },
  {
    id: 3,
    title: "What about Paul?",
    solution: "Paul is a friend of Godswill and also a student in OTS.",
  },
];

function Accord() {
  return (
    <Accordion defaultActiveKey="0">
      {accordData.map((accord, index) => (
        <Accordion.Item eventKey={index} key={accord.id}>
          <Accordion.Header>{accord.title}</Accordion.Header>
          <Accordion.Body>{accord.solution}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default Accord;

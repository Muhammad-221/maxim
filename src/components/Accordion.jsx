import Accordion from 'react-bootstrap/Accordion';

function AlwaysOpenExample({num, title, lorem}){
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey={num}>
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>{lorem}</Accordion.Body>
        </Accordion.Item>
    </Accordion>
  );
}

export default AlwaysOpenExample;
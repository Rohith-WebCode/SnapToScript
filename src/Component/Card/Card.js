import Card from 'react-bootstrap/Card';
import './Card.css'
import Img1 from '../../Img/av5c8336583e291842624.png';
import Img2 from '../../Img/remote-extraction.png';
import Img3 from '../../Img/1990948-200.png'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CardComponent() {
  const data = [
    {
      title: "Upload Images",
      text: "You can drag and drop Images into the input box above or select images from your local device.",
      imgsrc: Img1
    },
    {
      title: "Extract Text from Images",
      text: "Hit the Submit button. Then Our Image to text converter automatically extracts text from images and transforms it into editable text.",
      imgsrc: Img2
    },
    {
      title: "Copy Text",
      text: "copy content to the clipboard using copy button.",
      imgsrc: Img3
    }
  ];
  return (
<Row xs={1} lg={3} className="g-4" style={{width:'100%'}}>
{data.map((data) => (
      
        <Col key={data}>
          <Card className='Card'>
          <Card.Img variant="top" src={data.imgsrc} className='img-logo'/>
          <Card.Body className='card-text'>
            <Card.Title>{data.title}</Card.Title>
        <Card.Text>
       {data.text}
        </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
      ))}
    </Row>


  );
}

export default CardComponent;
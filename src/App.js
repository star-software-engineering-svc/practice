import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js'
import Button from './components/Button.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import img1 from './images/Frame.png';
import img2 from './images/Frame (1).png';
import img3 from './images/Frame (7).png';
import img4 from './images/Frame (8).png';
import img5 from './images/Frame (9).png';
import img6 from './images/Frame (10).png';

function App() {

  const cards = [
    { image: img1, title: 'Feature 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.' },
    { image: img2, title: 'Feature 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.' },
    { image: img3, title: 'Feature 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.' },
    { image: img4, title: 'Feature 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.' },
    { image: img5, title: 'Feature 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.' },
    { image: img6, title: 'Feature 6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.' }
  ]

  return (
    <Container>
      <div className='head-section'>
        <p className="feature">FEATURES</p>
        <h1 className="title">Here is more of what it can do for you</h1>
        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.</p>
      </div>

      <Row>
        {cards.map((item, idx) => {
          return (<Col sm={6} md={4}><Card key={idx} image={item.image} title={item.title} description={item.description}></Card></Col>);
        })}
      </Row>

      <div style={{ textAlign: 'center' }}>
        <Button label="Register your Tesla"></Button>
      </div>
    </Container >
  );
}

export default App;

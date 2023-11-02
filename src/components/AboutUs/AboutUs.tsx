import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap'

export const AboutUs = () => {
    return (
        <>
            <Card body className="border-0"><Card.Title>About Us</Card.Title>
                <Card.Text>
                    We are a team of passionate individuals who love to create amazing things. Our mission is to provide high-quality services and products that exceed our customers' expectations.
                </Card.Text></Card>;
            <CardGroup >
                <Card className="mx-4">
                    <Card.Img variant="top" src="src/assets/images/AboutUsCard1.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    
                </Card>


                <Card className="mx-4">
                    <Card.Img variant="top" src="src/assets/images/AboutUsCard2.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                    
                </Card>


                <Card className="mx-4">
                    <Card.Img variant="top" src="src/assets/images/AboutUsCard3.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
            </CardGroup>
        </>
    )
}

export default AboutUs
import { Card, Button } from "react-bootstrap";
function ProductCard({ name, description, price, image }) {
    return (
        <Card className="border-0">
            <Card.Img variant="top" src={image} />
            <Card.Body className="px-0">
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>{description}</Card.Subtitle>
                <Card.Text className="fs-5">$ {price}</Card.Text>
                <Button variant="success">Add to cart</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;

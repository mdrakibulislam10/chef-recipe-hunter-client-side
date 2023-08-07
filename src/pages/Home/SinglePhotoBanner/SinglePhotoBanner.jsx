import { Card } from "react-bootstrap";

const SinglePhotoBanner = () => {
    return (
        <section className="mx-auto pt-5" style={{ width: "80%" }}>
            <Card className="bg-dark text-white position-relative">
                <Card.Img src="https://ichisushi.com/wp-content/uploads/2022/05/sushi-cook.jpg" alt="Card image" />
                <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Title className="text-center fs-1 text-info">Lets explore our chefs and their <br />
                        delicious recipe.</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </section>
    );
};

export default SinglePhotoBanner;

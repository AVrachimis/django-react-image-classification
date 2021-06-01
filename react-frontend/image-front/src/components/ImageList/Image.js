import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Image = (props) => {
    return (
        <Card style={{ width: '18rem' }} className="mx-auto mb-2">
            <Card.Img variant="top" src={props.pict} />
            <Card.Body>

                <Card.Title>
                    Classified as: {props.name}
                </Card.Title>

            </Card.Body>
        </Card>
    );
}
export default Image;
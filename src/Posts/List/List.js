import React from 'react';
import {Card, CardBody, CardText, CardTitle} from 'reactstrap';
import './List.css';

export default function List({ items = [], fetching }) {
    if (fetching) {
        return <div>Fetching...</div>;
    }

    if (items.length === 0) {
        return <div>No results.</div>;
    }

    return (
        <div>
            {
                items.map(({body, id, title}) => (
                    <Card key={id} className="posts__item">
                        <CardBody>
                            <CardTitle>{title}</CardTitle>
                            <CardText>{body}</CardText>
                        </CardBody>
                    </Card>
                ))
            }
        </div>
    );
}

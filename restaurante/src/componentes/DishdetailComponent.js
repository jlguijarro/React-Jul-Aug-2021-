import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


const RenderDish = (dish) => {

    return (
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );

}

const RenderComments = (comments) => {
    let comentarios = comments.map(elem =>
        <div>
            <ul className="list-unstyled">
                <li>{elem.comment}</li>
                <li>--{elem.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(elem.date)))}</li>
            </ul>
        </div>

    );

    return (
        <Card>
            <CardBody>
                <CardText>
                    {comentarios}
                </CardText>
            </CardBody>
        </Card>

    )
}

const DishDetail = (props) => {

    if (props.dish != undefined) {

        return (

            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {RenderDish(props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {RenderComments(props.dish.comments)}
                </div>

            </div>



        );
    } else

        return (
            <div></div>
        );
}
      
    

export default DishDetail;
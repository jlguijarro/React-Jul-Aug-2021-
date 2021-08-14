import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={this.props.dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );

    }

    renderComments(comments) {
        let comentarios = comments.map(elem =>
            <div>
                <ul className= "list-unstyled">
                    <li>{elem.comment}</li>
                    <li>--{elem.author}</li>
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

    render() {


        if (this.props.dish != null) {

            // const listaComments = numbers.map((this.props.dish.comments) => {
            //     <li key={this.props.dish.comments.id}>
            //         {this.props.dish.comments}
            //     </li>
            // });
            return (

                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>

                </div>



            );
        } else
            return (
                <div></div>
            );
    }
}

export default Dishdetail;
import React, { Component } from 'react';
//import { Media } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
//import Dishdetail from 'C:/Users/Yosetto/Documents/GitHub/React-Jul-Aug-2021-/restaurante/src/componentes/DishdetailComponent.js'; 
import Dishdetail from './DishdetailComponent.js';

class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    }

    //console.log("Llamada a constructor");
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  render() {

    console.log("render invoked");
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id}
            onClick={() => this.props.onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (


      <div className="container">
        <div className="row">
          {menu}
        </div>

        <Dishdetail dish={this.state.selectedDish} />

      </div>
    );
  }
}

export default Menu;

  // componentDidMount() {
  //   console.log("Llamada a componentDidMount");
  // }
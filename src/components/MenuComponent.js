import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish})
    }
    renderDish(dishes) {
        if (dishes != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dishes.image} alt={dishes.name} />
                    <CardBody>
                        <CardTitle>{dishes.name}</CardTitle>
                        <CardText>{dishes.description}</CardText>
                    </CardBody>
                </Card>
            )

        }
        else {
            return (
                <div></div>
            )
        }
    }
    render() {
        const menu = this.props.dishes.map((dishes) => {
            return (
                <div key={dishes.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dishes)}>
                        <CardImg width="100%" src={dishes.image} alt={dishes.name} />
                        <CardImgOverlay>
                            <CardTitle>{dishes.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="Container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;
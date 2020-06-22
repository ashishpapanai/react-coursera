import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }
    renderDish(dish){
        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
            </Card>
        );
    }

    renderComments(dish){
        if (dish.comments != null){
            const commentList = dish.comments.map((comments) => {
                return (
                    <ul key={comments.id} className="list-unstyled">
                        <li><p>{comments.comment}</p></li>
                        <li><p>--{comments.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}
                            </p>
                        </li>
                    </ul>
                );
            });
            return(
                <div>
                    <h4>Comments</h4>
                    <div>
                        {commentList}
                    </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    
    render(){
        if(this.props.dish != null){
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
                )
        }
        else {
            return(
                <div></div>
            )
        }
    }
}
export default DishDetail;
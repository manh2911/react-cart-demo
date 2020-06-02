import React, {Component} from 'react';
import * as Message from '../constants/Message';


class Product extends Component {
    render() {
        var { product } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img
                            src={ product.image }
                            className="img-fluid" alt=""/>
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{ product.name }</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                { this.showRatings(product) }
                            </li>
                        </ul>
                        <p className="card-text">
                            { product.description }
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a className="btn-floating blue-gradient" data-toggle="tooltip"
                                   data-placement="top" title=""
                                   onClick={() => this.onAddToCart(product)}
                                   data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onAddToCart = (product) => {
        this.props.onAddToCart(product)
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS)
    }

    showRatings(product) {
        var result = [];
        for (var i = 1; i <= 5; i++) {
            i <= product.rating ? result.push(<i key={i} id={i} onClick={() => this.changeRatings(product, event)} className="fa fa-star"></i>) : result.push(<i key={i} id={i} onClick={() => this.changeRatings(product, event)} className="fa fa-star-o"></i>);
        }

        return result;
    }

    changeRatings = (product, event) => {
        var rating = parseInt(event.target.id);
        this.props.onChangeRatings(product, rating)
    }
}

export default Product;

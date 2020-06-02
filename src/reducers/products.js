import * as Types from "../constants/ActionType";

var initialState1 = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600-600x600-600x600.jpg',
        description: 'apple',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Galaxy note 8',
        image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/12/24/636812571354250034_ss-note8-den-1.png',
        description: 'Samsung',
        price: 600,
        inventory: 15,
        rating: 3
    },
    {
        id: 3,
        name: 'Oppo F11',
        image: 'https://hcm.clickbuy.com.vn/uploads/2019/04/oppo-f11-pro-xanh.png',
        description: 'Oppo',
        price: 700,
        inventory: 10,
        rating: 2
    }
];

var data = localStorage.getItem('PRODUCTS') ?  JSON.parse(localStorage.getItem('PRODUCTS')): [];
var initialState = data.length !== 0 ? data : initialState1;

const products = (state = initialState, action) => {
    var {product, rating} = action;
    var index = -1;

    switch (action.type) {
        case Types.CHANGE_RATING:
            index = findProduct(state, product)
            state[index].rating = rating;
            localStorage.setItem('PRODUCTS', JSON.stringify(state));
            return [...state];

        default:
            localStorage.setItem('PRODUCTS', JSON.stringify(state));
            return [...state];
    }
}

var findProduct = (state, product) => {
    var index = -1;
    for (var i = 0; i < state.length; i++) {
        if (state[i].id === product.id) {
            index = i;
            break;
        }
    }
    return index;
}

export default products;
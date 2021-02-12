import React, {Component} from 'react';
import Commidity from "./components/Commidity";

const commodityList = [{
    id: 1,
    title: 'AirPods Pro',
    price: 1999,
    imageUrl: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1591634795000'
}, {
    id: 2,
    title: 'AirPods Pro',
    price: 1999,
    imageUrl: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1591634795000'
}, {
    id: 3,
    title: 'AirPods Pro',
    price: 1999,
    imageUrl: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1591634795000'
}, {
    id: 4,
    title: 'AirPods Pro',
    price: 1999,
    imageUrl: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1591634795000'
}]

class ShoppingCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commodityList
        }
    }

    render() {
        return (
            <div>
                <div style={{fontWeight: 'bolder'}}>购物车</div>
                <div>
                    {
                        this.state.commodityList.map(c => (
                            <Commidity key={c.id} commidity={c}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default ShoppingCart;

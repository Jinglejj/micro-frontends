import React, {Component} from 'react';
import Commidity from "./components/Commidity";
import {ShoppingCartContainer,CommidityContainer} from './style'
const commodityList = [{
    id: 1,
    title: 'AirPods Pro',
    price: 1999,
    count:1,
    imageUrl: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1591634795000'
}, {
    id: 2,
    title: 'AirPods Pro',
    price: 1999,
    count:2,
    imageUrl: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1591634795000'
}, {
    id: 3,
    title: 'AirPods Pro',
    price: 1999,
    count:3,
    imageUrl: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1591634795000'
}, {
    id: 4,
    title: 'AirPods Pro',
    price: 1999,
    count:1,
    imageUrl: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1591634795000'
}]


class ShoppingCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commodityList
        }
        this.handleDelete=this.handleDelete.bind(this);
        this.handleAdd=this.handleAdd.bind(this);
        this.handleMinus=this.handleMinus.bind(this);
    }

    render() {

        const commidity = this.state.commodityList.map(c => (
            <Commidity  key={c.id}
                        commidity={c}
                        handleDelete={this.handleDelete}
                        handleAdd={this.handleAdd}
                        handleMinus={this.handleMinus}
                        />
        ))

        return (
            <ShoppingCartContainer>
                <div className='title'>购物车</div>
                <CommidityContainer >
                    {commidity}
                </CommidityContainer>
            </ShoppingCartContainer>
        );
    }
    handleAdd(id){
        const {commodityList}=this.state;
        const index=commodityList.findIndex(e=>e.id===id);
        commodityList[index].count++;
        this.setState(()=>({commodityList}));
    }
    handleMinus(id){
        const {commodityList}=this.state;
        const index=commodityList.findIndex(e=>e.id===id);
        if(commodityList[index].count!==1){
            commodityList[index].count--;
            this.setState(()=>({commodityList}));
        }
    }
    handleDelete(id){
        const {commodityList}=this.state;
        const index=commodityList.findIndex(e=>e.id===id);
        commodityList.splice(index,1);
        this.setState(()=>({commodityList}));
    }
}

export default ShoppingCart;

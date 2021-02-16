
import {SettlementButton,OrderInfo,Container} from './style'
function BottomInfo(props){
    const {subTotal=0,ShippingCost=0}=props;
    return (
    <Container>
        <OrderInfo>
            <span>商品金额</span>
            <span>￥{subTotal}</span>
        </OrderInfo>
        <OrderInfo>
            <span>优惠价格</span>
            <span>￥{ShippingCost}</span>
        </OrderInfo>
        <OrderInfo className='total'>
            <span>合计</span>
            <span className='total-price'>￥{subTotal-ShippingCost}</span>
        </OrderInfo>
        <SettlementButton>
            {`结算(￥${subTotal-ShippingCost||''})`}
        </SettlementButton>
    </Container>)
}


export default BottomInfo;
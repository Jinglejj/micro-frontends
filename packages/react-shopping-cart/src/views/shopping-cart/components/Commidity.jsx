import './index.scss'
import {IoIosAdd, IoIosRemove} from 'react-icons/io'
import {BiTrashAlt} from 'react-icons/bi'
import Icon from '../../../components/icon'
import {formatNumbser} from "../../../utils";

function Commidity(props) {

    const {commidity} = props;

    return (
        <div className='commidity-container'>
            <img src={commidity.imageUrl} style={{width: '100px', height: '100px'}} alt=""/>
            <div className='info-container'>
                <div className='title'>{commidity.title}</div>
                <div className='price'>￥{formatNumbser(commidity.price)}</div>
                <div className='handle-container'>
                    <Icon icon={IoIosRemove}/>
                    <span>1</span>
                    <Icon icon={IoIosAdd}/>
                    <div className='delete'>
                        <Icon icon={BiTrashAlt}/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Commidity;

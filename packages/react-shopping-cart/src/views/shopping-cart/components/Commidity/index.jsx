import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { BiTrashAlt } from "react-icons/bi";
import Icon from "@/components/icon";
import { formatNumbser } from "@/utils";
import { CommidityContainer,CommidityImage,InfoContainer,Info,HandleContainer,Delete} from './style'
function Commidity(props) {
  const { commidity } = props;
  return (
    <CommidityContainer round>
      <CommidityImage src={commidity.imageUrl}  alt="" />
      <InfoContainer >
        <Info className='title'>{commidity.title}</Info>
        <Info className='price'>
          ￥{formatNumbser(commidity.price)}
        </Info>
        <HandleContainer >
          <Icon
            icon={IoIosRemove}
            onClick={() => props.handleMinus(commidity.id)}
          />
          <span>{commidity.count}</span>
          <Icon icon={IoIosAdd} onClick={() => props.handleAdd(commidity.id)} />
          <Delete >
            <Icon
              icon={BiTrashAlt}
              onClick={() => props.handleDelete(commidity.id)}
            />
          </Delete>
        </HandleContainer>
      </InfoContainer>
    </CommidityContainer>
  );
}

export default Commidity;

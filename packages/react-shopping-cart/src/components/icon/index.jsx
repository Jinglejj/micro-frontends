import React from 'react'
import {IconContainer} from './style'

function Icon(props) {
    const {icon} = props
    return (
        <IconContainer className='icon-container' onClick={props.onClick} {...props} >
            {React.createElement(icon)}
        </IconContainer>
    )
}

export default Icon;

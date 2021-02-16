import styled from "styled-components";

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:${props=>props.fontSize||'1em'};
  color:${props=>props.color||''}
`;

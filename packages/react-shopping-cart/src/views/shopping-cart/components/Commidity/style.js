import styled from "styled-components";
export const CommidityContainer = styled.div`
  display: flex;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 12px;
  background-color: ${(props) => props.backgroundColor || "white"};
  border-radius: ${(props) => props.round?'10px':''};
`

export const CommidityImage = styled.img`
  width: 80px;
  height: 80px;
`

export const InfoContainer = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const Info = styled.div`
  &.title {
    font-weight: bold;
  }

  &.price {
    margin-top: 6px;
    color: gray;
  }
`

export const HandleContainer = styled.div`
  display: flex;
  margin-top: auto;
`

export const Delete=styled.div`
    margin-left: auto;
`

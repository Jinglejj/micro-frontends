import styled from "styled-components";
import theme from "@/variables/theme";

export const Container = styled.div`
  height: 180px;
  display:flex;
  flex-direction:column;
`;

export const OrderInfo = styled.div`
  margin-top: 8px;
  color: gray;
  display: flex;
  justify-content: space-between;
  font-size:.8em;
  &.total {
    margin-top: 16px;

    .total-price {
      font-size: 1.3em;
      font-weight:bolder;
      color: black;
    }
  }
`;

export const SettlementButton = styled.div`
  margin-top:auto;
  margin-bottom:auto;
  margin-left: 16px;
  margin-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  text-align: center;
  color: white;
  border-radius: 12px;
  background-color: ${theme.primary};
`;

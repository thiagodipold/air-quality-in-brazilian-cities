import { Card } from "@material-ui/core";
import styled from "styled-components";

export const CustomCard = styled(Card)<{ backgroundColor: any }>`
  border-radius: 10px;
  ${({ backgroundColor }) =>
    `
        background-color: ${backgroundColor}
    `};
`;

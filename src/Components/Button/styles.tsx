import styled from "styled-components";

interface Props {
    backgroundColor : any;
    fontColor : any;
}

export const StyledButton = styled.button<Props>`
    background-color: ${props=> props.backgroundColor? props.backgroundColor : '#000'};
    color: ${props=> props.fontColor ? props.fontColor : '#FFF'}
`;

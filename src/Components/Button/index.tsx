import { StyledButton } from "./styles";

export default function Button({...props}) {
    return (
        <StyledButton
            backgroundColor={props.backgroundColor}
            fontColor={props.fontColor}
        >{props.children}</StyledButton>
    )
};

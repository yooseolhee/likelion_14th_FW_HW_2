import styled from 'styled-components';

interface ButtonProps{
    label : string;
    onClick?: () => void;
}

const StyledButton = styled.button`
    color: blue;
    font-weight: 800;
`;


function Button({ label, onClick }:ButtonProps) {
    return (
        <StyledButton onClick={onClick}>{label}</StyledButton>
    );
}

export default Button;
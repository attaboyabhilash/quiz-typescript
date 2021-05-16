import styled from "styled-components"

type ButtonWrapperProps = {
    correct: boolean,
    userClicked: boolean
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease-in-out;
    margin: 10px auto;
    width: 100%;

    :hover {
        opacity: 0.8
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.9em;
        font-family: "Montserrat Alternates", sans-serif;
        border: none;
        outline: none;
        padding: 10px 20px;
        width: 90%;
        background: ${({correct, userClicked}) => 
            correct ? 'linear-gradient(90deg, #56ffa4, #59bc86)' 
            : !correct && userClicked ? 'linear-gradient(90deg, #ff5656, #c16868)' 
            : 'linear-gradient(90deg, #56ccff, #6eafb4)'
        };
        color: #fff; 
    }
`
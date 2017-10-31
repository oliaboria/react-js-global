import styled from 'styled-components';

import { PINK, WHITE } from '../../constants/colors';

export const Button = styled.button`
    margin: 1rem;
    padding: 1rem;
    border-radius: 3px;
    border: none;
    background-color: ${ props => props.primary ? PINK : WHITE };
    color: ${ props => props.primary ? WHITE : PINK };
    font-size: 14px;
    outline: none;
    cursor: pointer;
`;
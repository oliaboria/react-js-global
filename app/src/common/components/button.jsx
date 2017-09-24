import styled from 'styled-components';

import { PINK, WHITE } from '../constants/colors';

const Button = styled.button`
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    background-color: ${ props => props.primary ? PINK : WHITE };
    color: ${ props => props.primary ? WHITE : PINK };
`;
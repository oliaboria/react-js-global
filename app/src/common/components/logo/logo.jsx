import React from 'react';
import styled from 'styled-components';

import { PINK } from '../../constants/colors';

const LogoText = styled.span`
    color: ${ PINK };
    font-size: 20px;
`;

export class Logo extends React.Component {
    render() {
        return (
            <LogoText>netflixroulette</LogoText>
        );
    } 
}
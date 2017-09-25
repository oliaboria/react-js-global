import React from 'react';
import styled from 'styled-components';

import { DARK_GREY } from '../../constants/colors';
import { Logo } from '../logo';

const FooterContainer = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    background-color : ${ DARK_GREY };
    
    span {
        display: inline-block;
        padding: 9px 80px;
    }
`;

export class Footer extends React.Component {
    render() {
        return (
            <FooterContainer>
                <Logo />
            </FooterContainer>
        );
    } 
}
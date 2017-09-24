import React from 'react';
import styled from 'styled-components';

import backgroundImg from '../../../assets/img/background.jpg';

import { Logo } from '../logo';
import { Search } from '../search/search';

const HeaderContainer = styled.header`
    height: 300px;
    background-image: url(${backgroundImg});
    background-color: #606060;
    background-blend-mode: multiply;
    padding: 20px 80px;
`;

const LogoWrapper = styled.div`
    margin-bottom: 55px;
`;

const INPUT = styled.input`
    width: 100%;
    background-color: green;
`;

export class Header extends React.Component {
    render() {
        return (
            <HeaderContainer>
                <LogoWrapper>
                    <Logo/ >
                </LogoWrapper>
                <Search />
            </HeaderContainer>
        );
    } 
}
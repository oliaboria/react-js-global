import React from 'react';
import styled from 'styled-components';

import backgroundImg from '../../../assets/img/background.jpg';

import { Search } from '../../../containers/moviesList/search/search.jsx';
import { Logo } from '../logo';

const HeaderContainer = styled.header`
    height: 300px;
    background-image: url(${ backgroundImg });
    background-color: #606060;
    background-blend-mode: multiply;
    padding: 20px 80px;
`;

const LogoWrapper = styled.div`
    margin-bottom: 55px;
`;

const ToolbarWrapper = styled.div`
    height: 100px;
    background-color: 
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
import React from 'react';
import styled from 'styled-components';

import backgroundImg from '../../../assets/img/background.jpg';

import { Search } from '../../../containers/moviesList/search/search';
import { LIGHT_GREY } from '../../constants/colors';
import { Logo } from '../logo';

const HeaderWrapper = styled.div``;

const HeaderContainer = styled.header`
    height: 260px;
    background-image: url(${ backgroundImg });
    background-color: #606060;
    background-blend-mode: multiply;
    padding: 20px 80px;
`;

const LogoWrapper = styled.div`
    margin-bottom: 55px;
`;

const ToolbarWrapper = styled.div`
    height: 40px;
    background-color: ${ LIGHT_GREY };
`;

export class Header extends React.Component {
    render() {
        return (
            <HeaderWrapper>
                <HeaderContainer>
                    <LogoWrapper>
                        <Logo/ >
                    </LogoWrapper>
                    <Search />
                </HeaderContainer>
                <ToolbarWrapper></ToolbarWrapper>
            </HeaderWrapper>
        );
    } 
}
import React from 'react';
import styled from 'styled-components';

import backgroundImg from '../../../assets/img/background.jpg';

import { MoviesToolbar } from '../../../containers/moviesList/moviesToolbar/moviesToolbar';
import { Search } from '../../../containers/moviesList/search/search';
import { LIGHT_GREY } from '../../constants/colors';
import { SIDE_PADDING } from '../../constants/dimensions';
import { Logo } from '../logo';

const HeaderWrapper = styled.div``;

const HeaderContainer = styled.header`
    height: 260px;
    background-image: url(${ backgroundImg });
    background-color: #606060;
    background-blend-mode: multiply;
    padding: 20px ${ SIDE_PADDING };
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
                <ToolbarWrapper>
                    <MoviesToolbar moviesLength={ this.props.moviesLength }/>
                </ToolbarWrapper>
            </HeaderWrapper>
        );
    } 
}
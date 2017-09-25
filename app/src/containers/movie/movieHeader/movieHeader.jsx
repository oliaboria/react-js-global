import React from 'react';
import styled from 'styled-components';

import { 
    HeaderWrapper,
    HeaderContainer,
    LogoWrapper,
    ToolbarWrapper
} from '../../../common/components/header/header';

import { Button } from '../../../common/components/button/button';
import { Logo } from '../../../common/components/logo/logo';
import { MovieDetails } from './movieDetails';

const SearchButton = Button.extend`
    padding: .5rem 2rem;
    position: absolute;
    top: -20px;
    right: 0;
`;

export class MovieHeader extends React.Component {
    render() {
        return (
            <HeaderWrapper>
                <HeaderContainer>
                    <LogoWrapper>
                        <Logo/ >
                        <SearchButton>SEARCH</SearchButton>
                    </LogoWrapper>
                    <MovieDetails movie={ this.props.movie } />
                </HeaderContainer>
                <ToolbarWrapper>
                    Films by { this.props.movie.director }
                </ToolbarWrapper>
            </HeaderWrapper>
        );
    } 
}
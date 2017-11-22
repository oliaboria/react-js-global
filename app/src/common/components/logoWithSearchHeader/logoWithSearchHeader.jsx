import React from 'react';
import styled from 'styled-components';

import { 
    HeaderContainer,
    LogoWrapper
} from '../header/header';

import { Logo } from '../logo/logo';
import { SearchForm } from '../searchForm/searchForm';

export class LogoWithSearchHeader extends React.Component {
    render() {
        return (
            <HeaderContainer>
                <LogoWrapper>
                    <Logo/ >
                </LogoWrapper>
                <SearchForm history={ this.props.history }/>
            </HeaderContainer>
        );
    } 
}
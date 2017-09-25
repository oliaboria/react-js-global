import React from 'react';
import styled from 'styled-components';

import { 
    HeaderWrapper,
    HeaderContainer,
    LogoWrapper,
    ToolbarWrapper
} from '../../../common/components/header/header';

import { Logo } from '../../../common/components/logo/logo';
import { SearchForm } from '../searchForm/searchForm';

export class SearchHeader extends React.Component {
    render() {
        return (
            <HeaderWrapper>
                <HeaderContainer>
                    <LogoWrapper>
                        <Logo/ >
                    </LogoWrapper>
                    <SearchForm />
                </HeaderContainer>
                <ToolbarWrapper />
                   
            </HeaderWrapper>
        );
    } 
}
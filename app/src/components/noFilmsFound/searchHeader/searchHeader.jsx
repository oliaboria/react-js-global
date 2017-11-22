import React from 'react';
import styled from 'styled-components';

import { 
    HeaderWrapper,
    ToolbarWrapper
} from '../../../common/components/header/header';

import { LogoWithSearchHeader } from '../../../common/components/logoWithSearchHeader/logoWithSearchHeader';

export class SearchHeader extends React.Component {
    render() {
        return (
            <HeaderWrapper>
                <LogoWithSearchHeader history={ this.props.history }/>
                <ToolbarWrapper />
            </HeaderWrapper>
        );
    } 
}
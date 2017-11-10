import React from 'react';
import styled from 'styled-components';

import { 
    HeaderWrapper,
    ToolbarWrapper
} from '../../../common/components/header/header';

import { LogoWithSearchHeader } from '../../../common/components/logoWithSearchHeader/logoWithSearchHeader';
import { MoviesToolbar } from '../moviesToolbar/moviesToolbar';

export class SearchHeader extends React.Component {
    render() {
        return (
            <HeaderWrapper>
                <LogoWithSearchHeader />
                <ToolbarWrapper>
                    <MoviesToolbar moviesNumber={ this.props.moviesNumber } 
                                   selectedSort={ this.props.selectedSort }
                                   sortAction={ this.props.sortAction }/>
                </ToolbarWrapper>
            </HeaderWrapper>
        );
    } 
}
import React from 'react';
import styled from 'styled-components';

import { DARK_GREY } from '../../../common/constants/colors';
import { SIDE_PADDING } from '../../../common/constants/dimensions';
import { SortFilter } from './sortFilter';

const ToolbarContainer = styled.div`
    &::after {
        content: '';
        display: table;
        clear: both;
    }
`;

const MoviesNumber = styled.span`
    float: left;
    font-weight: 400;
`;

export class MoviesToolbar extends React.Component {
    render() {
        return (
            <ToolbarContainer>
                <MoviesNumber>{ this.props.moviesNumber } movies found</MoviesNumber>
                <SortFilter selected={ this.props.selectedSort }
                            sortFunc={ this.props.sortAction }/>
            </ToolbarContainer>
        );
    } 
}
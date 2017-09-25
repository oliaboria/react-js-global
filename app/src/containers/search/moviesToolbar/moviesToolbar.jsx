import React from 'react';
import styled from 'styled-components';

import { DARK_GREY } from '../../../common/constants/colors';
import { SIDE_PADDING } from '../../../common/constants/dimensions';
import { SortFilter } from './sortFilter';

const ToolbarContainer = styled.div`
    line-height: 40px;
    padding: 0 ${ SIDE_PADDING };
    color: ${ DARK_GREY };

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
                <MoviesNumber>{ this.props.moviesLength } movies found</MoviesNumber>
                <SortFilter />
            </ToolbarContainer>
        );
    } 
}
import React from 'react';
import styled from 'styled-components';

import { RadioFilterList } from '../radioFilterList/radioFilterList';
import { DARK_GREY, PINK, WHITE } from '../../constants/colors';

const StyledFilter = styled.div`
    .title {
        color: ${ WHITE };
        text-transform: uppercase;
    }
`;

export class SearchFilter extends React.Component {
    constructor() {
        super();
        this.state = {
            filter: [ 'Title', 'Director' ],
            selected: 'Title'
        };
    }

    hanleFilterChange =  (changeEvent) => {
        this.setState({
            selected: changeEvent.target.value
        });
    }

    render() {
        return (
            <StyledFilter>
                <RadioFilterList selected={ this.state.selected }
                                 hanleFilterChange={ this.hanleFilterChange }
                                 filter={ this.state.filter }
                                 title='Search by' 
                                 class='search' />
            </StyledFilter>
        );
    } 
}
import React from 'react';
import styled from 'styled-components';

import { RadioFilterList } from '../../../common/components/radioFilterList/radioFilterList';
import { DARK_GREY, PINK, WHITE } from '../../../common/constants/colors';

const StyledFilter = styled.div`
    float: right;

    .title {
        font-weight: 400;
    }
`;

export class SortFilter extends React.Component {
    constructor() {
        super();
        this.state = {
            filter: [ 'release date', 'rating' ],
            selected: 'release date'
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
                                 title='Sort by' 
                                 class='sort' />
            </StyledFilter>
        );
    } 
}
import React from 'react';
import styled from 'styled-components';

import { GREY, PINK, WHITE } from '../../../common/constants/colors';
import { SearchFilterItem } from './searchFilterItem';

const FILTER_NAMES = [ 'Title', 'Director' ];

const FilterTitle = styled.span`
    color: ${ WHITE };
    font-size: 14px;
`;

export class SearchFilterList extends React.Component {
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

    renderList () {
        return this.state.filter.map((item, index) => {
            return <SearchFilterItem  key={index} 
                                      value={item} 
                                      selected={this.state.selected}
                                      handleOptionChange={this.hanleFilterChange} />
        });
    }

    render() {
        return (
            <div>
                <FilterTitle>SEARCH BY</FilterTitle>
                { this.renderList() }
            </div>
        );
    } 
}
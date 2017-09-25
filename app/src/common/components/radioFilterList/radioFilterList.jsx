import React from 'react';
import styled from 'styled-components';

import { RadioButton } from './radioButton';

const FilterTitle = styled.span`
    font-size: 14px;
`;

export class RadioFilterList extends React.Component {
    renderList () {
        return this.props.filter.map((item, index) => {
            return <RadioButton key={ index }  
                                value={ item } 
                                selected={ this.props.selected }
                                handleOptionChange={ this.props.hanleFilterChange }
                                class={ this.props.class } />
        });
    }

    render() {
        return (
            <div>
                <FilterTitle className="title">{ this.props.title }</FilterTitle>
                { this.renderList() }
            </div>
        );
    } 
}
import React from 'react';
import styled from 'styled-components';

import { DARK_GREY, PINK, WHITE } from '../../constants/colors.js';

const RadioWrapper = styled.div`
    color: ${ WHITE };
    display: inline-block;

    input[type=radio] {
        position: absolute;
        visibility: hidden;
    }

    label {
        display: inline-block;
        margin-left: 1em;
        padding: 0.25em 1em;
        border-radius: 3px;
        background-color: ${ props => props.selected ? PINK : DARK_GREY };
        color: ${ WHITE };
    }
`;

export class SearchFilterItem extends React.Component {
    isSetected () {
        return this.props.selected === this.props.value;
    }

    render() {
        return (
            <RadioWrapper selected={this.isSetected()}>
                <label>
                    <input type="radio" 
                           value={this.props.value}
                           checked={this.isSetected()} 
                           onChange={this.props.handleOptionChange} />
                    {this.props.value.toUpperCase()}
                </label>  
            </RadioWrapper>
        );
    } 
}
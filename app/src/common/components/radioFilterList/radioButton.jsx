import React from 'react';
import styled from 'styled-components';

import { DARK_GREY, PINK, WHITE } from '../../../common/constants/colors';

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
    }

    .search {
        padding: 0.25em 1em;
        border-radius: 3px;
        background-color: ${ props => props.selected ? PINK : DARK_GREY };
        color: ${ WHITE };
        text-transform: uppercase;
    }

    .sort {
        font-weight: 400;
        color: ${ props => props.selected ? PINK : DARK_GREY };
    }
`;

export class RadioButton extends React.Component {
    isSetected () {
        return this.props.selected === this.props.value;
    }

    render() {
        return (
            <RadioWrapper selected={ this.isSetected() }>
                <label className={ this.props.class }>
                    <input type='radio'
                           value={ this.props.value }
                           checked={ this.isSetected() } 
                           onChange={ this.props.handleOptionChange } />
                    { this.props.value }
                </label>  
            </RadioWrapper>
        );
    } 
}
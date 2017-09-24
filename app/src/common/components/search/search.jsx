import React from 'react';
import styled from 'styled-components';

import { GREY, PINK, WHITE } from '../../constants/colors.js';

const SeacrhHeader = styled.h1`
    color: ${ WHITE };
    font-size: 1.3rem;
    font-weight: 100;
`;

const InputWrapper = styled.div`
    position: relative;
    margin-top: 25px;

    &::before {
        content: '\u21b2';
        position: absolute;
        top: 15px;
        right: 10px;
        color: ${ GREY }; 
    }
`;

const SearchInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 45px;
    font-size: 16px;
    padding-left: 15px;
    background-color: black;
    color: ${ WHITE };
    border: none;
    border-bottom: 2px solid ${ PINK };
    outline: none;
`;

export class Search extends React.Component {
    render() {
        return (
            <div>
                <SeacrhHeader>FIND YOUR MOVIE</SeacrhHeader>
                <InputWrapper><SearchInput /></InputWrapper>
            </div>
        );
    } 
}
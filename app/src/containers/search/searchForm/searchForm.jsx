import React from 'react';
import styled from 'styled-components';

import { Button } from '../../../common/components/button';
import { GREY, PINK, WHITE } from '../../../common/constants/colors';
import { SearchFilter } from './searchFilter';

const FormTitle = styled.h1`
    color: ${ WHITE };
    font-size: 1.3rem;
    font-weight: 100;
`;

const Form = styled.form`
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
    margin-bottom: 30px;
`;

const SearchButton = Button.extend`
    position: absolute;
    right: 0;
    bottom: -25px;
    padding: .8rem 5rem;
`;

export class SearchForm extends React.Component {
    render() {
        return (
            <div>
                <FormTitle>FIND YOUR MOVIE</FormTitle>
                <Form>
                    <SearchInput />
                    <SearchFilter />
                    <SearchButton primary>SEARCH</SearchButton>
                </Form>
            </div>
        );
    } 
}
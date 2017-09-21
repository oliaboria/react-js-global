import React from 'react';
import styled from 'styled-components';

import backgroundImg from '../../../assets/img/background.jpg';

const HEADER_CONTAINER = styled.header`
    height: 350px;
    width: 100%;
    background-image: url(${backgroundImg});
    background-color: grey;
    background-blend-mode: multiply;
`;

const INPUT = styled.input`
    width: 100%;
    background-color: green;
`;

export class Header extends React.Component {
    render() {
        return (
            <HEADER_CONTAINER>
            </HEADER_CONTAINER>
        );
    } 
}
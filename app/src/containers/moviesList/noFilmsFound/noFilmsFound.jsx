import React from 'react';
import styled from 'styled-components';

const NoFilmsContainer = styled.div`
    color: #A9A9A9;
    font-size: 36px;
    font-weight: 300;
    margin: 150px auto;
`;

export class NoFilmsFound extends React.Component {
    render() {
        return (
            <NoFilmsContainer>No films found</NoFilmsContainer>
        );
    } 
}
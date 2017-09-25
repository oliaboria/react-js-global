import React from 'react';
import styled from 'styled-components';

import { ContentContainer } from '../../common/components/contentContainer/contentContainer';
import { SearchHeader } from './searchHeader/searchHeader';

const NoFilms = styled.div`
    color: #A9A9A9;
    font-size: 36px;
    font-weight: 300;
    margin: 150px auto;
`;

export class NoFilmsFound extends React.Component {
    render() {
        return (
            <div>
                <SearchHeader />
                <ContentContainer>
                    <NoFilms>No films found</NoFilms>
                </ContentContainer>
            </div>
        );
    } 
}
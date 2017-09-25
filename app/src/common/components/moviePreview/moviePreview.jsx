import React from 'react';
import styled from 'styled-components';

import { GREY } from '../../constants/colors';

const MovieWrapper = styled.div`
    flex-grow: 1;
    width: 33%;
    margin: 20px 0;
    
    > div {
        width: 285px;
        margin: 0 auto;
    }
`;

const MovieImg = styled.img`
    width: 285px;
    height: 405px;
`;

const MovieInfWrapper = styled.div`
    margin-top: 5px;

    &::after {
        display: table;
        content: '';
        clear: both;
    }
`;

const MovieTitle = styled.span`
    text-transform: uppercase;
    float: left;
    line-height: 22px;
`;

const MovieRealiseDate = styled.span`
    border: 1px solid black;
    border-radius: 3px;
    padding: 1px 6px;
    font-size: 12px;
    float: right;
    line-height: 18px;
`;

const MovieCategory = styled.div`
    font-size: 14px;
    margin-top: 5px;
    color: ${ GREY };
`;

export class MoviePreview extends React.Component {
    render() {
        return (
           <MovieWrapper>
                <div>
                    <MovieImg src={this.props.movie.poster}/>
                    <MovieInfWrapper>
                        <MovieTitle>{this.props.movie.showTitle}</MovieTitle>
                        <MovieRealiseDate>{this.props.movie.releaseYear}</MovieRealiseDate>
                    </MovieInfWrapper>
                    <MovieCategory>{this.props.movie.category}</MovieCategory>
                </div>
           </MovieWrapper>
        );
    } 
}
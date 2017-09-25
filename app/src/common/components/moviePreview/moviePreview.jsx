import React from 'react';
import styled from 'styled-components';

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
`;

const MovieTitle = styled.span`
`;

const MovieRealiseDate = styled.span`
`;

const MovieGenre = styled.div`
`;

export class MoviePreview extends React.Component {
    render() {
        return (
           <MovieWrapper>
                <div>
                    <MovieImg src={this.props.movie.poster}/>
                    <MovieInfWrapper>
                        <MovieTitle>{this.props.movie.showTitle}</MovieTitle>
                    </MovieInfWrapper>
                </div>
           </MovieWrapper>
        );
    } 
}
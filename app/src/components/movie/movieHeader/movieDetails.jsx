import React from 'react';
import styled from 'styled-components';

import { IMG_URL } from '../../../common/config/api';
import { MovieImg } from '../../../common/components/moviePreview/moviePreview';
import { GREY, PINK, WHITE } from '../../../common/constants/colors';

const MovieWrapper = styled.div`
    display: flex;
    color: ${ GREY };
    font-size: 14px;
`;

const ImgWrapper = styled.div`
    flex-direcrion: row;
`;

const DetailsWrapper = styled.div`
    flex-direcrion: row;
    width: 100%;
    padding: 10px 60px;
`;

const FilmTitleWrapper = styled.div`
    line-height: 30px;
    margin-bottom: 2px;
`;

const FilmTitle = styled.span`
    font-size: 30px;
    font-weight: 500;
    color: ${ PINK };
    margin-right: 60px;
`;

const Rating = styled.span`
    font-weight: 100;
    color: #90EE90;
    border: 1px solid #90EE90;
    border-radius: 50%;
    padding: 5px;
    position: relative;
    bottom: 4px;
`;

const Category = styled.div`
    font-size: 14px;
    margin-bottom: 15px;
`;

const Paragraph = styled.div`
    margin-bottom: 35px;
`;

const TimeframeWrapper = styled.div`
    color: ${ WHITE };
    margin-bottom: 35px;
`;

const Year = styled.span`
    margin-right: 25px;
`;

const Duration = styled.span`
`;

export class MovieDetails extends React.Component {
    render() {
        return (
            <MovieWrapper>
                <ImgWrapper>
                    <MovieImg src={ `${IMG_URL}${this.props.movie.poster}` }/>
                </ImgWrapper>
                <DetailsWrapper>
                    <FilmTitleWrapper>
                        <FilmTitle>{ this.props.movie.showTitle }</FilmTitle>
                        <Rating>{ this.props.movie.rating }</Rating>
                    </FilmTitleWrapper>
                    <Category>{ this.props.movie.category}</Category>
                    <TimeframeWrapper>
                        <Year>{ this.props.movie.releaseYear }</Year>
                        <Duration>{ this.props.movie.runtime }</Duration>
                    </TimeframeWrapper>
                    <Paragraph>
                        { this.props.movie.summary }
                    </Paragraph>
                    <Paragraph>Prodaction companies: { this.props.movie.companies }</Paragraph>
                    <Paragraph>Tagline: { this.props.movie.tagline }</Paragraph>
                </DetailsWrapper>
            </MovieWrapper>
        );
    } 
}
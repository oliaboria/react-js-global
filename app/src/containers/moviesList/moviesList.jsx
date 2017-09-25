import React from 'react';
import styled from 'styled-components';

import { NoFilmsFound } from './noFilmsFound/noFilmsFound';

export class MoviesList extends React.Component {
    render() {
        return (
            <NoFilmsFound />
        );
    } 
}
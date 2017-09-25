import React from 'react';
import styled from 'styled-components';

import backgroundImg from '../../../assets/img/background.jpg';
import { LIGHT_GREY, DARK_GREY } from '../../constants/colors';
import { SIDE_PADDING } from '../../constants/dimensions';

export const HeaderWrapper = styled.div`
    width: 100%;
`;

export const HeaderContainer = styled.header`
    min-height: 260px;
    background-image: url(${ backgroundImg });
    background-color: #606060;
    background-blend-mode: multiply;
    padding: 20px ${ SIDE_PADDING };
`;

export const LogoWrapper = styled.div`
    margin-bottom: 55px;
    position: relative;
`;

export const ToolbarWrapper = styled.div`
    height: 40px;
    line-height: 40px;
    font-weight: 400;
    color: ${ DARK_GREY };
    background-color: ${ LIGHT_GREY };
    padding: 0 ${ SIDE_PADDING };
`;
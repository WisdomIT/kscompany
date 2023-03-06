import styled from 'styled-components'
import { device } from '@/styles/global-style';

export const MobileBr = styled.br`
    @media ${device.tablet} {
        display: none;
    }
`

export const DesktopBr = styled.br`
    display: none;

    @media ${device.desktop} {
        display: inline;
    }
`
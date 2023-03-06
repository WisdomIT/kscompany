import styled from 'styled-components'
import { size, device } from '@/styles/global-style';
import { Scrollbars } from 'react-custom-scrollbars';

const BackDiv = styled(Scrollbars)`
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    overflow-x: hidden !important;
    overflow-y: auto;
    text-align: center;

    @media ${device.mobile} {
        padding-top: 60px; 
    }

    @media ${device.tablet} {
        padding-top: 80px; 
    }
`

const ForeDiv = styled.div`

    display: inline-block;
    text-align: left;
    height: 100%;

    @media ${device.mobile} {
        width: 100%;
        padding: 0px 30px;
    }

    @media ${device.tablet} {
        width: 750px;
    }

    @media ${device.desktop} {
        width: 1120px;
    }
`

const Foreground = (props) => {
    return <BackDiv {...props}>
        <ForeDiv>{props.children}</ForeDiv>
    </BackDiv>
}

export default Foreground
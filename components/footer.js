import styled from 'styled-components'
import { size, device } from '@/styles/global-style';

const Frame = styled.div`
    width: 100vw;
    background-color: var(--black50);
    color: #fff;
    font-weight: 200;
    
    @media ${device.mobile} {
        font-size: 12px;
        line-height: 18px;
        margin: 0px -30px;
        padding: 80px 30px;
    }

    @media ${device.tablet} {
        text-align: right;
        font-size: 14px;
        line-height: 28px;
        margin: 0px calc((100vw - 690px) / -2);
        padding: 120px;
    }

    @media ${device.desktop} {
        margin: 0px calc((100vw - 1060px) / -2);
        padding: 120px calc((100vw - 1060px) / 2);
    }
`

const Footer = (props) => {
    return <Frame>
        케이에스컴퍼니 대표 송희조<br/>
        031-935-6199 | contact@ks-company.kr<br/>
        License Number: 633-27-01223<br/>
        1054 304, Mokdong-dong, Paju-si, Gyeonggi-do, Republic of Korea<br/><br/>
        ⓒ KSCOMPANY All Rights Reserved.
    </Frame>
}

export default Footer
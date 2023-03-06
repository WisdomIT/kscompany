import styled from 'styled-components'
import { device } from '@/styles/global-style';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Icon = styled.img`

    @media ${device.mobile} {
        margin-right: 2px;
        height: 12px;
    }

    @media ${device.tablet} {
        margin-right: 8px;
        height: 24px;
    }
`

const Div = styled.div`

    display: inline-block;
    color: var(--white);
    background-color: var(--white10);
    font-weight: 600;
    width: fit-content;
    transition: all .5s;
    
    @media ${device.mobile} {
        padding: 10px 15px;
        font-size: 12px;
        line-height: 12px;
        border-radius: 8px;
    }

    @media ${device.tablet} {
        padding: 20px 30px;
        font-size: 24px;
        line-height: 24px;
        border-radius: 15px;
    }
`

const SectionName = (props) => {
    
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 1 })

return <Div ref={ref} style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0
        }}>
    <Icon src={`/images/emoji/${props.icon}.png`} />{props.name}
</Div>
}

export default SectionName
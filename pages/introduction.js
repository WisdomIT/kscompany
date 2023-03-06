import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import MotionMain from "@/components/motionmain";
import Background from '@/components/background';
import Foreground from '@/components/foreground';
import SectionName from '@/components/sectionname';
import { useInView } from 'framer-motion';
import { device } from '@/styles/global-style';
import { MobileBr, DesktopBr } from '@/components/br';

const BackgroundColor = styled.div`
    width: 100%;
    height: 100%;
    background: var(--linear-blue);
`

export default function Home() {
  return (
    <>
      <Head>
        <title>KSCOMPANY - INTRODUCTION</title>
        <meta name="description" content="촘촘한 기획을 바탕으로 신뢰를 얻는 기업, 차별화된 가치를 만드는 확실한 대안, KS는 그 본질에 집중합니다" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0" />
        <link rel="stylesheet" href="/font/pretendard/pretendard-subset.css" />
      </Head>
      <MotionMain key="brand">
        <Background>
            <BackgroundColor />
        </Background>
        <Foreground>
            <Main />
            <Jobs />
            <Partners />
        </Foreground>
      </MotionMain>
    </>
  )
}

const MainSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100%;

    @media ${device.mobile} {
        padding: 50px 0px;
    }

    @media ${device.tablet} {
        padding: 100px 0px;
    }
`

const MainTitle = styled.p`

    color: var(--white);
    font-weight: 200;
    margin: 0px;
    word-break: keep-all;
    transition: all .5s;
    
    @media ${device.mobile} {
        margin-top: 25px;
        margin-bottom: 60px;
        font-size: 30px;
        line-height: 40px;
    }

    @media ${device.tablet} {
        margin-top: 60px;
        margin-bottom: 100px;
        font-size: 60px;
        line-height: 76px;
    }
`

const TitleWithIcon = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;

    @media ${device.mobile} {
        gap: 8px;
    }

    @media ${device.tablet} {
        gap: 16px;
    }
`

const TitleWithIconIcon = styled.img`
    transition: all .5s;
    
    @media ${device.mobile} {
        width: 20px;
        height: 20px;
    }

    @media ${device.tablet} {
        width: 48px;
        height: 48px;
    }

`

const TitleWithIconDiv = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;

   @media ${device.mobile} {
        gap: 20px;
    }

    @media ${device.tablet} {
        gap: 40px;
    }
`

const TitleWithIconTitle = styled.p`
   
   color: var(--white);
   font-weight: 300;
   margin: 0px;
   word-break: keep-all;
   transition: all .5s;

   @media ${device.mobile} {
        font-size: 20px;
        line-height: 24px;
    }

    @media ${device.tablet} {
        font-size: 40px;
        line-height: 48px;
    }
`

const TitleWithIconText = styled.p`

    color: var(--white);
    font-weight: 300;
    margin: 0px;
    word-break: keep-all;
    transition: all .5s;

    @media ${device.mobile} {
        font-size: 14px;
        line-height: 24px;
    }

    @media ${device.tablet} {
        font-size: 18px;
        line-height: 27px;
    }
`

const Main = (props) => {

    const [animation, setAnimation] = useState(0)

    useEffect(() => {
        setTimeout(() => setAnimation(1), 100)
        setTimeout(() => setAnimation(2), 300)
        setTimeout(() => setAnimation(3), 500)
    }, [])

    return <MainSection>
        <SectionName icon="open_book" name="STORY" />
        <MainTitle style={{
            transform: animation >= 1 ? "none" : "translateY(50px)",
            opacity: animation >= 1 ? 1 : 0
        }}>안녕하세요!<br/><b>소비자 욕구를 설계하는 마케팅 에이전시<br/><span style={{color:'var(--yellow)'}}>KSCOMPANY</span></b> 입니다</MainTitle>
        <TitleWithIcon>
            <TitleWithIconIcon src="/images/emoji/clapping_hands.png" style={{
            transform: animation >= 2 ? "none" : "translateY(50px)",
            opacity: animation >= 2 ? 1 : 0
        }}/>
            <TitleWithIconDiv>
                <TitleWithIconTitle style={{
            transform: animation >= 2 ? "none" : "translateY(50px)",
            opacity: animation >= 2 ? 1 : 0
        }}>사람을 모으는 광고보다 먼저 생각해야 하는 것은 <DesktopBr/><b style={{color:'var(--yellow)'}}>‘어떻게 설득할 것인가’</b> 입니다</TitleWithIconTitle>
                <TitleWithIconText style={{
            transform: animation >= 3 ? "none" : "translateY(50px)",
            opacity: animation >= 3 ? 1 : 0
        }}>KSCOMPANY는 단순 광고와 상위노출에 그치지 않고 <DesktopBr/><b>고객 설득 전략</b>을 촘촘히 세워 <b>마케팅 뼈대를 구축</b>하고 <b>전략 기획</b>에 맞춰 똑똑하게 실행하는 <b>독보적인 브랜드 빌더</b> 입니다</TitleWithIconText>
            </TitleWithIconDiv>
        </TitleWithIcon>
    </MainSection>

}

const JobsSection = styled.section`
    padding: 50px 0px;
`

const Jobs = (props) => {
    
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 1 })

    return <JobsSection>
        <TitleWithIcon>
            <TitleWithIconIcon src="/images/emoji/loudspeaker.png" ref={ref} style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0
        }}/>
            <TitleWithIconDiv>
                <TitleWithIconTitle ref={ref} style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0
        }}>KS는 각 분야 전문가로 구성된 <DesktopBr/><b style={{color:'var(--yellow)'}}>디지털 마케팅 에이전시</b> 입니다</TitleWithIconTitle>
                <TitleWithIconText ref={ref} style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0
        }}>우리가 생각하는 성공의 열쇠는 단순히 광고를 집행하는 것이 아닌, <DesktopBr/><b>‘고객을 언제 어디서 어떻게 설득할 것인가’</b>에 초점을 둔 기획이 선행되고 고객을 모으는 전략을 실행하는 것에 있다고 생각합니다. <DesktopBr/>함께 고민하고 성장할 ‘파트너’를 언제나 기다리고 있습니다.</TitleWithIconText>
            </TitleWithIconDiv>
        </TitleWithIcon>
        <JobsListGrid>
            <JobsList title="Director" icon="bullseye" list={['상품 전략 기획','상품 발굴','시장 조사','마케팅 축 설계','상세페이지 기획','브랜딩 기획']} />
            <JobsList title="Data Engineer" icon="computer_disk" list={['데이터 구축','데이터 생성 및 관리','데이터 시각화','비즈니스 시스템 최적화']} />
            <JobsList title="Web Designer" icon="mobile_phone" list={['사이트 디자인 및 웹 구축','상세페이지 제작']} />
            <JobsList title="Contents Designer" icon="paintbrush" list={['SNS 컨텐츠 디자인 및 마케팅 컨텐츠 디자인']} />
            <JobsList title="Marketer" icon="bar_chart" list={['SNS 컨텐츠 기획 및 실행','SNS 채널 운영','광고 효율 관리','성과 분석']} />
            <JobsList title="Video Director" icon="movie_camera" list={['영상 컨텐츠 촬영 및 편집']} />
        </JobsListGrid>
    </JobsSection>
}

const JobsListGrid = styled.div`
    display: grid;

    @media ${device.mobile} {
        margin-top: 60px;
        grid-template-columns: repeat(1, 1fr);
        gap: 10px;
    }

    @media ${device.tablet} {
        margin-top: 80px;
        gap: 34px;
    }

    @media ${device.desktop} {
        grid-template-columns: repeat(2, 1fr);
    }
`

const JobsListDiv = styled.div`

    background-color: var(--white10);
    border: 1px solid var(--white10);
    transition: all .5s;

    @media ${device.mobile} {
        padding: 20px;
        padding-bottom: 16px;
        border-radius: 10px;
    }

    @media ${device.tablet} {
        padding: 28px 32px;
        padding-bottom: 18px;
        border-radius: 20px;
    }

    &:hover {
        transform: scale(1.05) !important;
        background-color: var(--white20);
    }

    &:hover p {
        background-color: var(--white20);
    }
`

const JobsListTitle = styled.h1`
    margin: 0px;
    color: var(--yellow);
    font-weight: 600;

    @media ${device.mobile} {
        font-size: 16px;
        line-height: 16px;
        margin-bottom: 14px;
    }

    @media ${device.tablet} {
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 28px;
    }
`

const JobsListIcon = styled.img`
    vertical-align: top;

    @media ${device.mobile} {
        width: 16px;
        height: 16px;
        margin-right: 4px;
    }

    @media ${device.tablet} {
        width: 24px;
        height: 24px;
        margin-right: 8px;
    }
`

const JobsListLi = styled.p`
    display: inline-block;
    color: var(--white);
    background-color: var(--white10);
    margin: 0px;
    transition: all .5s;

    @media ${device.mobile} {
        font-size: 10px;
        line-height: 10px;
        padding: 6px 16px;
        margin-right: 4px;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media ${device.tablet} {
        font-size: 14px;
        line-height: 14px;
        padding: 12px 20px;
        margin-right: 10px;
        margin-bottom: 10px;
        border-radius: 10px;
    }
`

const JobsList = (props) => {
    
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 1 })

    return <JobsListDiv ref={ref} style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0
        }}>
        <JobsListTitle><JobsListIcon src={`/images/emoji/${props.icon}.png`} />{props.title}</JobsListTitle>
        {props.list.map(e => <JobsListLi>{e}</JobsListLi>)}
    </JobsListDiv>
}

const PartnersSection = styled.section`
    padding: 50px 0px;
`

const PartnersCenter = styled.div`
    text-align: center;

    @media ${device.mobile} {
        padding: 24px 0px;
    }

    @media ${device.tablet} {
        padding: 64px 0px;
    }
`

const Partners = (props) => {
    return <PartnersSection>
        <SectionName icon="handshake" name="PARTNERS" />
        <PartnersCenter>
            <PartnersLogo brand="aliexpress" />
            <PartnersLogo brand="hanil" />
            <PartnersLogo brand="clapa" />
            <PartnersLogo brand="guerilla" />
            <PartnersLogo brand="bodyprime" />
            <PartnersLogo brand="methin" />
            <PartnersLogo brand="brand" />
            <PartnersLogo brand="yujin" />
            <PartnersLogo brand="wr" />
            <PartnersLogo brand="ddakg" />
        </PartnersCenter>
    </PartnersSection>
}

const PartnersLogoDiv = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    transition: all .5s;

    @media ${device.mobile} {
        width: 150px;
        height: 75px;
        margin: 8px;
        padding: 25px;
        border-radius: 10px;
    }

    @media ${device.tablet} {
        width: 300px;
        height: 150px;
        margin: 20px;
        padding: 50px;
        border-radius: 25px;
    }

    &:hover {
        transform: translateY(-10px) !important;
    }
`

const PartnersLogoImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const PartnersLogo = (props) => {
    
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 1 })

    return <PartnersLogoDiv ref={ref} style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0
        }}>
        <PartnersLogoImg src={`/images/partners/${props.brand}.png`} />
    </PartnersLogoDiv>
}
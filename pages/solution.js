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
import { useDraggable } from "react-use-draggable-scroll";
import Footer from '@/components/footer';

const BackgroundColor = styled.div`
    width: 100%;
    height: 100%;
    background: var(--linear-black2);
`

export default function Solution() {
    
  return (
    <>
      <Head>
        <title>KSCOMPANY - SOLUTION</title>
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
            <Consulting />
            <Execution />
            <Brand />
            <Footer />
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
        margin-bottom: 60px;
        font-size: 60px;
        line-height: 76px;
    }
`

const MainIconGrid = styled.div`
  display: grid;

  @media ${device.mobile} {
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  @media ${device.tablet} {
    gap: 30px;
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
  }
`

const Main = (props) => {

  const [animation, setAnimation] = useState(0)

  useEffect(() => {
      setTimeout(() => setAnimation(1), 100)
      setTimeout(() => setAnimation(2), 300)
      setTimeout(() => setAnimation(3), 400)
      setTimeout(() => setAnimation(4), 500)
      setTimeout(() => setAnimation(5), 600)
      setTimeout(() => setAnimation(6), 700)
      setTimeout(() => setAnimation(7), 800)
  }, [])

  return <MainSection>
        <SectionName icon="light_bulb" name="SOLUTION" />
        <MainTitle style={{
            transform: animation >= 1 ? "none" : "translateY(50px)",
            opacity: animation >= 1 ? 1 : 0
        }}>기획력과 실행력을 모두 갖춘<br/><b style={{color:'var(--yellow)'}}>KS</b>의 <b>Brand Rebuilding Solutions</b></MainTitle>
        <MainIconGrid>
          <MainIcon icon="test_tube" eng="ANALYSIS" kor="카테고리 분석" animate={animation >= 2}/>
          <MainIcon icon="warning" eng="PROBLEM" kor="문제 발견" animate={animation >= 3}/>
          <MainIcon icon="magnifying_glass" eng="RESEARCH" kor="시장조사" animate={animation >= 4}/>
          <MainIcon icon="card_file_box" eng="PLANNING" kor="전략 기획" animate={animation >= 5}/>
          <MainIcon icon="loudspeaker" eng="CONTENT" kor="마케팅 실행" animate={animation >= 6}/>
          <MainIcon icon="thumbs_up" eng="SOLUTION" kor="문제 해결" animate={animation >= 7}/>
        </MainIconGrid>
    </MainSection>
}

const MainIconDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white10);
  border: 1px solid var(--white10);
  transition: all .5s;

  @media ${device.mobile} {
      padding: 20px 0px;
      border-radius: 20px;
  }

  @media ${device.tablet} {
      padding: 40px 0px;
      border-radius: 40px;
  }

  &:hover {
    background-color: var(--white20);
  }
`

const MainIconIcon = styled.img`

  object-fit: contain;

  @media ${device.mobile} {
      width: 48px;
      height: 48px;
      margin-bottom: 8px;
  }

  @media ${device.tablet} {
      width: 80px;
      height: 80px;
      margin-bottom: 24px;
  }
`

const MainIconEng = styled.p`
  font-weight: 600;
  margin: 0px;
  color: var(--yellow);

  @media ${device.mobile} {
      font-size: 8px;
      line-height: 8px;
      margin-bottom: 4px;
  }

  @media ${device.tablet} {
      font-size: 12px;
      line-height: 12px;
      margin-bottom: 8px;
  }
`

const MainIconKor = styled.p`
  font-weight: 600;
  margin: 0px;
  color: var(--white);

  @media ${device.mobile} {
      font-size: 12px;
      line-height: 12px;
  }

  @media ${device.tablet} {
      font-size: 18px;
      line-height: 18px;
  }
`

const MainIcon = (props) => {

  const animate = props.animate

  return <MainIconDiv style={{
    transform: animate ? "none" : "translateY(50px)",
    opacity: animate ? 1 : 0
}}>
    <MainIconIcon src={`/images/emoji/${props.icon}.png`} />
    <MainIconEng>{props.eng}</MainIconEng>
    <MainIconKor>{props.kor}</MainIconKor>
  </MainIconDiv>
}

const ConsultingSection = styled.section`
    padding: 50px 0px;
`

const SectionBackground = styled.div`
  width: 100%;
  position: relative;
  background: radial-gradient(50% 50% at 50% 50%, #333333 0%, rgba(51, 51, 51, 0) 100%);

  @media ${device.mobile} {
    margin-top: 20px;
    height: 200px;
  }

  @media ${device.tablet} {
    margin-top: 60px;
    height: 500px;
  }

  @media ${device.desktop} {
    height: 700px;
  }
`

const ConsultingText1 = styled.p`
  position: absolute;
  font-weight: 300;
  margin: 0px;
  width: 100%;
  text-align: center;
  color: var(--white);
  transition: all .5s;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 16px;
    top: 60%;
  }

  @media ${device.tablet} {
    top: 50%;
    font-size: 20px;
    line-height: 30px;
  }

`

const ConsultingText2 = styled.p`
  position: absolute;
  font-weight: 300;
  margin: 0px;
  width: 100%;
  text-align: center;
  color: var(--white);
  transition: all .5s;
  word-break: keep-all;

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 25px;
    top: 90%;
  }

  @media ${device.tablet} {
    top: 65%;
    font-size: 36px;
    line-height: 54px;
  }
`

const Consulting = (props) => {
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 1 })

  const dragref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(dragref);

  return <ConsultingSection>
    <SectionName icon="stethoscope" name="MARKETING CONSULTING" />
    <SectionBackground>
      <ConsultingIcons icon="grinning_face" big left="0" top="40" />
      <ConsultingIcons icon="love_letter" left="22" top="40" />
      <ConsultingIcons icon="coin" left="40" top="30" />
      <ConsultingIcons icon="pill" left="-22" top="40" />
      <ConsultingIcons icon="magnifying_glass" left="-40" top="30" />
      <ConsultingIcons icon="sparkles" left="12" top="20" />
      <ConsultingIcons icon="floppy_disk" left="30" top="10" />
      <ConsultingIcons icon="gem_stone" left="48" top="0" />
      <ConsultingIcons icon="money_with_wings" left="-12" top="20" />
      <ConsultingIcons icon="sports_medal" left="-30" top="10" />
      <ConsultingIcons icon="face_blowing_a_kiss" left="-48" top="0" />
      <ConsultingText1 ref={ref} style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0
        }}>마케팅 전략 수립과 퍼포먼스를 모두 갖춘<br/>종합적인 브랜드 솔루션을 제공합니다.</ConsultingText1>
      <ConsultingText2 style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0
        }}>단순 광고대행이 아닌, <MobileBr /><b>현 상황의 문제점을 명확히 파악</b>하고<br />
        <b style={{color: 'var(--yellow)'}}>고객 설득 전략을 구축</b>하여 <MobileBr /><b>‘통합 마케팅 솔루션’</b>을 제시합니다.</ConsultingText2>
    </SectionBackground>
    <ConsultingListScroll ref={dragref} {...events}>
      <ConsultingList icon="magnifying_glass" title="시장조사" body="마케팅 전략 수립을 목표로 브랜드의 포지셔닝, 가격, 타겟, 프레임, 핵심가치, 카테고리 내 시장 분석 등 브랜드의 현 상황을 정밀 진단합니다." />
      <ConsultingList icon="bullseye" title="실제 타겟 구축" body="시장조사를 통해 분석된 데이터를 토대로 가장 이상적인 타겟을 설정합니다." />
      <ConsultingList icon="crystal_ball" title="마케팅 축 구축" body="소비자 욕구에 맞춘 대안을 설계하고, 어떻게 접근할 것인가에 대해 KS만의 메뉴얼로 재구축합니다." />
      <ConsultingList icon="magic_wand" title="메리트 리뉴얼" body="데이터를 통해 구축된 새로운 타겟에 맞춰 실제 제품의 기능 및 가치를 리뉴얼 하고 재구성합니다." />
      <ConsultingList icon="paintbrush" title="시장조사" body="솔루션에 맞춰 디자인을 리뉴얼합니다." />
    </ConsultingListScroll>
  </ConsultingSection>
}

const ConsultingIconsImg = styled.img`
  position: absolute;
  object-fit: contain;
  transition: all .5s;
  
  @media ${device.mobile} {
    width: ${props => props.big ? '36px' : '18px'};
    height: ${props => props.big ? '36px' : '18px'};
    left: ${props => props.big ? `calc(50% - 18px - ${props.left}%)` : `calc(50% - 7px - ${props.left}%)`};
    top: ${props => props.big ? `calc(50% - 18px - ${props.top}%)` : `calc(50% - 7px - ${props.top}%)`};
  }

  @media ${device.tablet} {
    width: ${props => props.big ? '140px' : '48px'};
    height: ${props => props.big ? '140px' : '48px'};
    left: ${props => props.big ? `calc(50% - 80px - ${props.left}%)` : `calc(50% - 32px - ${props.left}%)`};
    top: ${props => props.big ? `calc(50% - 80px - ${props.top}%)` : `calc(50% - 32px - ${props.top}%)`};
  }
`

const ConsultingIcons = (props) => {
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 1 })

  return <ConsultingIconsImg
    ref={ref}
    style={{
      opacity: isInView ? 1 : 0,
      transform: isInView ? 'none' : `translate(${props.left * 2}px,${props.top * 2}px)`
    }}
    src={`/images/emoji/${props.icon}.png`} {...props} />
}

const ConsultingListScroll = styled.div`
  height: auto;
  overflow-x: auto;
  white-space: nowrap;
  text-align: center;
  
  @media ${device.mobile} {
    margin: 0px -30px;
    margin-top: 120px;
    padding-left: 30px;
  }

  @media ${device.tablet} {
    margin: 0px calc((100vw - 690px) / -2);
    margin-top: 100px;
    margin-bottom: 60px;
  }

  @media ${device.desktop} {
    margin: 0px calc((100vw - 1060px) / -2);
    margin-top: -40px;
    margin-bottom: 60px;
  }
`

const ConsultingListDiv = styled.div`
  display: inline-block;
  background-color: var(--white10);
  border: var(--white10);
  text-align: center;
  flex-shrink: 0;
  white-space: break-spaces;
  vertical-align: middle;
  transition: all .2s;
  cursor: grab;

  @media ${device.mobile} {
    width: 220px;
    padding: 30px 0px;
    border-radius: 30px;
    margin-right: 16px;
  }

  @media ${device.tablet} {
    width: 352px;
    height: 100%;
    padding: 60px 0px;
    border-radius: 50px;
    margin-right: 32px;
  }

  &:hover {
    background-color: var(--white20);
  }
`

const ConsultingListIcon = styled.img`
  object-fit: contain;
  
  @media ${device.mobile} {
    width: 64px;
    height: 64px;
    margin-bottom: 32px;
  }

  @media ${device.tablet} {
    width: 128px;
    height: 128px;
    margin-bottom: 48px;
  }
`

const ConsultingListTitle = styled.h1`
  font-weight: 600;
  color: var(--white);

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 16px;
  }

  @media ${device.tablet} {
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 32px;
  }
`

const ConsultingListBody = styled.p`
  color: var(--white);
  word-break: keep-all;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 18px;
    padding: 0px 20px;
    height: 72px;
  }

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 24px;
    padding: 0px 40px;
    height: 96px;
  }
`

const ConsultingList = (props) => {
  return <ConsultingListDiv>
    <ConsultingListIcon src={`/images/emoji/${props.icon}.png`} />
    <ConsultingListTitle>{props.title}</ConsultingListTitle>
    <ConsultingListBody>{props.body}</ConsultingListBody>
  </ConsultingListDiv>
}


const ExecutionSection = styled.section`
  padding: 50px 0px;
`

const ExecutionText = styled.p`
  margin: 0px;
  color: var(--white);
  word-break: keep-all;
  transition: all .5s;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 16px;
    margin: 20px;
  }

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 18px;
    margin: 0px;
    margin-top: 28px;
    margin-bottom: 60px;
  }
`

const Execution = (props) => {
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 1 })

  return <ExecutionSection>
    <SectionName icon="loudspeaker" name="MARKETING EXECUTION" />
    <ExecutionText ref={ref} style={{
    transform: isInView ? "none" : "translateY(50px)",
    opacity: isInView ? 1 : 0
}}>솔루션을 통해 실행방안을 구축한 뒤, 온라인 매출을 움직이는 모든 미션을 수행합니다.</ExecutionText>
    <ExecutionGrid>
      <ExecutionList icon="globe" title="Viral Marketing" body="블로그 / 카페 / SNS / 인플루언서 등 확산성이 강한 매체를 이용하여 고객 설득을 목표로 하는 마케팅 서비스" />
      <ExecutionList icon="raised_fist" title="Performance Marketing" body="구글 / 카카오 / 네이버 / 페이스북 / 인스타그램 등의 매체를 이용하여 목적과 단계에 맞춰 데이터 기반으로 진행하는 마케팅 서비스" />
      <ExecutionList icon="movie_camera" title="Content Creation" body="KS만의 데이터 분석 방법을 통해 유튜브 크리에이터, 인스타그램 인플루언서 성과를 예측 및 분석하고 이를 활용하여 광고를 집행, 브랜드 신뢰도를 높이고 더 많은 트래픽을 유도하는 마케팅 서비스" />
      <ExecutionList icon="bar_chart" title="Data Analysis" body="현재 집행되었던 광고, 쌓여 있던 데이터를 면밀히 분석하여 더 높은 성과 도출을 목표로 하는 데이터 분석 서비스" />
    </ExecutionGrid>
  </ExecutionSection>
}

const ExecutionGrid = styled.div`

  display: grid;

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
    gap: 18px;
  }

  @media ${device.tablet} {
    gap: 32px;
    margin-bottom: 60px;
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ExecutilnListDiv = styled.div`
  background-color: var(--white10);
  border: 1px solid var(--white10);
  display: flex;
  flex-direction: column;
  transition: all .5s;

  @media ${device.mobile} {
    padding: 20px;
    border-radius: 10px;
  }

  @media ${device.tablet} {
    padding: 38px;
    border-radius: 30px;
  }

  &:hover {
    transform: scale(1.05) !important;
    background-color: var(--white20);
  }
`

const ExecutionListIcon = styled.img`
  object-fit: contain;

  @media ${device.mobile} {
    width: 28px;
    height: 28px;
    margin-bottom: 8px;
  }

  @media ${device.tablet} {
    width: 48px;
    height: 48px;
    margin-bottom: 10px;
  }
`

const ExecutionListTitle = styled.h1`

  font-weight: 600;
  color: var(--yellow);
  margin: 0px;

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 8px;
  }

  @media ${device.tablet} {
    font-size: 28px;
    line-height: 28px;
    margin-bottom: 32px;
  }

`

const ExecutionListBody = styled.p`

  font-weight: 200;
  color: var(--white);
  margin: 0px;
  word-break: keep-all;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 18px;
  }

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 24px;
  }

`

const ExecutionList = (props) => {
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 1 })

  return <ExecutilnListDiv ref={ref} style={{
    transform: isInView ? "none" : "translateY(50px)",
    opacity: isInView ? 1 : 0
}}>
    <ExecutionListIcon src={`/images/emoji/${props.icon}.png`} />
    <ExecutionListTitle>{props.title}</ExecutionListTitle>
    <ExecutionListBody>{props.body}</ExecutionListBody>
  </ExecutilnListDiv>
}

const BrandSection = styled.section`
  padding: 50px 0px;
`

const Brand = (props) => {
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 1 })

  const router = useRouter()

  return <BrandSection>
        <SectionName icon="office_building" name="자체 브랜드 운영" />
        <BrandFlex>
          <BrandText ref={ref} style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0
        }}>KS는 국내외 에이전시 업무를 수행하는 동시에,<br/>제품을 기획하고 발굴하여 세상에 알리고 고객과 연결하며 브랜드를 만듭니다.</BrandText>
          <BrandBtn style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0
          }}
          onClick={() => router.push('/brand')}
          >브랜드 바로가기</BrandBtn>
        </BrandFlex>
  </BrandSection>
}

const BrandFlex = styled.div`
  display: flex;
  margin-bottom: 60px;

  @media ${device.mobile} {
    gap: 8px;
    flex-direction: column;
  }

  @media ${device.tablet} {
    gap: 40px;
    flex-direction: row;
    align-items: flex-start;
  }
`

const BrandText = styled.p`
  flex: 1;
  color: var(--white);
  word-break: keep-all;
  transition: all .2s;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 16px;
  }

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 27px;
  }
`

const BrandBtn = styled.a`
  
  color: var(--yellow);
  font-weight: 800;
  border: 2px solid var(--yellow);
  text-align: center;
  border-radius: 30px;
  cursor: pointer;
  transition: all .2s;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 12px;
    padding: 16px 0px;
    width: 140px;
    align-self: flex-end;
  }

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 16px;
    padding: 20px 0px;
    width: 200px;
    align-self: flex-start;
  }

  &:hover {
    background-color: var(--yellow);
    color: var(--black);
  }
`
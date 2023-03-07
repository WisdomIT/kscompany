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

const Consulting = (props) => {
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 1 })

  return <ConsultingSection>
    <SectionName icon="stethoscope" name="MARKETING CONSULTING" />
    <SectionBackground>

    </SectionBackground>
  </ConsultingSection>
}

const ConsultingIcons = styled.img`
  position: absolute;
  
`
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
import Footer from '@/components/footer';
import { MobileBr, DesktopBr } from '@/components/br';

const BackgroundColor = styled.div`
    width: 100%;
    height: 100%;
    background: var(--linear-blue);
`

export default function Joinus() {
  return (
    <>
      <Head>
        <title>KSCOMPANY - JOIN US</title>
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
          <Speciallist />
          <Contact />
          <Footer />
        </Foreground>
      </MotionMain>
    </>
  )
}

const MainSection = styled.section`

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

const Main = (props) => {

  const [animation, setAnimation] = useState(0)

  useEffect(() => {
    setTimeout(() => setAnimation(1), 100)
  },[])

  return <MainSection>
    <MainTitle style={{
        transform: animation >= 1 ? "none" : "translateY(50px)",
        opacity: animation >= 1 ? 1 : 0
    }}><b>우리는 항상 기다리고 있습니다.</b><br/>
    <b style={{color:'var(--yellow)'}}>KS</b>의 가치에 공감하고 <DesktopBr />함께 성장하길 원하는 분이라면 <DesktopBr /><b>지금 바로 <span style={{color:'var(--yellow)'}}>KS</span>와 함께하세요!</b></MainTitle>
  </MainSection>
}

const Speciallist = (props) => {
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 1 })

  return <SpeciallistSection>
    <SpeciallistTitle ref={ref} style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0
        }}>각 분야의 스페셜리스트가 될 수 있는 <br /><b><span style={{color:'var(--yellow)'}}>KS</span>의 4가지 핵심가치</b></SpeciallistTitle>
    <SpeciallistList icon="trophy" title="성장에 대한 기대">부족한 것이 채워지는 결핍 동기와 달리<br />끊임 없이 자신을 성장시키려는 마음</SpeciallistList>
    <SpeciallistList icon="right_facing_fist" title="끊임 없이 반복하는 미친 실행력">틀리는 것에 두려워 하지 않고<br />끊임 없이 도전하는 미친 실행력</SpeciallistList>
    <SpeciallistList icon="ear" title="적극적 경청">개인의 선입견이나 판단, 분석, 진단을 내려 놓고<br />다른 사람의 이야기를 적극적으로 듣는 태도와 능력</SpeciallistList>
    <SpeciallistList icon="light_bulb" title="문제해결능력">익숙하지 않은 문제에 당황하지 않고<br />다양한 경험,지식, 정보를 바탕으로 효율적으로 해결하려는 마음가짐</SpeciallistList>
  </SpeciallistSection>
}

const SpeciallistSection = styled.section`
  padding: 50px 0px;
`

const SpeciallistTitle = styled.h1`
  margin: 0px;
  font-weight: 300;
  color: var(--white);
  word-break: keep-all;
  transition: all .5s;
  
  @media ${device.mobile} {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 40px;
  }

  @media ${device.tablet} {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 60px;
  }
`

const SpeciallistList = (props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 1 })

  return <SpeciallistListDiv ref={ref} style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0
        }}>
    <SpeciallistListTitle>
      <SpeciallistListIcon src={`/images/emoji/${props.icon}.png`} />
      {props.title}
    </SpeciallistListTitle>
    <SpeciallistListBody>{props.children}</SpeciallistListBody>
  </SpeciallistListDiv>
}

const SpeciallistListDiv = styled.div`
  display: flex;
  background-color: var(--white10);
  border: 1px solid var(--white10);
  border-radius: 20px;
  transition: all .5s;

  @media ${device.mobile} {
    flex-direction: column;
    padding: 20px;
    gap: 24px;
    margin-bottom: 20px;
  }

  @media ${device.tablet} {
    flex-direction: row;
    padding: 30px;
    align-items: center;
    margin: -20px -50px;
    margin-bottom: 40px;
  }

  @media ${device.desktop} {
    padding: 45px 90px;
    margin: 0px;
    margin-bottom: 32px;
  }

  &:hover {
    transform: scale(1.05) !important;
    background-color: var(--white20);
  }
`

const SpeciallistListIcon = styled.img`

vertical-align: middle;

  @media ${device.mobile} {
    width: 20px;
    height: 20px;
    margin-right: 4px;
  }

  @media ${device.tablet} {
    width: 64px;
    height: 64px;
    margin-right: 16px;
  }
  
  @media ${device.desktop} {
    margin-right: 32px;
  }
`

const SpeciallistListTitle = styled.h1`
  font-weight: 600;
  color: var(--white);
  vertical-align: middle;
  margin: 0px;

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 20px;
  }

  @media ${device.tablet} {
    font-size: 28px;
    line-height: 28px;
  }

  @media ${device.desktop} {
    font-size: 36px;
    line-height: 36px;
  }

`

const SpeciallistListBody = styled.p`
  text-align: right;
  color: var(--white);
  margin: 0px;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 20px;
  }

  @media ${device.tablet} {
    flex: 1;
    font-size: 14px;
    line-height: 21px;
  }

  @media ${device.desktop} {
    font-size: 18px;
    line-height: 27px;
  }
`

const ContactSection = styled.section`
  
  padding-top: 50px;
  padding-bottom: 0px;
  
`

const Contact = (props) => {
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 1 })

  return <ContactSection>
    <SectionName icon="mobile_phone" name="CONTACT US" />
    <ContactTitle ref={ref} style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0
        }}><b>프로젝트에 대한 문의나 의뢰</b>가 있나요?<br/><b style={{color:'var(--yellow)'}}>KS</b>에게 기본 정보를 알려주세요.</ContactTitle>
    <ContactForm />
  </ContactSection>
}


const ContactTitle = styled.h1`
  margin: 0px;
  font-weight: 300;
  color: var(--white);
  word-break: keep-all;
  transition: all .5s;
  
  @media ${device.mobile} {
    font-size: 20px;
    line-height: 24px;
    margin-top: 20px;
    margin-bottom: 28px;
  }

  @media ${device.tablet} {
    font-size: 40px;
    line-height: 48px;
    margin-top: 32px;
    margin-bottom: 48px;
  }
`

const ContactForm = (props) => {

  const [data, setData] = useState({
    solution: null,
    budget: 'TBD',
    schedule: 'TBD',
    body: ''
  })

  const solution = {
    'brand': '통합 브랜드 컨설팅',
    'branddesign': '브랜드 디자인 컨설팅',
    'web': '웹 개발',
    'ui': 'UI 디자인',
    'official': '오피셜 채널 운영',
    'viral': '바이럴 마케팅',
    'performance': '퍼포먼스 마케팅',
    'data': '비즈니스 데이터 구축'
  }

  const budget = {
    '50mil': '5000만원 미만',
    '100mil': '5천만원 ~ 1억',
    '300mil': '1억 ~ 3억',
    '500mil': '3억 ~ 5억',
    '700mil': '5억 ~ 7억',
    'TBD': '미정'
  }

  const schedule = {
    '1mon': '1개월',
    '3mon': '3개월',
    '6mon': '6개월',
    'TBD': '미정'
  }

  const setSolution = (solution) => {
    const tempData = {
      ...data,
      solution: solution
    }

    setData(tempData)
  }

  const setBudget = (budget) => {
    const tempData = {
      ...data,
      budget: budget
    }

    setData(tempData)
  }

  const setSchedule = (schedule) => {
    const tempData = {
      ...data,
      schedule: schedule
    }

    setData(tempData)
  }

  const BodyMaxLength = 1000

  const setBody = (body) => {

    if(body.length > BodyMaxLength) return false

    const tempData = {
      ...data,
      body: body
    }

    setData(tempData)
  }

  const router = useRouter()
  
  const onSubmit = async () => {
    if(!confirm('정말로 발송하시겠습니까?')) return false

    if(data.solution === null) {
      alert('의뢰를 원하시는 서비스를 반드시 선택하셔야 합니다.')
      return false
    }

    const request = await fetch('/api/contact',{
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        solution: solution[data.solution],
        budget: budget[data.budget],
        schedule: schedule[data.schedule],
        body: data.body
      }),
    })

    const status = await request.status

    if(status === 200) {
      alert('발송되었습니다!')
      router.reload()
    } else {
      alert('문제가 발생했습니다. 잠시 후 다시 시도해주세요.')
    }
    
  }


  return <ContactFormDiv>
    <ContactFormTitle>어떤 서비스를 원하시나요? <ContactFormTitleLittle>*필수 택1</ContactFormTitleLittle></ContactFormTitle>
    <ContactFormSubdiv>
      <ContactFormSubTitle>컨설팅 솔루션</ContactFormSubTitle>
      <ContactFormSubdiv2>
        <ContactFormRadio selected={data.solution === 'brand'} onClick={() => setSolution('brand')}>{solution.brand}</ContactFormRadio>
        <ContactFormRadio selected={data.solution === 'branddesign'} onClick={() => setSolution('branddesign')}>{solution.branddesign}</ContactFormRadio>
      </ContactFormSubdiv2>
    </ContactFormSubdiv>
    <ContactFormSubdiv>
      <ContactFormSubTitle>디지털 마케팅 솔루션</ContactFormSubTitle>
      <ContactFormSubdiv2>
        <ContactFormRadio selected={data.solution === 'web'} onClick={() => setSolution('web')}>{solution.web}</ContactFormRadio>
        <ContactFormRadio selected={data.solution === 'ui'} onClick={() => setSolution('ui')}>{solution.ui}</ContactFormRadio>
        <ContactFormRadio selected={data.solution === 'official'} onClick={() => setSolution('official')}>{solution.official}</ContactFormRadio>
        <ContactFormRadio selected={data.solution === 'viral'} onClick={() => setSolution('viral')}>{solution.viral}</ContactFormRadio>
        <ContactFormRadio selected={data.solution === 'performance'} onClick={() => setSolution('performance')}>{solution.performance}</ContactFormRadio>
        <ContactFormRadio selected={data.solution === 'data'} onClick={() => setSolution('data')}>{solution.data}</ContactFormRadio>
      </ContactFormSubdiv2>
    </ContactFormSubdiv>
    <ContactFormTitle style={{marginTop: 28}}>예산과 일정을 선택하세요</ContactFormTitle>
    <ContactFormSubdiv>
      <ContactFormSubTitle>예산</ContactFormSubTitle>
      <ContactFormSubdiv2>
        <ContactFormSelect list={budget} selected={data.budget} onSelect={setBudget} />
      </ContactFormSubdiv2>
    </ContactFormSubdiv>
    <ContactFormSubdiv>
      <ContactFormSubTitle>일정</ContactFormSubTitle>
      <ContactFormSubdiv2>
        <ContactFormSelect list={schedule} selected={data.schedule} onSelect={setSchedule} />
      </ContactFormSubdiv2>
    </ContactFormSubdiv>
    <ContactFormTitle style={{marginTop: 28}}>어떻게 도와드릴까요?</ContactFormTitle>
    <ContactFormBody placeholder='구체적으로 작성해주세요' value={data.body} onChange={(e) => setBody(e.target.value)} />
    <ContactFormBodyLength>{data.body.length} / {BodyMaxLength}자 MAX</ContactFormBodyLength>
    <ContactFormSubmit onClick={onSubmit}>프로젝트 의뢰</ContactFormSubmit>
  </ContactFormDiv>
}

const ContactFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--linear-black1);

  @media ${device.mobile} {
    border-radius: 30px 30px 0px 0px;
    padding: 60px 30px;
    margin: 0px -30px;
  }

  @media ${device.tablet} {
    border-radius: 80px 80px 0px 0px;
    padding: 80px;
    margin: 0px -80px;
  }
`

const ContactFormTitle = styled.h1`
  margin: 0px;
  color: var(--white);
  font-weight: 600;
  transition: all .5s;

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 24px;
  }

  @media ${device.tablet} {
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 32px;
  }
`

const ContactFormTitleLittle = styled.span`
  vertical-align: bottom;

  @media ${device.mobile} {
    font-size: 10px;
    line-height: 10px;
  }

  @media ${device.tablet} {
    font-size: 14px;
    line-height: 14px;
  }
`

const ContactFormSubdiv = styled.div`
  display: flex;

  @media ${device.mobile} {
    flex-direction: column;
    margin-bottom: 24px;
  }

  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
    margin-bottom: 12px;
  }
`

const ContactFormSubTitle = styled.p`
  color: var(--white);
  font-weight: 600;
  flex-shrink: 0;
  margin: 0px;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 12px;
  }

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 18px;
    width: 180px;
  }
`

const ContactFormSubdiv2 = styled.div`
    vertical-align: middle;
`

const ContactFormRadio = styled.a`

  transition: all .2s;
  display: inline-block;
  color: ${ props => props.selected ? 'var(--yellow)' : 'var(--white)' };
  border: ${ props => props.selected ? '1px solid var(--yellow)' : '1px solid var(--white10)' };
  box-shadow: ${ props => props.selected ? '0px 0px 0px 1px var(--yellow)' : '0px 0px 0px 0px var(--yellow)'};
  font-weight: ${ props => props.selected ? '800' : '400' };
  background-color: var(--white10);
  border-radius: 30px;
  cursor: pointer;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 12px;
    padding: 14px 20px;
    margin-right: 8px;
    margin-bottom: 8px;
  }

  @media ${device.tablet} {
    font-size: 14px;
    line-height: 18px;
    padding: 13px 20px;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  &:hover {
    border: 1px solid var(--yellow);
  }

`

const ContactFormSelect = (props) => {

  const list = props.list
  const selectedText = list[props.selected]
  const [active, setActive] = useState(false)

  return <ContactFormSelectBtn onClick={() => setActive(!active)} active={active}>
      <ContactFormSelectSelected>{selectedText}</ContactFormSelectSelected><ContactFormSelectAnchor active={active} src="/images/select_anchor.png" />
        <ContactFormSelectList active={active}>
          {Object.keys(list).map((e, i) => <ContactFormSelectListOption key={i} selected={props.selected === e} onClick={() => props.onSelect(e)}>{list[e]}</ContactFormSelectListOption>)}
        </ContactFormSelectList>
    </ContactFormSelectBtn>
}

const ContactFormSelectBtn = styled.div`

  transition: all .2s;
  display: inline-block;
  position: relative;
  color: var(--white);
  border: ${ props => props.active ? '1px solid var(--yellow)' : '1px solid var(--white10)'};
  box-shadow: ${ props => props.active ? '0px 0px 0px 1px var(--yellow)' : '0px 0px 0px 0px var(--yellow)'};
  font-weight: 400;
  background-color: var(--white10);
  border-radius: 30px;
  cursor: pointer;

  @media ${device.mobile} {
    width: 200px;
    max-width: 100%;
  }

  @media ${device.tablet} {
    width: 250px;
  }

  &:hover {
    border: 1px solid var(--yellow);
  }

`

const ContactFormSelectSelected = styled.p`
  width: 100%;
  margin: 0px;
  text-align: center;
  padding-right: 30px;
  
  @media ${device.mobile} {
    font-size: 12px;
    line-height: 12px;
    padding: 14px 10px;
  }

  @media ${device.tablet} {
    font-size: 14px;
    line-height: 18px;
    padding: 13px 10px;
  }
`

const ContactFormSelectAnchor = styled.img`
  position: absolute;
  right: 16px;
  transform: ${ props => props.active ? 'rotate(180deg) translateY(2px)' : 'none' };
  transition: all .2s;
  
  @media ${device.mobile} {
    height: 4px;
    top: 18px;
  }

  @media ${device.tablet} {
    height: 6px;
    top: 20px;
  }
`

const ContactFormSelectList = styled.div`

  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: var(--white10);
  border: 1px solid var(--white10);
  border-radius: 20px;
  backdrop-filter: var(--blur);
  left: 0px;
  width: 100%;
  overflow: hidden;
  z-index: ${ props => props.active ? '2' : '-1' };
  opacity: ${ props => props.active ? '1' : '0' };
  transition: all .2s;
 
  @media ${device.mobile} {
    top: 44px;
    padding: 8px 0px;
  }

  @media ${device.tablet} {
    top: 48px;
    padding: 16px 0px;
  }

`

const ContactFormSelectListOption = styled.a`

  display: block;
  color: ${ props => props.selected ? 'var(--yellow)' : 'var(--white)'};
  font-weight: ${ props => props.selected ? '600' : '300'};
  background-color: ${ props => props.selected ? 'var(--white10)' : ''};

  @media ${device.mobile} {
    padding: 16px 20px;
    font-size: 12px;
    line-height: 12px;
  }

  @media ${device.tablet} {
    padding: 16px 28px;
    font-size: 16px;
    line-height: 16px;
  }

  &:hover {
    background-color: var(--white10);
  }
`

const ContactFormBody = styled.textarea`
  background-color: var(--white10);
  border: 1px solid var(--white10);
  border-radius: 20px;
  color: #fff;
  width: 100%;
  resize: none;
  transition: all .2s;

  @media ${device.mobile} {
    padding: 24px;
    padding-bottom: 36px;
    font-size: 12px;
    line-height: 18px;
    height: 200px;
    
    &::placeholder {
      font-size: 12px;
    }
  }

  @media ${device.tablet} {
    padding: 32px;
    padding-bottom: 48px;
    font-size: 16px;
    line-height: 24px;
    height: 300px;
    
    &::placeholder {
      font-size: 18px;
    }

  }

  &::placeholder {
    color: var(--white50);
  }

  &:hover {
    border: 1px solid var(--yellow);
  }

  &:focus {
    outline: none;
    border: 1px solid var(--yellow);
    box-shadow: 0px 0px 0px 1px var(--yellow);
  }
`

const ContactFormBodyLength = styled.p`
  display: inline-block;
  color: var(--white);
  text-align: right;
  margin: 0px;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 12px;
    padding: 24px;
    padding-top: 0px;
    margin-top: -36px;
  }

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 16px;
    padding: 32px;
    padding-top: 0px;
    margin-top: -48px;
  }
`


const ContactFormSubmit = styled.a`

  color: var(--yellow);
  font-weight: 800;
  border: 2px solid var(--yellow);
  text-align: center;
  border-radius: 30px;
  cursor: pointer;
  transition: all .2s;
  align-self: flex-end;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 12px;
    padding: 16px 0px;
    width: 140px;
    margin-top: 20px;
  }

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 16px;
    padding: 20px 0px;
    width: 200px;
    margin-top: 36px;
  }

  &:hover {
    background-color: var(--yellow);
    color: var(--black);
  }

`
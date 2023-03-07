import styled from 'styled-components'
import { size, device } from '@/styles/global-style';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

const Nav = styled.div`
    display: block;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    background-color: var(--white10);
    backdrop-filter: var(--blur);
    border-bottom: 1px solid ${props => props.brand ? 'var(--black10)' : 'var(--white10)' };
    text-align: center;
    transition: .2s all;
    z-index: 10;

    @media ${device.mobile} {
        height: 60px;
        overflow: hidden;
    }

    @media ${device.tablet} {
        height: 80px;
    }

    @media ${device.desktop} {
        height: 80px;
    }
`

const NavCenter = styled.div`

    display: inline-block;
    text-align: left;

    @media ${device.mobile} {
        width: 100%;
        padding: 18px 30px;
    }

    @media ${device.tablet} {
        width: 750px;
        padding: 26px 0px;
    }

    @media ${device.desktop} {
        width: 1120px;
    }
`

const Logo = styled.img`
    display: inline-block;
    height: 24px;
    cursor: pointer;
`

const Navul = styled.ul`

    display: flex;

    @media ${device.mobile} {
        flex-direction: column;
        margin-top: 50px;
        list-style: none;
        align-items: flex-end;
        gap: 40px;
    }

    @media ${device.tablet} {
        float: right;
        flex-direction: row;
        margin: 0px;
        padding: 0px;
        gap: 24px;
    }

`

const Navli = styled.li`

    display: inline-block;
    color: ${props => props.active && !props.brand ? 'var(--white)'
                : !props.active && !props.brand ? 'var(--white50)'
                : props.active && props.brand ? 'var(--black)'
                : 'var(--black50)'};
    font-weight: ${props => props.active ? '600' : '400'};
    transition: color .2s;
    cursor: pointer;

    @media ${device.mobile} {
        font-size: 24px;
        line-height: 24px;
    }

    @media ${device.tablet} {
        font-size: 12px;
        line-height: 12px;
        padding: 8px 0px;
    }

    &:hover {
        color: ${props => !props.brand ? 'var(--white)' : 'var(--black)'}
    }
`

const MobileMenuBtn = styled.img`
    display: inline-block;
    position: absolute;
    right: 30px;
    top: 21px;
    height: 18px;
`

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const Topnav = (props) => {

    const path = props.path

    const [windowDimensions, setWindowDimensions] = useState({
        width: undefined,
        height: undefined,
      });
    const [mobileMenu, setMobileMenu] = useState(false);
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);

      handleResize()
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const router = useRouter()

    const changePage = (page) => {
        router.push(page)
        setMobileMenu(false)
    }

    return (
    <Nav style={{
            height: mobileMenu ? "100%" : ""
        }}
        brand={path === '/brand'}
    ><NavCenter>
        <Logo src={ windowDimensions.width > size.tablet ? "/images/logo.png" : "/images/logo_mobile.png" } onClick={() => changePage('/')}></Logo>
        <Navul>
            <Navli active={path === '/'} brand={path === '/brand'} onClick={() => changePage('/')}>WELCOME</Navli>
            <Navli active={path === '/introduction'} brand={path === '/brand'} onClick={() => changePage('/introduction')}>INTRODUCTION</Navli>
            <Navli active={path === '/solution'} brand={path === '/brand'} onClick={() => changePage('/solution')}>SOLUTION</Navli>
            <Navli active={path === '/brand'} brand={path === '/brand'} onClick={() => changePage('/brand')}>BRAND</Navli>
            <Navli active={path === '/joinus'} brand={path === '/brand'} onClick={() => changePage('/joinus')}>JOIN US</Navli>
        </Navul>
        {
            windowDimensions.width < size.tablet && path !== '/brand'
            ? <MobileMenuBtn src={mobileMenu ? "/images/menu_cancel.png" : "/images/menu.png" } onClick={() => setMobileMenu(!mobileMenu)} />
            : <></>
        }
        {
            windowDimensions.width < size.tablet && path === '/brand'
            ? <MobileMenuBtn src={mobileMenu ? "/images/menu_cancel_black.png" : "/images/menu_black.png" } onClick={() => setMobileMenu(!mobileMenu)} />
            : <></>
        }
    </NavCenter></Nav>
    )
}

export default Topnav
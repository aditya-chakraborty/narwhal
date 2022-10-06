import React from 'react'
import styled from 'styled-components'
import companiesIcon from '../assets/icon-companies.svg'
import searchIcon from '../assets/icon-search.svg'

const DashboardNav = (props) => {

    const tabsList = ['All', 'Favorites', 'Archived']

    const checkIsActive = (idx) => {
        if(idx === props.active) return true
        else return false
    }

    return (
        <>
            <NavContainer>
                <DashboardTitle>
                    <img src={companiesIcon}></img>
                    <Title>Teams</Title>
                </DashboardTitle>
                <CTABtn>+   Create New Team</CTABtn>
            </NavContainer>
            <MenuContainer>
                <Tabs>
                    {tabsList.map((tabItem, idx) => {
                        return (
                          <Tab
                            key={idx}
                            onClick={(e) => props.onTabClick(e, idx)}
                            active={checkIsActive(idx)}
                          >
                            {tabItem}
                          </Tab>
                        ) 
                    })}
                </Tabs>
                <SearchBar>
                    <img src={searchIcon}></img>
                    <Input label='' placeholder='Search team name ...' type='text' onChange={(e) => props.onSearch(e)}></Input>
                </SearchBar>
            </MenuContainer>
        </>
    )
}

const NavContainer = styled.div`
    display: flex;
    padding: 2.5rem 3.5rem 2.5rem 2.5rem;
    justify-content: space-between;
    align-items: center;
`

const DashboardTitle = styled.div`
    display: inline-flex;
    justify-content: space-between;
`

const Title = styled.h6`
    font-size: 30px;
    line-height: 2.25rem;
    font-weight: 600;
    color: #000000;
    padding: 0 0.5rem;
`

const CTABtn = styled.button`
    box-sizing: border-box;
    width: max-content; 
    height: 2.25rem;
    padding: 10px;
    background: #40D2BF;
    color: #FFFFFF;
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    letter-spacing: 0.02rem;
    text-transform: uppercase;
    border: 2px solid #40D2BF;
    border-radius: 0.25rem;
    outline: none;
    cursor: pointer;
    transition: all 100ms ease-in;
    &:hover{
        background: #FFFFFF;
        color: #40D2BF;
    }
`

const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 3.5rem 0 2.5rem;
    box-shadow: 0 8px 12px -6px rgba(0, 0, 0, 0.1);
    z-index: 1;
`

const Tabs = styled.div`
    display: inline-flex;
    width: max-content;
`

const Tab = styled.li`
    list-style: none;
    padding: 0.5rem 1.5rem;
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    color: ${props => props.active ? '#0083E3' : '#000000'};
    border-bottom: ${props => props.active ? '3px solid #0083E3' : 'none'};
    cursor: pointer;
    &:hover {
        color: ${props => props.active ? '#0083E3' : '#4F6471'};
        border-bottom: ${props => props.active ? '3px solid #0083E3' : '3px solid #4F6471'};
        // background-color: rgba(86, 86, 86, 0.1);
    }
`

const SearchBar = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`
    
const Input = styled.input`
    outline: none;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    font-family: Montserrat, sans-serif;
    letter-sapcing: -0.05rem;
    ::placeholder {
        color: #999999;
    }
`
export default DashboardNav
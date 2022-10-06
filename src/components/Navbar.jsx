import React from 'react'
import styled from 'styled-components'
import notifIcon from '../assets/icon-mail.svg'
import caretDown from '../assets/caret-down.svg'

const Navbar = ({ appName, pageName, user }) => {
    return (
        <NavContainer>
            <Title>{appName}</Title>
            <NavContent>
                <PageName>{pageName}</PageName>
                <UserContent>
                    <NotifContainer>
                        <Notifications src={notifIcon} />
                        <NotifCount>{user.notifications_count}</NotifCount>
                    </NotifContainer>
                    <UserContainer>
                        <Greeting>
                            Hello, {user.name}
                        </Greeting>
                        <UserAvatar src={user.avatar} />
                        <Dropdown src={caretDown} />
                    </UserContainer>
                </UserContent>
            </NavContent>
        </NavContainer>
    )
}

const NavContainer = styled.nav`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 5rem;
    background-color: white;
    border-bottom: 1px solid #E2E2E2;
`
    
const Title = styled.div`
    display: inline-flex;
    height: 100%;
    width: max-content;
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;
    letter-spacing: -0.04rem;
    padding: 2.5rem;
    padding-top: 1.7rem;
    color: rgba(26, 25, 25, 0.5);
    border-right: 2px solid #E2E2E2;
`

const NavContent = styled.div`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    padding-top: 1.7rem;
    width: 100%;    
`

const PageName = styled.p`
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    color: #000000;
`

const UserContent = styled.div`
    display: inline-flex;
    width: max-content;
    justify-content: space-between;
    align-items: center;
    padding-right: 1.5rem;
`
    
const NotifContainer = styled.div`
    display: flex;
    z-index: 5;
    gap: -3px;
    border-radius: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: all 150ms ease-in;
    &:hover {
        background: rgba(86, 86, 86, 0.1);
        transform: scale(1.1)
    }
`
    
const Notifications = styled.img`
    // z-index: -1;
`
    
const NotifCount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -8px -10px;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background-color: #2995DA;
    border: 2px solid #FFFFFF;
    color: #FFFFFF;
    font-size: 11px;
    line-height: 13px;
    font-weight: 500;
`
    
const Dropdown = styled.img`
    margin-left: 0.6rem;
`
    
const UserContainer = styled.div`
    display: inline-flex;
    width: max-content;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`
    
const Greeting = styled.p`
    font-size: 14px;
    line-height: 17px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.5);
    padding-left: 1.4rem;
    padding-right: 0.6rem;
    transition: all 100ms ease-in;
    &:hover {
        color: #000000;
    }
`

const UserAvatar = styled.img`
    height: 2.25rem;
    width: 2.25rem;
    border-radius: 18px;
`

export default Navbar
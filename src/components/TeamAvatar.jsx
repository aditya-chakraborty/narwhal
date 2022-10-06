import React from 'react'
import styled from 'styled-components'
import starDefault from '../assets/star-default.svg'
import starActive from '../assets/star-active.svg'

const TeamAvatar = (props) => {
  return (
    <AvatarContainer>
        <MetaContainer>
            <Img src={props.image} />
            <TeamMeta>
                <Title>{props.name}</Title>
                <CreatedAt>{props.createdAt ? `Created ${props.createdAt}` : "Created 3 August 2018"}</CreatedAt>
            </TeamMeta>
            <Status src={props.isFavorited ? starActive : starDefault} />
        </MetaContainer>
        <Description>{props.description}</Description>
    </AvatarContainer>
  )
}

const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const MetaContainer = styled.div`
    display: flex;
`

const Img = styled.img`
    width: 2.25rem;
    height: 2.25rem;
    margin-right: 9px;
    border-radius: 3px;
`

const TeamMeta = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.text`
    margin: 0;
    font-size: 1rem;
    line-height: 19px;
    font-weight: 600;
    color: #444444;
`

const Description = styled.p`
    margin-top: 15px;   
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2; 
    -webkit-box-orient: vertical;
    font-size: 14px;
    line-height: 17px;
    color: #565656;
    letter-spacing: -0.01rem;
    font-weight: 500;
`

const CreatedAt = styled.p`
    font-size: 13px;
    line-height: 16px;
    color: #565656;
    opacity: 0.5;
    margin-top: 2px;
    width: max-content;
`

const Status = styled.img`
    margin-left: auto;
    align-self: flex-start;
    cursor: pointer;
    padding: 5px;
    border-radius: 3px;
    transition: all 100ms ease-in;
    &:hover {
        background-color: rgba(86, 86, 86, 0.1);
    }
`
export default TeamAvatar
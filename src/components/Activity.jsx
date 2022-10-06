import React from 'react'
import styled from 'styled-components'

const Activity = ({ act }) => {

    let msg = ''
    const person = act.person

    const buildMessage = (user, team) => {
        if(act.action === 'added_leads') {
            return (
                <Message>
                    <Highlight>{user.name}</Highlight> added new leads to <Highlight>{team}</Highlight>.
                </Message>
            )
        }
        else if(act.action === 'archived_team') {
            return (
                <Message>
                    <Highlight>{user.name}</Highlight> archived the team <Highlight>{team}</Highlight>.
                </Message>
            )
        }
        else if(act.action === 'increased_quota') {
            return (
                <Message>
                    <Highlight>{user.name}</Highlight> increased <Highlight>{team}</Highlight>'s quota.
                </Message>
            )
        }
    }

    return (
        <ActivityContainer>
            <UserAvatar src={person.avatar} />
            <Details>
                {buildMessage(person, act.target)}
                <TimeStamp>
                    {act.created_at ? act.created_at : "2 hours ago"}
                </TimeStamp>
            </Details>
        </ActivityContainer>
    )
}

const ActivityContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 11px;
`

const UserAvatar = styled.img`
    height: 2.25rem;
    width: 2.25rem;
    border-radius: 18px;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 0.7rem;
`

const Message = styled.p`
    font-size: 14px;
    line-height: 17px;
    color: #444444;
    font-weight: 400;
`

const Highlight = styled.span`
    font-weight: 600;
`

const TimeStamp = styled.p`
    font-size: 13px;
    line-height: 16px;
    color: #565656;
    opacity: 0.5;
    margin-top: 5px;
`

export default Activity
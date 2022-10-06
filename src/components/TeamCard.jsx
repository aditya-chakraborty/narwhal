import React from 'react'
import styled from 'styled-components'
import TeamAvatar from './TeamAvatar'
import campaignIcon from '../assets/icon-conversations-small.svg'
import leadsIcon from '../assets/icon-leads-small.svg'

const TeamCard = (props) => {
  return (
    <Card isArchived={props.isArchived}>
      <About>
        <TeamAvatar
          name={props.name}
          description={props.description}
          image={props.image}
					createdAt={props.createdAt}
          isFavorited={props.isFavorited}
        />
      </About>
      <Meta>
        <div style={{display: 'flex'}}>
					<img src={campaignIcon} style={{marginRight: '6px'}}></img>
					<p style={{width: 'max-content'}}>{props.campaignsCount} Campaigns</p>
        </div>
        <div style={{display: 'flex'}}>
					<img src={leadsIcon} style={{marginRight: '6px'}}></img>
					<p style={{width: 'max-content'}}>{props.leadsCount} Leads</p>
        </div>
      </Meta>
    </Card>
  );
}

const Card = styled.article`
    width: fit-content;
    height: 181px;
    display: flex;
    box-sizing: border-box;
    border: 1px solid #E7E4EC;
    border-radius: 4px;
    flex-direction: column;
    background-color: ${props => props.isArchived ? '#EBEEF2' : '#FFFFFF'};
    transition: all 150ms ease-in-out;
    &:hover {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }
`
    
const About = styled.section`
    padding: 1rem;
    border-bottom: 1px solid #E7E4EC;
`

const Meta = styled.div`
    display: flex;
    gap: 0.5rem;
    font-size: 13px;
    line-height: 1rem;
    padding: 0.75rem 1rem;
    color: rgba(0, 0, 0, 0.45);
    display: flex;
    justify-content: flex-start;
		align-items: center;
		margin: auto 0;
`

export default TeamCard
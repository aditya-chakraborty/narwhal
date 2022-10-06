import React from 'react'
import styled from 'styled-components';
import Activity from './Activity';

const ActivityCard = ({ activities }) => {
  return (
    <Card>
        <Header>
            Activity
        </Header>
        <ActivityList>
            {activities.map(act => {
                return <Activity key={act.id} act={act} />
            })}
        </ActivityList>
    </Card>
  )
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    height: max-content;
    max-width: 316px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05), 0px 0px 30px rgba(0, 0, 0, 0.1);
`

const Header = styled.div`
    display: flex;
    height: 70px;
    width: 100%;
    align-items: center;
    padding: 1rem 2rem;
    border-bottom: 1px solid #EFEFEF;
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;
`

const ActivityList = styled.ul`
    padding: 2rem 2rem 21px;
`

export default ActivityCard
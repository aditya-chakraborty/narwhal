import React from 'react'
import styled from 'styled-components'
import leadsIcon from '../assets/icon-leads.svg'
import campaignIcon from '../assets/icon-campaign.svg'
import reportsIcon from '../assets/icon-reports.svg'
import teamsIcon from '../assets/icon-teams.svg'
import SWLogo from '../assets/sw-logo-white.svg'
import helpIcon from '../assets/icon-help.svg'

const Sidebar = (props) => {

    const icons = [{
        src: SWLogo,
        active: false,
    },
    {
        src: campaignIcon,
        active: false,
    },
    {
        src: teamsIcon,
        active: true,
    },
    {
        src: leadsIcon,
        active: false,
    },
    {
        src: reportsIcon,
        active: false,
    }]

    return (
        <SidebarContainer>
            <div>
                {icons.map((icon, idx) => {
                    return (
                        <IconContainer key={idx} active={icon.active}>
                            <Icon src={icon.src} />
                        </IconContainer>
                    )
                })}
            </div>
            <div>
                <IconContainer>
                    <Icon src={helpIcon} />
                </IconContainer>
            </div>
        </SidebarContainer>
    )
}

const SidebarContainer = styled.div`
    width: 5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #042235;
    position: -webkit-sticky;
    top: 0;
    position: sticky;
`

const IconContainer = styled.div`
    height: 5rem;
    width: 5rem;
    display: flex;
    background-color: ${props => props.active && '#2995DA'};
    cursor: pointer;
    transition: all 150ms ease-in;
    &:hover {
        border: 2px solid #E7F0F9;
    }
`
const Icon = styled.img`
    margin: auto;
`

export default Sidebar
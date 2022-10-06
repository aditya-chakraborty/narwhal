import React from 'react'
import styled from 'styled-components'
import TeamCard from './TeamCard'

import notFound from '../assets/no-results.png'

const TeamsTable = ({ teams, title }) => {

	const TeamsList = teams.map(team => {
		return (
			<TeamCard
				key={team.id}
				name={team.name}
				description={team.description}
				campaignsCount={team.campaigns_count}
				leadsCount={team.leads_count}
				image={team.image}
				createdAt={team.created_at}
				isArchived={team.is_archived}
				isFavorited={team.is_favorited}
			/>
		)
	})

	const NotFound = () => {
		return (
				<GraphicContainer>
					<img src={notFound}></img>
					<h3>Ups!... no results found</h3>
					<h5>Please try another search.</h5>
				</GraphicContainer>
		)
	}

	return (
		<TableContainer>
			<Header>
				<Title>{title}</Title>
				<CountStatus>Showing {teams.length} out of {teams.length} teams</CountStatus>
			</Header>
			<Table>
				{teams.length > 0 ? TeamsList : <NotFound />}
			</Table>
		</TableContainer>
	)

}

const TableContainer = styled.div`
	height: max-content;
	width: auto;
	// width: fit-content;
	background-color: white;
	margin-right: 33px;  
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05), 0px 0px 30px rgba(0, 0, 0, 0.1);
`

const Table = styled.div`
	display: grid;
	max-width: 1037px;
	justify-content: space-between;
	grid-template-rows: auto;
	row-gap: 1rem;
	column-gap: 1em;
	padding: 27px;
	flex-wrap: wrap;
	@media (min-width: 900px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 1200px) {
		grid-template-columns: repeat(3, 1fr);
	}
`

const Header = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding: 27px 27px 18px;
	border-bottom: 1px solid #EFEFEF;
`

const Title = styled.h4`
	font-size: 18px;
	line-height: 22px;
	font-weight: 700;
`

const CountStatus = styled.p`
	font-size: 14px;
	line-height: 17px;
	color: #7F7F7F;
	font-weight: 500;
`

const GraphicContainer = styled.div`
	width: 100% ;
	display: flex ;
	flex-direction: column;
	align-items: center ;
	gap: 0.5rem ;
	grid-column: 2 ;
`

export default TeamsTable
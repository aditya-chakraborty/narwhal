import './App.css' 
import Sidebar from './components/Sidebar' 
import ActivityCard from './components/ActivityCard' 
import { useEffect, useState } from 'react' 
import styled from 'styled-components' 
import TeamsTable from './components/TeamsTable' 
import Navbar from './components/Navbar' 
import DashboardNav from './components/DashboardNav' 
import Loader from './components/Loader' 

function App() {

  const [ teams, setTeams ]                 = useState([])
  const [ initialTeams, setInitialTeams ]   = useState([])
  const [ activities, setActivities ]       = useState([])
  const [ currentUser, setCurrentUser ]     = useState({})
  const [ filteredTeams, setFilteredTeams ] = useState([])
  
  const [ loading, setLoading ]    = useState(false)
  const [ isActive, setIsActive ]  = useState(0)

  const [ searchQuery, setSearchQuery ] = useState('')

  const tabsList = ['All Teams', 'Favorites', 'Archived Teams']

  const tabClickHandler = (e, tabIdx) => {
    e.preventDefault()
    setIsActive(tabIdx)
    updateShownTeams(tabIdx)
  }

  const updateShownTeams = (idx) => {
    if (idx === 0){
      setTeams(initialTeams)
      setFilteredTeams(initialTeams)
    } 
    else if (idx === 1){
      setTeams(favoritedTeams)
      setFilteredTeams(favoritedTeams)
    } 
    else if (idx === 2){
      setTeams(archivedTeams)
      setFilteredTeams(archivedTeams)
    }
  }


  async function getData() {
    setLoading(true)

    const response = await fetch('https://api.npoint.io/18e62b423d25928e6044')
    const data = await response.json()

    setTeams(data.teams)
    setInitialTeams(data.teams)
    setActivities(data.activities)
    setCurrentUser(data.current_user)
    setLoading(false)
  }
  
  useEffect(() => {
    getData()
  }, [])

  const archivedTeams  = initialTeams.filter(team => team.is_archived === true)
  const favoritedTeams = initialTeams.filter(team => team.is_favorited === true)
  
  //teams as per search query
  const updateSearchResults = (query) => {
    const result = teams.filter(team => team.name.toLowerCase().includes(query))
    setFilteredTeams(result)
  }

  const searchTeams = (e) => {
    const input = e.target.value
    setSearchQuery(input)
    updateSearchResults(input)
  }

  useEffect(() => {
    updateSearchResults(searchQuery)
  }, [teams])


  if(loading) {
    return <Loader />
  }

  return (
    <AppContainer>
      <Sidebar />
      <Body>
        <Navbar appName="NARWHAL" pageName="Teams" user={currentUser} />
        <DashboardNav
          onTabClick={tabClickHandler}
          active={isActive}
          onSearch={searchTeams}
        />
        <Dashboard>
          <TeamsTable teams={filteredTeams} title={tabsList[isActive]} />
          <ActivityCard activities={activities} />
        </Dashboard>
      </Body>
    </AppContainer>
  )
}

const AppContainer = styled.div`
	background: white;
	height: 100vh;
	width: 100%;
	display: flex;
	overflow: auto;
	font-family: 'Montserrat', sans-serif;
`

const Body = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
`

const Dashboard = styled.div`
	height: 100%;
	background-color: #F1F4F8;
	display: flex;
	justify-content: space-between;
	padding: 40px;
	overflow: auto;
`

export default App

import { useEffect, useState } from 'react'
import Usercard from './Usercard'
import './App.css'

import { getUser } from './API'

function App() {

const [user, setuser] = useState(null)

useEffect(() =>{
  getUser().then((user) => {setuser(user.results[0])})
}, [])

console.log(user)

const refresh = () =>{
  getUser().then((user) => {setuser(user.results[0])})
  console.log("user refreshed")
}
  return (
    <>
      {user && <Usercard data={user}/>}
      <button onClick={refresh}>Refresh User</button>
    </>
  )
}

export default App
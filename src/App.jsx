import React from 'react'
import SignIn from './components/SignIn'
import Forgot from './components/Forget'
import Otp from './components/Otp'
import NewPassword from './components/NewPassword'
import Register from './components/Register'
import Dashboard from './components/Administration/Dashboard'

const App = () => {
  return (
    <div>
      <SignIn/>
      <Forgot/>
      <Otp/>
      <NewPassword/>
      <Register/>
      <Dashboard/>


    </div>
  )
}

export default App
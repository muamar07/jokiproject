import { Routes, Route, Navigate } from 'react-router-dom'

import { Home, ReasonRegister, Register, LastPage, Admin, Dashboard, Main } from 'pages'

const MainRoutes = () => {
  return (
    <Routes>
      <Route>
        {/* <Route path='/' element={<Home />} />
        <Route path='admin' element={<Admin/>}/> */}
        <Route path='/' element={<Dashboard />} />
        <Route path='main' element={<Main />} />
        <Route path='thankyou' element={<LastPage />} />
        <Route path='register/reason' element={<ReasonRegister/>}/>
      </Route>
    </Routes>
  )
}

export default MainRoutes

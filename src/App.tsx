import { BrowserRouter, HashRouter } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Provider } from 'react-redux'
import { store } from 'utils/redux/store'
import './App.css'
import { Footer } from 'components/Footer'
import MainRoutes from 'components/MainRoutes/MainRoutes'
// import 'swiper/css';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <HashRouter>
          {/* <NavBar /> */}
          <MainRoutes />
          {/* <Footer /> */}
        </HashRouter>
      </div>
    </Provider>
  )
}

export default App

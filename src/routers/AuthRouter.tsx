import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Login, SignUp } from '../screens'
import { Typography } from 'antd';

const {Title} = Typography
const AuthRouter = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div 
              className='col d-none d-lg-block text-center ' 
              style={{marginTop: '15%' }}>
              <div className='mb-4'>
                <img 
                  src={'https://firebasestorage.googleapis.com/v0/b/coffee-ca334.appspot.com/o/cafe-logo.png?alt=media&token=6452be14-33b4-4987-acd6-b60fcb36f737'} 
                  alt=""
                  style={{
                  width: 256,
                  }} />
              </div>
                <Title> COFFEE </Title>
            </div>
            <div className='col content-center'>
            <BrowserRouter>
  <Routes>
     <Route path='/' element= { <Login/> } />
     <Route path='/sign-up' element= { <SignUp/> } />
  </Routes>
  </BrowserRouter>
            </div>
            </div>    
    </div>
  
  );
}

export default AuthRouter

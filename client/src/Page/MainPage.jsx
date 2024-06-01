import { useState } from 'react'
import TopNav from '../components/Topnav'
import CardBanner from '../components/Cardbanner'
import './MainPage.css';

function MainPage() {
  
    
  return (
    <div>
      <div className='cover-page'>
      <TopNav/>
     </div>
        <h3> Why Should We Use us </h3>
      <CardBanner/>
    </div>
)
  }
export default MainPage

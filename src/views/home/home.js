import React, { useState } from 'react'
import './home.css'

import Container from '../../components/container'
import NavBar from '../../components/navbar'
import Header from '../../components/header'
import Contact from '../contact'
import MainText from '../../components/main-text'
import ContactText from '../../components/contact-text'
import ListDisplay from '../../components/list-display'

const object1 = [
  'Matt Johnson',
  'Bart Paden',
  'Ryan Doss',
  'Jared Malcolm'
]

const object2 = [
  'Matt Johnson',
  'Bart Paden',
  'Jordan Heigle',
  'Tyler Viles'
]
const Home = () => {
  const [visible, setVisible] = useState(true)
  const [distinct, setDistinct] = useState([])
  const [showList, setShowList] = useState(false)

  const distinctList = () => {
    if (distinct.length) {
      window.alert('List has already been computed')
      return;
    }
    var distinctObj = {};
    const fullList = [...object1, ...object2]

    fullList.forEach((name) => {
      distinctObj[`${name}-${typeof name}`] = name;
    });
  
    const distinctArr = Object.keys(distinctObj).map((key) => {
      return distinctObj[key];
    });

    setDistinct(distinctArr)
    setShowList(true)
  }
  return (
    <div className={visible ? 'home-view' : 'contact-view'}>
      <NavBar setVisible={setVisible} visible={visible}/>
      {
        visible 
        ?
          <>
            <Container />
            <Header Text={MainText} distinctFn={distinctList}/>
            <ListDisplay showList={showList} list={distinct} />
          </>
        :
          <Contact Text={ContactText} visible={visible}/>
      }
    </div>
  )
}

export default Home
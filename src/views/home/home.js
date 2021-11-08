import React, { useState } from 'react'
import './home.css'

import Container from '../container/container'
import NavBar from '../../components/navbar/navbar'
import Header from '../header/header'
import Contact from '../contact/contact'

const MainText = ({ fn }) =>
<p>
  Remove the duplicates in 2 Javascript objects and output the
  list of distinct names in an unordered list when <span style={{ textDecoration: "underline", color: "#DEBF79", cursor: "pointer" }} onClick={fn}>this link </span>
  is clicked. If the Operation has been completed already notify the user this has already been done.
</p>

const ContactText = () =>
<>
  <p>
    Lorem ipsum dolar sit amet, consectetur adipiscing elit,
    sed do dos eiusmod tempor incididunt ut labore et
    trace dolore magna aliqua.
  </p>
  <p>
    Proin sagittis nisl rhoncus mattis rhoncus. At augue eget
    arcu distum varius duis at consectetur lorem.
  </p>
</>

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

const ListDisplay = ({list, showList}) => {
  if (showList) {
    return (
      <ul>
      {
        list.map((name) => {
          return <li key={name}>{name}</li>
        })
      }
      </ul>
    )
  }
  return <></>
}


const Home = () => {
  const [visible, setVisible] = useState(true)
  const [distinct, setDistinct] = useState([])
  const [showList, setShowList] = useState(false)

  const distinctList = () => {
    if (distinct.length) {
      window.alert('List has already been sorted')
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
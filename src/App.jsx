import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'

import Header from './components/Header/Header'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {
  const [bookmarks,setBookmarks]=useState([])
  const [readingTime,setReadingTime]=useState(0)

  const handleAddToBookmark=(blog)=>{
         const newBookmarks=[...bookmarks,blog]
         setBookmarks(newBookmarks)
  }

  const handleMarkAsRead=(time)=>{
    setReadingTime(readingTime+time);

    // const newReadingTime=readingTime+time
    // setReadingTime(newReadingTime)
  }

  return (
    <div className='exo-2 container px-4 mx-auto'>
      <Header></Header>
      <div className='md:flex'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App

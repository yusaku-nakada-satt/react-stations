// DO NOT DELETE

import './App.css'
import './reset.css'
import { useState } from 'react'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )
  const updateUrl = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()
    setDogUrl(data.message)
  }
  return (
    <div>
      <header>
        <h1>Dog App</h1>
        <meta name="description" content="犬の画像を紹介するサイトです"></meta>
      </header>
      <div className="content">
        <div className="dest">
          <p>犬の画像を紹介するサイトです。</p>
        </div>
        <div className="img">
          <img src={dogUrl} alt="dog"></img>
          <button onClick={updateUrl}>更新</button>
        </div>
      </div>
    </div>
  )
}

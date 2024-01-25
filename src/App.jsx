// DO NOT DELETE

import './App.css'
import './reset.css'
import { useState } from 'react'
import { Header } from './Header'
import { Description } from './Description'
import { DogImage } from './DogImage'

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
      <Header />
      <div className="content">
        <Description description="犬の画像を紹介するサイトです。" />
        <DogImage imageUrl={dogUrl} updateUrl={updateUrl} />
      </div>
    </div>
  )
}

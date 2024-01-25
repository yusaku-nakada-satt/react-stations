// @ts-check

import BreedsSelect from './BreedsSelect'
import { useEffect, useState } from 'react'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const dogList = Object.keys(data.message)
        setBreeds(dogList)
      })
  }, [])
  return <BreedsSelect breeds={breeds} />
}

export default DogListContainer

// @ts-check
import { useState } from 'react'
import React from 'react'

export const BreedsSelect = props => {
  let dogList = []
  for (let i = 0; i < props.breeds.length; i++) {
    dogList.push(
      <option key={i} value={i}>
        {props.breeds[i]}
      </option>,
    )
  }

  const [dogImage, setDogImage] = useState([])
  const selectRef = React.useRef()

  const rundomDogImage = selectRef => {
    console.log(selectRef)
    const url = `https://dog.ceo/api/breed/shiba/images/random/${selectRef}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.message)
        setDogImage(data.message)
      })
  }

  let dogImageList = []
  for (let i = 0; i < dogImage.length; i++) {
    if (i >= 12) {
      break
    }
    dogImageList.push(<img key={i} src={dogImage[i]} alt="犬" />)
  }

  return (
    <div>
      <select ref={selectRef} title="犬種">
        {dogList}
      </select>
      <button onClick={() => rundomDogImage(selectRef.current.value)}>
        表示
      </button>
      {dogImageList}
    </div>
  )
}

export default BreedsSelect

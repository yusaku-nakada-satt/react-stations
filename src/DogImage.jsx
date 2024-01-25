// @ts-check

export const DogImage = props => {
  return (
    <div className="image">
      <img src={props.imageUrl}></img>
      <button onClick={props.updateUrl}>更新</button>
    </div>
  )
}

export default DogImage

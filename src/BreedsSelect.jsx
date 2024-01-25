// @ts-check

export const BreedsSelect = props => {
  let dogList = []
  for (let i = 0; i < props.breeds.length; i++) {
    dogList.push(
      <option key={i} value={i}>
        {props.breeds[i]}
      </option>,
    )
  }
  return <select title="犬種">{dogList}</select>
}

export default BreedsSelect

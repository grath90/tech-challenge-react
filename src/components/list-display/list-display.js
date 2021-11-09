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

export default ListDisplay
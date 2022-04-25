const ContainerHeaader = ({text,color}) => {
  return (
    <div className="contaniner-header" style = {{ backgroundColor: color }}>
        <p>{text}</p>
    </div>
  )
}

export default ContainerHeaader
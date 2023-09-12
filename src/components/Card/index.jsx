export const Card = (prosps) => {
  return (
        <div
        onClick={() => prosps.onClick()}
        style={{
          backgroundColor: '#303030',
          padding: 20,
          margin: 20,
          borderRadius: 8,
          width: 200,
          cursor: 'pointer'
        }}>
          <img src={prosps.imagem} width='100%' />
          <h2
          style={{
            marginTop: 10,
            textAlign: 'center'
          }}
          >{prosps.titulo}</h2>
        </div>
  )
}

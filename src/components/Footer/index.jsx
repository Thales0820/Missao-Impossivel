export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#1d1d1d',
        padding: '1rem 1rem 1rem',
        textAlign: "center"
      }}
    >
      <p
        style={{
          marginBottom: 5
        }}
      >Desenvolvido por Thales <br></br> Onde Assistir os Filmes:</p>
      <a href="https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root"
        style={{
          color: 'white',
          marginBottom: 5
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"       class="bibi-play-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
          </svg>
      </a>
    </footer>
  )
}

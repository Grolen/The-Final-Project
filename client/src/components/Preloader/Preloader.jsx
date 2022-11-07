import Spinner from 'react-bootstrap/Spinner'

export default function Preloader() {
  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h2>Preloader :</h2>
      <br /> <Spinner animation="border" variant="primary" /> <br />
    </div>
  )
}

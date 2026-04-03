import { useNavigate } from 'react-router-dom'

export default function BackButton() {
  const navigate = useNavigate()

  const onClickHandler = () => {
    navigate('/music/albums')
  }
  return (
    <>
      <button onClick={onClickHandler} className="backButton">
        {' '}
        {'<-- Back'}
      </button>
    </>
  )
}

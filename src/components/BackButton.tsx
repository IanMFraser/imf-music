/**
 * Navigation button that returns the user to the album grid.
 *
 * Used at the bottom of the Album detail page. Navigates programmatically
 * to /music/albums via React Router's useNavigate hook.
 */
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

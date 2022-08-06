import React from 'react'
import { useHistory } from 'react-router-dom'

function BackButton() {
    const history = useHistory()

    const onClickHandler = () => {
        history.push('/music/albums')
    }
    return (
        // eslint-disable-next-line react/button-has-type
        <button onClick={onClickHandler} className="backButton">
            {' '}
            {'<-- Back'}
        </button>
    )
}

export default BackButton

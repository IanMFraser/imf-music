import React from 'react'
import { useHistory } from 'react-router-dom'

function BackButton() {
    const history = useHistory()

    const onClickHandler = () => {
        history.push('/music/albums')
    }
    return (
        <button onClick={onClickHandler} className="backButton" type="button">
            {' '}
            {'<-- Back'}
        </button>
    )
}

export default BackButton

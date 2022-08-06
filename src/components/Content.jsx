import React from 'react'
import styled from 'styled-components'

const Main = styled.main`
    margin-top: 2rem;
    max-width: 75%;
`

function Content(props) {
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    return <Main>{props.children}</Main>
}

export default Content

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Main = styled.main`
    margin-top: 2rem;
    max-width: 75%;
`

function Content(props) {
    const { children } = props
    return <Main>{children}</Main>
}

export default Content

Content.propTypes = {
    children: PropTypes.node.isRequired,
}

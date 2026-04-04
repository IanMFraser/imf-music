/**
 * Site-wide footer.
 *
 * Renders a centered copyright line with the current year, computed
 * at render time so it never goes stale. Styled with styled-components.
 */
import styled from 'styled-components'

const Copyright = styled.footer`
  text-align: center;
  font-size: 0.75rem;
  margin: 2rem 0;
  bottom: 0;
  width: 100%;
`
export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <Copyright>
      <p>
        copyright © Ian M Fraser <span>{currentYear}</span>
      </p>
    </Copyright>
  )
}

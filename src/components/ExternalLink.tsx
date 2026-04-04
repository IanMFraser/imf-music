/**
 * Reusable external link rendered as a ">>" arrow.
 *
 * Always opens in a new tab with `rel="noreferrer"` for security.
 * Styled with the `newsLink` and `hvrBounceIn` CSS classes, where
 * `hvrBounceIn` is a hover.css entrance animation.
 *
 * Used in News and OldNews to link out to external articles or releases.
 */
interface ExternalLinkProps {
  href: string
}

const ExternalLink = ({ href }: ExternalLinkProps) => (
  <a
    className="newsLink hvrBounceIn"
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {' >>'}
  </a>
)

export default ExternalLink

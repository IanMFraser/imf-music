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

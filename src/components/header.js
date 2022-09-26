import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      padding: `var(--space-2) var(--space-4)`,
      display: `flex`,
      alignItems: `left`,
      fontWeight:  `bold`,
      position: `sticky`,
      top: `0`,
      background: `hsl(0, 0%, 100%, 95%)`,
      borderBottom: `1px solid #ededed`,
     }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-lg)`,
        padding: `var(--space-2)`,
        marginTop: `5px`,
        textDecoration: `none`,
        fontWeight:  `bold`,
      }}
    >
        {siteTitle}

    </Link>

    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
        padding: `var(--space-4)`,
        fontWeight:  `bold`,
      }}
    >
      Search
    </Link>

    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
        padding: `var(--space-4)`,
        fontWeight:  `bold`,
      }}
    >
      Favorites
    </Link>

    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
        padding: `var(--space-4)`,
        fontWeight:  `bold`,
      }}
    >
      About
    </Link>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

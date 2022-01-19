import React from "react"

import DocsNavLogoLockup from "./docs-nav-logo-lockup"
import SquadcastLogo from "./squadcast-logo"

const DocsMobileHeader = () => (
  <div className="DocsMobileHeader">
    <a className="DocsMobileHeader--cloudflare-logo-link Link Link-without-underline" href="https://www.squadcast.com/">
      <DocsNavLogoLockup
        small={true}
        logo={<SquadcastLogo/>}
      />
    </a>
  </div>
)

export default DocsMobileHeader

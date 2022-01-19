import React from "react"

import DocsNavLogoLockup from "./docs-nav-logo-lockup"
import SquadcastLogo from "./squadcast-logo"

const DocsSidebarHeaderSection = () => (
  <div className="DocsSidebar--section DocsSidebar--header-section">
    <a className="DocsSidebar--cloudflare-logo-link DocsSidebar--link" href="https://developers.cloudflare.com/">
      <DocsNavLogoLockup
        logo={<SquadcastLogo/>}
      />
    </a>
  </div>
)

export default DocsSidebarHeaderSection

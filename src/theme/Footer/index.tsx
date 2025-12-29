import React, {type ReactNode} from 'react';

import {useThemeConfig} from '@docusaurus/theme-common';
import FooterLayout from './Layout';
import FooterLinks from './Links';
import FooterLogo from './Logo';
import FooterCopyright from './Copyright';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Footer(): ReactNode {
  const {footer} = useThemeConfig();
  if (!footer) {
    return null;
  }
  const {copyright, links, logo, style} = footer;
  const { siteConfig } = useDocusaurusContext();
  const socialIcons =
  (siteConfig.customFields?.socialIcons as Array<{
    name: string;
    href: string;
    icon: string;
  }>) || [];

  return (
    <FooterLayout
      style={style}
      links={links && links.length > 0 && <FooterLinks links={links} />}
      logo={logo && <FooterLogo logo={logo} />}
      copyright={copyright && <FooterCopyright copyright={copyright} />}
      socialIcons={socialIcons}
    />
  );
}

export default React.memo(Footer);

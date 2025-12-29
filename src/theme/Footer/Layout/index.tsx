import React, { type ReactNode } from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl"; // Důležité pro správné cesty k obrázkům
import type { Props } from "@theme/Footer/Layout";

// Rozšíříme Props o naše socialIcons, pokud TypeScript křičí
interface CustomFooterProps extends Props {
  socialIcons?: Array<{ name: string; href: string; icon: string }>;
}

export default function FooterLayout({
  style,
  links,
  logo,
  copyright,
  socialIcons,
}: CustomFooterProps): ReactNode {
  return (
    <footer
      className={clsx(ThemeClassNames.layout.footer.container, "footer", {
        "footer--dark": style === "dark",
      })}
    >
      <div className="container container-fluid">
        {/* SEKCE PRO OBROVSKÉ IKONY */}
        {socialIcons && socialIcons.length > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2.5rem",
              marginBottom: "2rem",
              flexWrap: "wrap",
            }}
          >
            {socialIcons.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <img
                  src={useBaseUrl(item.icon)}
                  alt={item.name}
                  style={{ width: "100px", height: "100px" }} // Tady definuješ tu velikost
                />
              </a>
            ))}
          </div>
        )}

        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}

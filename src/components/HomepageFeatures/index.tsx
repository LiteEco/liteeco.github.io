import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Instant Setup, Zero Bloat",
    Svg: require("@site/static/img/fast.svg").default,
    description: (
      <>
        Forget complex configurations and unnecessary features. LiteEco is built
        to be
        <strong> lightweight, clean, and intuitive</strong>, allowing any
        Minecraft server owner to deploy it and start managing their economy in
        minutes.
      </>
    ),
  },
  {
    title: "Universal Database Support",
    Svg: require("@site/static/img/databases.svg").default,
    description: (
      <>
        LiteEco runs flawlessly on <strong>Paper</strong> and integrates
        seamlessly with your existing data infrastructure. We support all major
        modern backends: <strong>MariaDB, MySQL, SQLite, and PostgreSQL</strong>
        , giving you complete deployment flexibility.
      </>
    ),
  },

  {
    title: "Asynchronous and Fast",
    Svg: require("@site/static/img/feather.svg").default,
    description: (
      <>
        Our architecture is built for speed. By utilizing{" "}
        <strong>asynchronous processing </strong>
        and caching data directly in memory, LiteEco ensures{" "}
        <strong>zero server lag </strong>
        and minimizes database I/O, providing a flawless player experience.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

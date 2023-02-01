import React from "react";
import clsx from "clsx";

import styles from "./Footer.module.scss";

interface IFooter extends React.ComponentPropsWithoutRef<"footer"> {}

export const Footer: React.FC<IFooter> = ({className}) => {
	return (
		<footer className={clsx(className, styles.footer)}>
			<div className={clsx("container", styles.footer__container)}>
        Footer
      </div>
		</footer>
	)
};
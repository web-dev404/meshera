import Link from "next/link";
import clsx from "clsx";
import React from "react";

import { ILink } from "./link";

import styles from "./Link.module.scss";

export const LinkSecondary: React.FC<ILink> = ({
  label,
  className,
  ...props
}) => {
  return (
    <Link 
      {...props}
      className={clsx(styles.link, styles.secondary, className)}
    >
      {label}
    </Link>
  )
}
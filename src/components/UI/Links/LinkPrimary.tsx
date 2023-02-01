import Link from "next/link";
import clsx from "clsx";
import React from "react";

import { ILink } from "./link";

import styles from "./Link.module.scss";

export const LinkPrimary: React.FC<ILink> = ({
  label,
  className,
  ...props
}) => {
  return (
    <Link 
      {...props}
      className={clsx(styles.link, styles.primary, className)}
    >
      {label}
    </Link>
  )
}
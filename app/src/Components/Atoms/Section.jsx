import React from "react";

export default function Section({ children, className='' }) {
  return <section className={`py-7 ${className}`}>{children}</section>;
}

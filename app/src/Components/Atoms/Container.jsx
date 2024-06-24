import React from "react";

export default function Container({ children, className='' }) {
  return (
    <div className={`max-w-[85rem] w-full mx-auto ${className}`}>
      {children}{" "}
    </div>
  );
}

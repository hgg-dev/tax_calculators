import React, { ReactHTML } from "react";

interface props {
  label?: string;
}

export const CurrencyField = (props: props): JSX.Element => {
  return (
    <>
      <label>{props.label}</label>
      <input type="text" id="fname" name="fname"></input>
    </>
  );
};

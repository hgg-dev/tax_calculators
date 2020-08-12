import React, { useEffect } from "react";
import { Button, TextField, MenuItem } from "@material-ui/core";
import NumberFormat from "react-number-format";
import { years, payFrequency } from "../../Utilise/CalenderHelpers";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Console } from "console";
import { IncomeCalculator } from "./IncomeCalFormula";
import { CurrencyField } from "../../Common/CurrencyField";
import {
  individualIncomeTaxRate,
  yearType,
} from "../../Utilise/TaxTableHelpers";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

interface incomeCal {
  income: number;
  payFreq: string;
  year: yearType;
  ESGcheck: boolean;
  SLCheck: boolean;
  incomeTax: number;
  StudentLoanRepay: number;
  MedicareLevy: number;
}
export default function IncomeCal() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    income: 75000,
    payFreq: "Annually",
    year: 2021,
    ESGcheck: false,
    SLCheck: false,
    incomeTax: 0,
    StudentLoanRepay: 0,
    MedicareLevy: 0,
  });

  var { income, payFreq, year, ESGcheck, SLCheck, incomeTax } = state;

  const cal = (
    income: number,
    payFreq: string,
    year: yearType,
    ESGcheck: boolean,
    SLCheck: boolean
  ) => {
    setState({
      ...state,
      incomeTax: IncomeCalculator(income, payFreq, year, ESGcheck, SLCheck),
    });
  };

  // useEffect(() => {
  //   cal(
  //     income,
  //     "Annually",
  //     year,
  //     switchControl.ESGcheck,
  //     switchControl.SLCheck
  //   );
  // });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    console.log(event.target.name, value);
    setState({
      ...state,
      [event.target.name]: value,
    });

    console.log(state);

    cal(income, payFreq, year, ESGcheck, SLCheck);
  };

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <CurrencyField label="Jack" />
        <TextField
          id="income"
          name="income"
          className={"form-fields"}
          label={"Income " + payFreq}
          variant="outlined"
          defaultValue={income}
          onChange={
            onChange
            // (event) => {
            // setIncome(parseInt(event.target.value));
            // // trigger on next input key
            // // cal(income, payFreq, year);
            // // trigger on key in
            // cal(parseInt(event.target.value), payFreq, year);
            //}
          }
        />
        <TextField
          id="payFreq"
          name="payFreq"
          className={"form-fields"}
          select
          label="Select"
          onChange={onChange}
          defaultValue={payFreq}
          helperText="Please select pay frequency"
          variant="filled"
        >
          {payFrequency.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="year"
          select
          label="Select"
          defaultValue={year}
          onChange={
            onChange
            //(event) => {
            // let yr: yearType = parseInt(event.target.value);
            // setYear(yr);
            // cal(income, payFreq, yr);
          }
          helperText="Please select your currency"
          variant="filled"
        >
          {years.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <FormControlLabel
          control={
            <Switch checked={ESGcheck} onChange={onChange} name="ESGcheck" />
          }
          label="Employer Superannuation"
        />
        <FormControlLabel
          control={
            <Switch checked={SLCheck} onChange={onChange} name="SLCheck" />
          }
          label="Student Loans"
        />
      </form>
      <div>
        <NumberFormat
          value={incomeTax}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          renderText={(value) => <h1>{value}</h1>}
        />
      </div>
    </>
  );
}

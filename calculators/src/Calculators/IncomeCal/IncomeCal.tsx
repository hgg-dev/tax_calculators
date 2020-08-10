import React, { useEffect } from "react";
import { Button, TextField, MenuItem } from "@material-ui/core";
import NumberFormat from "react-number-format";
import { years, payFrequency } from "../../Utilise/helpers";
import { makeStyles } from "@material-ui/core/styles";
import { Console } from "console";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const IncomeCalculator = (incomeAmount: number, payFreq: string): number => {
  let income = incomeAmount;

  if (payFreq == "Weekly") {
    income * 52;
  } else if (payFreq == "Fortnightly") {
    income * 26;
  }

  if (income <= 18200) {
    return 0;
  } else if (income <= 37000) {
    return (income - 18200) * 0.19;
  } else if (income <= 90000) {
    return (income - 37000) * 0.325 + 3572;
  } else if (income <= 180000) {
    return (income - 90000) * 0.37 + 20797;
  } else {
    return (income - 180000) * 0.45 + 54097;
  }
};

export default function IncomeCal() {
  const classes = useStyles();
  const [year, setYear] = React.useState("2021");
  const [income, setIncome] = React.useState(75000);
  const [tax, setTax] = React.useState(0);
  const [payFreq, setPayFreq] = React.useState("Annually");

  const cal = (inc: number, freq: string) => {
    console.log(inc, freq);
    setTax(IncomeCalculator(inc, freq));
  };

  useEffect(() => {
    cal(income, "Annually");
  });

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="income"
          className={"form-fields"}
          label={"Income " + payFreq}
          variant="outlined"
          defaultValue={income}
          onChange={(event) => {
            setIncome(parseInt(event.target.value));
            // trigger on next input key
            cal(income, payFreq);
            // trigger on key in
            cal(parseInt(event.target.value), payFreq);
          }}
        />
        <TextField
          id="payFrequency"
          className={"form-fields"}
          select
          label="Select"
          value={payFreq}
          onChange={(event) => {
            setPayFreq(event.target.value);
            cal(income, event.target.value);
          }}
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
          value={year}
          onChange={(event) => {
            setYear(event.target.value);
            cal(income, event.target.value);
          }}
          helperText="Please select your currency"
          variant="filled"
        >
          {years.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </form>
      <div>
        <NumberFormat
          value={tax}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          renderText={(value) => <h1>{value}</h1>}
        />
      </div>
    </>
  );
}

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

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function IncomeCal() {
  const classes = useStyles();
  const [year, setYear] = React.useState("2021");
  const [income, setIncome] = React.useState(75000);
  const [tax, setTax] = React.useState(0);
  const [payFreq, setPayFreq] = React.useState("Annually");
  const [switchControl, setswitchControl] = React.useState({
    ESGcheck: false,
    SLCheck: false,
  });

  const cal = (inc: number, freq: string, yr: string) => {
    console.log(inc, freq);
    setTax(IncomeCalculator(inc, freq, yr));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setswitchControl({
      ...switchControl,
      [event.target.name]: event.target.checked,
    });
    console.log(switchControl);
  };

  useEffect(() => {
    cal(income, "Annually", year);
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
            // cal(income, payFreq, year);
            // trigger on key in
            cal(parseInt(event.target.value), payFreq, year);
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
            cal(income, event.target.value, year);
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
            cal(income, payFreq, event.target.value);
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
        <FormControlLabel
          control={
            <Switch
              checked={switchControl.ESGcheck}
              onChange={handleChange}
              name="ESGcheck"
            />
          }
          label="Employer Superannuation"
        />
        <FormControlLabel
          control={
            <Switch
              checked={switchControl.SLCheck}
              onChange={handleChange}
              name="SLCheck"
            />
          }
          label="Student Loans"
        />
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

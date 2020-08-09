import React from "react";
import { Button, TextField, MenuItem } from "@material-ui/core";
import NumberFormat from "react-number-format";

const IncomeCalculator = (income: number): number => {
  if (income <= 18200) {
    return 0;
  } else if (income <= 37000) {
    return (income - 18200) * 0.19;
  } else if (income <= 90000) {
    return (income - 37000) * 0.325 + 3572;
  } else if (income <= 180000) {
    return (income - 90000) * 37 + 20797;
  } else {
    return (income - 180000) * 0.45 + 54097;
  }
};

const years = [
  {
    value: "2021",
    label: "2021",
  },
  {
    value: "2020",
    label: "2020",
  },
  {
    value: "2019",
    label: "2019",
  },
  {
    value: "2018",
    label: "2018",
  },
];

const payFrequency = [
  {
    value: "Weekly",
    label: "Weekly",
  },
  {
    value: "Fortnightly",
    label: "Fortnightly",
  },
  {
    value: "Annually",
    label: "Annually",
  },
];

export default function IncomeCal() {
  const [year, setYear] = React.useState("2021");
  const [income, setIncome] = React.useState(0);
  const [tax, setTax] = React.useState(0);
  const [payFreq, setPayFreq] = React.useState("Annually");

  const yearhandleChange = (event: any) => {
    setYear(event.target.value);
  };
  const incomehandleChange = (event: any) => {
    // setIncome(event.target.value);

    let tax = IncomeCalculator(event.target.value);

    setTax(tax);
  };

  const payFreqhandleChange = (event: any) => {
    setPayFreq(event.target.value);
  };

  //   useEffect(() => {

  //   });

  return (
    <>
      <form noValidate autoComplete="off">
        <TextField
          id="income"
          label="Income"
          variant="outlined"
          onChange={incomehandleChange}
        />
        <TextField
          id="payFrequency"
          select
          label="Select"
          value={payFreq}
          onChange={payFreqhandleChange}
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
          onChange={yearhandleChange}
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

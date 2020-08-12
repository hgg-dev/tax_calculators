import {
  individualIncomeTaxRate,
  yearType,
  ESGRate,
} from "../../Utilise/TaxTableHelpers";
import { payFreqConverter } from "../../Utilise/CalenderHelpers";

export const IncomeCalculator = (
  incomeAmount: number,
  payFreq: string,
  year: yearType,
  ESGcheck: boolean,
  SLCheck: boolean
): any => {
  console.log("IncomeCalculator ran");
  let grossIncome = incomeAmount;

  // if (ESGcheck) {
  //   let yr = 2020;
  //   grossIncome = (grossIncome / (1 + ESGRate[year])) * 100;
  // }

  // Convert Pay Frequency to Annauly
  const rate = payFreqConverter.find((r) => r.frq === payFreq);
  if (rate) {
    grossIncome = grossIncome * rate.rate;
  }

  const rateYear = individualIncomeTaxRate[year];
  const rateTable = rateYear.find((r) => grossIncome < r.maxBracket);
  return rateTable
    ? (grossIncome - rateTable.rateFrom) * rateTable.rate + rateTable.taxbase
    : 0;
};

// for loop
// for (let i = 0; i < individualIncomeTaxRate[2020].length; i++) {
//   var val = individualIncomeTaxRate[2020];
//   if (income < val[i].maxBracket) {
//     return (income - val[i].rateFrom) * val[i].rate + val[i].taxbase;
//   }hin
// }

//   individualIncomeTaxRate[2020].forEach(function (val: any, i: any) {
//     console.log("individualIncomeTaxRate");
//     return 100;
//     // if (income < val.maxBracket) {
//     //   console.log("income < val.maxBracket");
//     //   return (income - val.rateFrom) * val.rate + val.taxbase;
//     // }
//   });
//};

// why error

//   if (income <= 18200) {
//     return 0;
//   } else if (income <= 37000) {
//     return (income - 18200) * 0.19;
//   } else if (income <= 90000) {
//     return (income - 37000) * 0.325 + 3572;
//   } else if (income <= 180000) {
//     return (income - 90000) * 0.37 + 20797;
//   } else {
//     return (income - 180000) * 0.45 + 54097;
//   }

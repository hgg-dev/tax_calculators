interface StudentLoanTable {
  maxBracket: number;
  rate: number;
}

interface StudentLoanIndex {
  2021: StudentLoanTable[];
}

export const StudentLoanTable: StudentLoanIndex = {
  2021: [
    { maxBracket: 46620, rate: 0 },
    { maxBracket: 53826, rate: 0.1 },
    { maxBracket: 57055, rate: 0.2 },
    { maxBracket: 60479, rate: 0.2 },
    { maxBracket: 67954, rate: 0.35 },
    { maxBracket: 67954, rate: 0.35 },
    { maxBracket: 72031, rate: 0.4 },
    { maxBracket: 76354, rate: 0.45 },
    { maxBracket: 80935, rate: 0.5 },
    { maxBracket: 85792, rate: 0.55 },
    { maxBracket: 90939, rate: 0.6 },
    { maxBracket: 96396, rate: 0.65 },
    { maxBracket: 102179, rate: 0.7 },
  ],
};

// https://www.ato.gov.au/Rates/HELP,-TSL-and-SFSS-repayment-thresholds-and-rates/#HELPandTSLrepaymentthresholdsandrates201

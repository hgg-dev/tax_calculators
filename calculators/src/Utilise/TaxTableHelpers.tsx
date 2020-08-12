export const ESG = {
  2021: 0.095,
  2020: 0.095,
  2019: 0.095,
};

interface IindividualIncomeTaxRate {
  maxBracket: number;
  rate: number;
  rateFrom: number;
  taxbase: number;
}

export interface year {
  2021: IindividualIncomeTaxRate[];
  2020: IindividualIncomeTaxRate[];
  2019: IindividualIncomeTaxRate[];
  2018: IindividualIncomeTaxRate[];
  2017: IindividualIncomeTaxRate[];
}

export const individualIncomeTaxRate: year = {
  2021: [
    { maxBracket: 18200, rate: 0, rateFrom: 0, taxbase: 0 },
    { maxBracket: 37000, rate: 0.19, rateFrom: 18200, taxbase: 0 },
    { maxBracket: 90000, rate: 0.325, rateFrom: 37000, taxbase: 3572 },
    { maxBracket: 180000, rate: 0.37, rateFrom: 90000, taxbase: 20797 },
    { maxBracket: 999999, rate: 0.45, rateFrom: 180000, taxbase: 54097 },
  ],
  2020: [
    { maxBracket: 18200, rate: 0, rateFrom: 0, taxbase: 0 },
    { maxBracket: 37000, rate: 0.19, rateFrom: 18200, taxbase: 0 },
    { maxBracket: 90000, rate: 0.325, rateFrom: 37000, taxbase: 3572 },
    { maxBracket: 180000, rate: 0.37, rateFrom: 90000, taxbase: 20797 },
    { maxBracket: 999999, rate: 0.45, rateFrom: 180000, taxbase: 54097 },
  ],
  2019: [
    { maxBracket: 18200, rate: 0, rateFrom: 0, taxbase: 0 },
    { maxBracket: 37000, rate: 0.19, rateFrom: 18200, taxbase: 0 },
    { maxBracket: 90000, rate: 0.325, rateFrom: 37000, taxbase: 3572 },
    { maxBracket: 180000, rate: 0.37, rateFrom: 90000, taxbase: 20797 },
    { maxBracket: 999999, rate: 0.45, rateFrom: 180000, taxbase: 54097 },
  ],
  2018: [
    { maxBracket: 18200, rate: 0, rateFrom: 0, taxbase: 0 },
    { maxBracket: 37000, rate: 0.19, rateFrom: 18200, taxbase: 0 },
    { maxBracket: 90000, rate: 0.325, rateFrom: 37000, taxbase: 3572 },
    { maxBracket: 180000, rate: 0.37, rateFrom: 90000, taxbase: 20797 },
    { maxBracket: 999999, rate: 0.45, rateFrom: 180000, taxbase: 54097 },
  ],
  2017: [
    { maxBracket: 18200, rate: 0, rateFrom: 0, taxbase: 0 },
    { maxBracket: 37000, rate: 0.19, rateFrom: 18200, taxbase: 0 },
    { maxBracket: 90000, rate: 0.325, rateFrom: 37000, taxbase: 3572 },
    { maxBracket: 180000, rate: 0.37, rateFrom: 90000, taxbase: 20797 },
    { maxBracket: 999999, rate: 0.45, rateFrom: 180000, taxbase: 54097 },
  ],
};

// https://www.ato.gov.au/Rates/Individual-income-tax-for-prior-years/

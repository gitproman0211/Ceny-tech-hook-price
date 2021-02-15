import { createEffect } from "effector";
import axios from "axios";

import baseState from "./base";

const formatCurrency = ({ rates, date }) => {
  const { ZAR, USD } = rates;
  return {
    date,
    zar: ZAR,
    usd: USD
  };
};

export const getCurrency = createEffect("getcurrency", {
  handler: params =>
    axios
      .get(`https://api.exchangeratesapi.io/latest?base=USD`)
      .then(({ data }) => formatCurrency(data))
});

export const currencyStore = baseState(getCurrency);

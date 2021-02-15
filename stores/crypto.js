import { createStore, createEffect, combine, createEvent } from "effector";
import axios from "axios";
import { baseCoinState } from "./base";

export const getCoins = createEffect("getcoins", {
  handler: params => {
    const url = params
      ? `https://myapi.ga/?name=${params}`
      : `https://myapi.ga/`;
      console.log(url)
    return axios.get(url).then(data => data.data);
  }
});

export const userStore = baseCoinState(getCoins);

export const searchCoin = createEvent("searchCoin");
export const filterCoinByname = createStore("").on(
  searchCoin,
  (oldTitle, newTitle) => newTitle
);

export const filterCoins = combine(
  userStore,
  filterCoinByname,
  (userStore, filterCoinByname) => ({
    ...userStore,
    data: userStore.data.filter(x =>
      x.key.includes(filterCoinByname.toUpperCase())
    )
  })
);

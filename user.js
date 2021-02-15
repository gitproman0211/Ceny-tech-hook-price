import { createStore, createEffect, combine, createEvent } from "effector";
import axios from "axios";

import {baseCoinState} from "./stores/base"

export const getCoins = createEffect("getcoins", {
  handler: params => axios.get(`https://myapi.ga/`).then(data => data.data)
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

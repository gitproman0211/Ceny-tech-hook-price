import { createEvent, createStore } from "effector";

export const setValue = createEvent("increment");
export const countStore = createStore(0).on(setValue, n => n + 1);

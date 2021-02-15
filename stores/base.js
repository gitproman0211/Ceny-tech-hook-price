import { createStore } from "effector";

const getInitialState = (data = [], loading = true, error = "") => ({
  error,
  loading,
  data
});

const baseState = api =>
  createStore(getInitialState())
    .on(api.done, (state, { result, params }) => getInitialState(result, false))
    .on(api.fail, (state, { error }) =>
      getInitialState([], false, "Error occured")
    );

export default baseState;

export const baseCoinState = api =>
  createStore(getInitialState())
    .on(api.done, (state, { result: { data }, params }) =>
      {
        window.status ="done";
        return getInitialState(data, false)
      }
    )
    .on(api.fail, (state, { error }) =>
      getInitialState([], false, "Error occured")
    );

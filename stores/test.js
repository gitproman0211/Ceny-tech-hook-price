import { writable } from "svelte/store";
import axios from "axios";

const initState = {
  loading: "idle",
  error: null,
  data: null
};
const status = {
  idle: "idle",
  loading: "loading",
  done: "done",
  error: "error"
};

export default () => {
  const { set, subscribe } = writable(initState);
  const postState = writable("");

  const _setData = ({ data = null, loading = status.idle, error = null }) => {
    set({ data, loading, error });
  };

  //GetData
  async function getData(url = "", params = {}) {
    try {
      _setData({ loading: status.loading });
      const { data } = await axios.get(url, { params });
      _setData({ loading: status.done, data });
    } catch (e) {
      _setData({ loading: status.error, error: e });
    }
  }

  //PostData
  async function post(url = "", body = {}) {
    try {
      postState.set(status.loading);
      await axios.post(url, body);
      postState.set(status.done);
    } catch (e) {
      postState.set(status.error);
    }
  }

  //updateData
  async function update(url, body = {}) {
    try {
      postState.set(status.loading);
      await axios.put(url, body);
      postState.set(status.done);
    } catch (e) {
      postState.set(status.error);
    }
  }

  //Delete-Data
  async function remove(url, body = {}) {
    try {
      postState.set(status.loading);
      await axios.delete(url);
      postState.set(status.done);
    } catch (e) {
      postState.set(status.error);
    }
  }

  return {
    subscribe,
    getData,
    post,
    update,
    remove,
    postState,
    status
  };
};

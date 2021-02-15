import App from "./App.svelte";

var script = document.createElement("script"),
  scripts = document.getElementsByTagName("script")[0];
script.src = "//www.sejda.com/js/sejda-js-api.min.js";
scripts.parentNode.insertBefore(script, scripts);

const app = new App({
  target: document.body
});

export default app;

<script>
  import { currencyStore } from "../stores/currency";
  let value = 1;
  export let selected;

  const formatValue = data => {
    if (data == "" || isNaN(data)) {
      return 1;
    }
    return parseFloat(data);
  };

  $: amount = formatValue(value);
</script>

<style>
  .view {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

 <div>
 <input bind:value class="input is-small" type="number" min="0.01" placeholder="Enter amount....">
  <div class="view">
  <small>R {selected&&(selected.zar * amount).toFixed(2)}</small>
  <small>$ {selected&&(selected.usd * amount).toFixed(2)}</small>
  </div>

  <!-- <div class="view">
    <small>R {selected&&(amount*$currencyStore.data.zar).toFixed(8)}</small>
  <small>$ {selected&&(amount*$currencyStore.data.usd).toFixed(8)}</small>
  </div> -->
 </div>
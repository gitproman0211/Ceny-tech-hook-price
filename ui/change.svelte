<script>
  let value = 1;
  let value2 = 1;
  export let selected;

  const formatValue = data => {
    if (data == "" || isNaN(data)) {
      return 1;
    }
    return parseFloat(data);
  };

  const formatCurrency = data => {
    return selected && data.toFixed(2);
  };

  $: amount = formatValue(value);
  $: amount2 = formatValue(value2);
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
  <small>R {formatCurrency(selected.zar * amount)}</small>
  <small>$ {formatCurrency(selected.usd * amount)}</small>
  </div>

   <input bind:value={value2} class="input is-small" type="number" min="0.01" placeholder="Enter amount....">
  <div class="view">
  <small>R {formatCurrency(selected.zar * amount2)}</small>
  <small>$ {formatCurrency(selected.usd * amount2)}</small>
  </div>

<h3>Profit</h3>

<p  class="view">
 <label>
  {value -value2}
 </label>
 <label>
 R {formatCurrency((selected.zar * amount)-(selected.zar * amount2))}
 </label>
</p>
  

 </div>
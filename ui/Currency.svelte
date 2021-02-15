<script>
  import { getCurrency, currencyStore } from "../stores/currency";

  getCurrency();

  let usdValue = 1;
  let zarValue =
    $currencyStore.loading == false &&
    $currencyStore.data.zar.toFixed(2) * usdValue;

  const onChangeUSD = ({ target: { value } }) => {
    usdValue = (value / $currencyStore.data.zar).toFixed(2);
  };

  const onChangeZar = ({ target: { value } }) => {
    zarValue = (value * $currencyStore.data.zar).toFixed(2);
  };
</script>

<style>
  .currency {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(2, 1fr);

    border: 1px solid #eeebbb;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 5px;
  }
</style>

<div class="currency">
 <div>
  <label>Zar = R{$currencyStore.loading == false &&$currencyStore.data.zar.toFixed(2)}</label>
  <input class="input is-small" value={zarValue}  type="number" min="0.01" step="0.01" on:input={onChangeUSD}/>
 </div>

  <div>
  <label>USD  = ${$currencyStore.loading == false &&$currencyStore.data.usd}</label>
  <input class="input is-small" value={usdValue} type="number" min="0.01" step="0.01" on:input={onChangeZar}/>
 </div>
</div>

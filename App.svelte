<script>
  import Button from "./Button.svelte";
  import Coin from "./Coin.svelte";
  import Modal from "./Modal.svelte";
  import NavBar from "./NavBar.svelte";
  import Thead from "./ui/Thead.svelte";
  import Currency from "./ui/Currency.svelte";
  import Detail from "./ui/Detail.svelte";
  import Change from "./ui/change.svelte";
  import {
    getCoins,
    userStore,
    filterCoins,
    filterCoinByname,
    searchCoin
  } from "./stores/crypto";

  import baseStore from "./stores/test";
  //import config from "./util";
  let modal;
  let selected = null;
  let search = "";
  let swap = false;

  //getCoins(null);

  const coinStore = baseStore();

  coinStore.getData("https://myapi.ga/");

  function view({ detail }) {
    selected = detail;

    modal.toggle();
  }

  function close() {
    selected = null;
  }

  function onSearch() {
    //getCoins(search);
    coinStore.getData("https://myapi.ga/", { name: search });
    search = "";
  }
</script>

<!-- <pre>
 {JSON.stringify($coinStore.data,null,2)}
</pre> -->

<NavBar/>
<br/>
<main class="container" id="pdf">
<Currency/>
<form  on:submit|preventDefault={onSearch}>
<input bind:value={search}  class="input is-small" type="text"  placeholder="Enter crypto...."/>
</form>

<br/>

{#if $coinStore.loading==coinStore.status.loading}
 <div>Loading...</div>
{:else if $coinStore.loading==coinStore.status.done}
<div class="table-container">
<table class="table is-striped is-fullwidth table is-narrow">

<tbody>
 	{#each $coinStore.data.data as data, i}
    <Coin {data} on:view={view}/>
	{/each}
</tbody>
</table>
</div>
{:else if $coinStore.loading==coinStore.status.error}
 <p>Error Occured, please try again. </p>
{/if}


</main>


<Modal on:close={close} bind:this={modal} title={selected&&selected.fullname}>
   {#if selected}

   {#if swap}
   <Change {selected}/>
    
    {:else}
<Detail {selected}/>
   {/if}
    
   {/if}
       <div slot="actions">
     <button class="button" on:click={()=>swap=!swap}>{swap?"changelly":"Convertor"}</button>
    </div>
</Modal>


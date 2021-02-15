<script>
 import { createEventDispatcher } from "svelte";
 const dispatch = createEventDispatcher();

 import { formatCoin } from "./lib";
 export let data;

 let me = formatCoin(data);
</script>
<style>
  .bg {
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30px 30px;
    height: 40px;
  }
</style>
<tr on:click={()=>dispatch("view",me)}>
<td class="bg" style="background-image:url('{me.img}')"/>
  <td>{me.name}</td>
  <td>{data.value.length&&data.value[0].amount}</td>
  <td>{me.usd}</td>
  
</tr>


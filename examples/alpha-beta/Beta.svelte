<script>
  import Alpha from "./Alpha.svelte";

  let clicked = false;
</script>

<div>
  <button
    on:click={() => {
      clicked = true;
    }}>Beta</button
  >
</div>

{#if clicked}
  <Alpha />
{/if}

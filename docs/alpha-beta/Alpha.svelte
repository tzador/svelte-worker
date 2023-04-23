<script>
  import Beta from "./Beta.svelte";

  let clicked = false;
</script>

<div>
  <button
    on:click={() => {
      clicked = true;
    }}>Alpha</button
  >
</div>

{#if clicked}
  <Beta />
{/if}

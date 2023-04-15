<script>
  let count = 0;
</script>

<h1>Hello, World</h1>

<button
  on:click={() => {
    count += 1;
  }}>Clicked {count} times</button
>

<style>
  h1 {
    color: red;
  }
</style>

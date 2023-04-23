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
    color: hotpink;
  }

  button {
    border: none;
    background-color: dodgerblue;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
  }

  * {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
</style>

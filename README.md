# svelte-worker

Service Worker to compile Svelte Files

## Examples

There are examples located in the following folders:

- [Simple counter component](docs/hello-world)
- [Two components importing each other](docs/alpha-beta)

## How to use

Copy the `svelte-worker.js` from [docs](docs) folder into root of your project.
Include it like below in your html.
Once done you can import your svelte components directly, and they will be compiled on the fly.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello Svelte</title>
  </head>
  <body>
    <div id="app"></div>

    <script src="/svelte-worker.js"></script>

    <script type="module">
      import MyComponent from "./MyComponent.svelte";
      new MyComponent({
        target: document.getElementById("app"),
      });
    </script>
  </body>
</html>
```

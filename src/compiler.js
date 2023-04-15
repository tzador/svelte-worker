import { compile } from "svelte/compiler";

export default (source, options) => {
  return compile(source, options);
};

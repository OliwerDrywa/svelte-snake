<script>
  import { onMount } from "svelte";
  import { board, style, rules, snake, up, right, down, left } from "./stores.js";

  let canvas;

  window.addEventListener("resize", () => {
    $rules.canvasSize = Math.min(
      600,
      Math.floor(window.innerWidth / 20) * 20,
      Math.floor(window.innerHeight / 20) * 20
    );
  });

  onMount(() => ($board = canvas.getContext("2d")));
</script>

<style>
  canvas {
    background-color: var(--color);
    border-radius: 7px;
    touch-action: none;
  }
</style>

<canvas
  id="canvas"
  bind:this={canvas}
  width={$rules.canvasSize}
  height={$rules.canvasSize}
  style="--color:{$style.canvasColor}" />
<slot />

<script>
  import { snake, rules, up, down, left, right } from "./stores.js";
  import { onMount } from "svelte";

  const controls = {};
  $rules.controls.up.map(
    key => (controls[key] = () => ($snake.nextDirection = up))
  );
  $rules.controls.right.map(
    key => (controls[key] = () => ($snake.nextDirection = right))
  );
  $rules.controls.down.map(
    key => (controls[key] = () => ($snake.nextDirection = down))
  );
  $rules.controls.left.map(
    key => (controls[key] = () => ($snake.nextDirection = left))
  );

  window.addEventListener("keydown", e => {
    if (controls[e.key]) controls[e.key]();
  });

  // onMount(() => {
  //   const canvasHammer = new Hammer(document.getElementById("canvas"));
  //   canvasHammer.on("panup", ev => {
  //     if (ev.pointerType === "touch") $snake.nextDirection = up;
  //   });
  //   canvasHammer.on("panright", ev => {
  //     if (ev.pointerType === "touch") $snake.nextDirection = right;
  //   });
  //   canvasHammer.on("pandown", ev => {
  //     if (ev.pointerType === "touch") $snake.nextDirection = down;
  //   });
  //   canvasHammer.on("panleft", ev => {
  //     if (ev.pointerType === "touch") $snake.nextDirection = left;
  //   });
  // });
</script>

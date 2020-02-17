<script>
  import { snake, rules, up, down, left, right } from "./stores.js";

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

  window.addEventListener("keydown", e => controls[e.key]());
</script>

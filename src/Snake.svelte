<script>
  import { board, snake, style } from "./stores.js";
  import { drawTile } from "./canvasControl.js";

  const drawSnake = body =>
    body.map(segment => drawTile($board, segment, $style.snakeColor));

  $: if ($board) drawSnake($snake.body);
</script>
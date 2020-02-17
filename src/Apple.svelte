<script>
  import { board, style, apple } from "./stores.js";
  import { drawTile } from "./canvasControl.js";

  const drawApple = pos => drawTile($board, pos, $style.appleColor);

  $: if ($board) drawApple($apple.pos);
</script>

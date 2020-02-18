<script>
  import { onMount } from "svelte";

  import { board, snake, apple, score, rules } from "./stores.js";
  import { clearCanvas } from "./canvasControl.js";

  // Game loop
  const step = t1 => t2 => {
    if (t2 - t1 > $rules.frameTime) {
      stepSnake();
      window.requestAnimationFrame(step(t2));
    } else {
      window.requestAnimationFrame(step(t1));
    }
  };

  // new random apple
  const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];

  let allPossibleTiles = [...Array(20 ** 2).keys()].map(i => ({
    x: (i - (i % 20)) / 20,
    y: i % 20
  }));

  const allUnusedTiles = () =>
    allPossibleTiles.filter(
      i =>
        ![...$snake.body, $apple.pos].some(j => (i.x === j.x) & (i.y === j.y))
    );

  const newApple = () => randomItem(allUnusedTiles());

  // snake movement
  const nextMoveIsValid = () =>
    $snake.direction.x !== $snake.nextDirection.x &&
    $snake.direction.y !== $snake.nextDirection.y;

  const edgeWrap = pos => ({ x: (20 + pos.x) % 20, y: (20 + pos.y) % 20 });
  const nextHead = () => {
    let next = nextMoveIsValid()
      ? {
          x: $snake.body[0].x + $snake.nextDirection.x,
          y: $snake.body[0].y + $snake.nextDirection.y
        }
      : {
          x: $snake.body[0].x + $snake.direction.x,
          y: $snake.body[0].y + $snake.direction.y
        };
    return $rules.edgeWrap ? edgeWrap(next) : next;
  };

  const willEat = () =>
    nextHead().x === $apple.pos.x && nextHead().y === $apple.pos.y;

  const willCollide = () =>
    $snake.body.some(
      segment => nextHead().x === segment.x && nextHead().y === segment.y
    ) ||
    (!$rules.edgeWrap &&
      (nextHead().x >= 20 ||
        nextHead().x < 0 ||
        nextHead().y >= 20 ||
        nextHead().y < 0));

  export const stepSnake = () => {
    if (willCollide()) {
      restart();
    } else {
      let newBody = [nextHead(), ...$snake.body];
      if (willEat()) {
        $apple.pos = newApple();
        $score += $rules.pointsPerApple;
      } else {
        clearCanvas($board, newBody.pop());
      }
      if (nextMoveIsValid()) $snake.direction = $snake.nextDirection;
      $snake.body = newBody;
    }
  };

  // restart game
  const restart = () => {
    clearCanvas($board);
    $snake = {
      body: [{ x: 1, y: 1 }],
      direction: { x: 1, y: 0 },
      nextDirection: { x: 1, y: 0 }
    };
    $apple = { pos: { x: 17, y: 1 } };
    $score = 0;
  };

  onMount(() => window.requestAnimationFrame(step(0)));
</script>

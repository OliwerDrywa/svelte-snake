<script>
  import Canvas from "./Canvas.svelte";
  import Snake from "./Snake.svelte";
  import Apple from "./Apple.svelte";
  import GameLoop from "./GameLoop.svelte";
  import PlayerControls from "./PlayerControls.svelte";
  import Score from "./Score.svelte";
</script>

<style>
  :global(body) {
    padding: 0;
    max-height: 90%
  }
  main {
    text-align: center;
    /* margin: 0 auto; */
  }

  h1 {
    color: #ff3e00;
    font-size: min(80px, 15vw);
    font-weight: 100;
  }
</style>

<main>
  <h1>!OUROBOROS</h1>
  <Canvas>
    <Snake />
    <Apple />
  </Canvas>
  <GameLoop />
  <PlayerControls />
  <Score />
</main>

<script>
  import Canvas from "./Components/Canvas.svelte";
  import Snake from "./Components/Snake.svelte";
  import Apple from "./Components/Apple.svelte";
  import GameLoop from "./Components/GameLoop.svelte";
  import PlayerControls from "./Components/PlayerControls.svelte";
  import Score from "./Components/Score.svelte";
</script>

<style>
  main {
    text-align: center;
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

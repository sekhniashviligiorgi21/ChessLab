<script setup>
  import { ref, computed } from 'vue' 
  import { useRouter, useRoute } from 'vue-router'

  const router = useRouter()
  const route = useRoute()

  const activeColor = "var(--title-btn-active-1), var(--title-btn-active-2)"
  const idleColor = "var(--title-btn-idle-1), var(--title-btn-idle-2)"

  function bgColor(buttonName) {
    return activeButton.value === buttonName ? activeColor : idleColor
  }

  function analyzeClick() {
    router.push('/')
  }

  function importClick() {
    router.push('/Review')
  }

  function insightsClick(){
    router.push('/Insights')
  }

  function gameClick() {
    router.push('/vsComputer')
  }

  function puzzlesClick() {
    router.push('/Puzzles')
  }

  const activeButton = computed(() => {
    if (route.path === '/Review') return 'import'
    if (route.path === '/Analysis') return 'analyze'
    if (route.path === '/Insights') return 'insight'
    if (route.path === '/vsComputer') return 'computer'
    if (route.path === '/Puzzles') return 'puzzles' 
    return 'analyze'
  })
</script>

<template>
  <div class="title-container">
    <h1 class="title">♔ CHESSERLY</h1>

    <button
      class="btn"
      :style="{ background: `linear-gradient(${bgColor('import')})` }"
      @click="importClick()"
      aria-label="Game Import"
    >
      <span class="btn-icon">🎮</span><span class="btn-label">GameImport</span>
    </button>

    <button
      class="btn"
      :style="{ background: `linear-gradient(${bgColor('analyze')})` }"
      @click="analyzeClick()"
      aria-label="Analyse"
    >
      <span class="btn-icon">🔎</span><span class="btn-label">Analyse</span>
    </button>

    <button
      class="btn"
      :style="{ background: `linear-gradient(${bgColor('insight')})` }"
      @click="insightsClick()"
      aria-label="Insights"
    >
      <span class="btn-icon">📊</span><span class="btn-label">Insights</span>
    </button>

    <button
      class="btn tooltip-btn"
      :style="{ background: `linear-gradient(${bgColor('computer')})` }"
      @click="gameClick()"
      disabled
      data-tooltip="Coming soon..."
      aria-label="VS Computer"
    >
      <span class="btn-icon">🤖</span><span class="btn-label">VS Computer</span>
    </button>

    <button
      class="btn tooltip-btn"
      :style="{ background: `linear-gradient(${bgColor('puzzles')})` }"
      @click="puzzlesClick()"
      disabled
      data-tooltip="Coming soon..."
      aria-label="Puzzles"
    >
      <span class="btn-icon">🧩</span><span class="btn-label">Puzzles</span>
    </button>
  </div>
</template>

<style scoped>
  .title-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: -0.5rem;
    margin-left: 2%;
    width: clamp(10rem, 20.7vw, 20rem);
    height: clamp(25rem, 37rem, 45rem);
    padding: 3%;
    box-sizing: border-box;
    background: linear-gradient(145deg, var(--panel-1), var(--panel-2));
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,0.08);
    box-shadow: 0 15px 35px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.1);
    scrollbar-color: grey transparent;
    scrollbar-width: none;
    position: relative; /* Added to establish stacking context */
    z-index: 20; /* Added to prevent account overlays from blocking buttons */
  }

  .title {
    font-family: "Trebuchet MS", "Century Gothic", system-ui, sans-serif;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: clamp(1.4rem, 2.6vw, 2rem);
    font-weight: 700;
    letter-spacing: 1px;

    background: linear-gradient(90deg, #d4a373, #faedcd);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    user-select: none;
  }

  button {
    width: clamp(3rem, 100%, 12.5rem);
    height: clamp(2.8rem, 5vh, 3.2rem);
    border-radius: 12px;
    border: none;
    margin-top: 1.5rem;

    font-size: clamp(15px, 1.5vw, 17px);
    font-weight: 600;
    letter-spacing: 0.4px;
    color: #fefefe;

    cursor: pointer;
    transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
  }

  .btn-icon {
    line-height: 1;
    flex-shrink: 0;
  }

  .btn-label {
    white-space: nowrap;
  }

  .btn {
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
  }

  button:hover:not(:disabled) {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.45);
  }

  button:active:not(:disabled) {
    transform: translateY(0) scale(0.99);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.35);
  }

  button:focus-visible {
    outline: 2px solid #faedcd;
    outline-offset: 3px;
  }

  /* Styling for disabled states */
  button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    transform: none !important;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  /* Instant Tooltip Implementation */
  .tooltip-btn {
    position: relative;
  }

  /* The tooltip box */
  .tooltip-btn::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 115%;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.85);
    color: #fff;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 500;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0s; /* 0s ensures it shows up instantly */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    z-index: 10;
  }

  /* Tiny arrow below the tooltip box */
  .tooltip-btn::before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.85) transparent transparent transparent;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0s;
    z-index: 10;
  }

  /* Trigger tooltip instantly on hover */
  .tooltip-btn:hover::after,
  .tooltip-btn:hover::before {
    opacity: 1;
  }

  @media (max-width: 767px) {
    .title-container {
      flex-direction: row;
      flex-wrap: nowrap;
      width: 100%;
      height: auto;
      margin: 0 0 0.5rem 0;
      padding: 0.4rem 0.6rem;
      justify-content: space-between;
      align-items: center;
      gap: 0.35rem;
      overflow-x: auto;
      z-index: 20;
    }
    .title {
      width: auto;
      margin: 0;
      margin-right: 0.2rem;
      flex-shrink: 0;
      font-size: clamp(1rem, 4.5vw, 1.25rem);
    }
    button {
      margin-top: 0;
      flex: 0 0 auto;
      width: clamp(2.3rem, 9.5vw, 2.6rem);
      height: clamp(2.3rem, 9.5vw, 2.6rem);
      min-width: 0;
      padding: 0;
      border-radius: 10px;
    }
    .btn-label {
      display: none;
    }
    .btn-icon {
      font-size: clamp(1.05rem, 5vw, 1.3rem);
    }

    /* Always display tooltips on mobile since hover isn't possible and buttons are disabled */
    .tooltip-btn::after {
      bottom: 135%;
      font-size: 11px;
      padding: 4px 7px;
      opacity: 1; 
    }
    .tooltip-btn::before {
      bottom: 120%;
      opacity: 1; 
    }
  }
</style>
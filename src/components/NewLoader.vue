<template>
  <div class="loader-container">
    <div class="loader-items-wrapper">
      <span class="loader-item"/>
      <span class="loader-item"/>
      <span class="loader-item"/>
      <span class="loader-item"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewLoader"
}
</script>

<style scoped lang="scss">

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  .loader-items-wrapper {
    perspective: 240px;
    position: relative;
  }

  .loader-item {
    transform: translate(-50%, -50%);
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--logo-color1) 0%, var(--logo-color2) 100%);

    &:nth-child(1) {
      z-index: 1;
      transform-origin: left;
    }

    &:nth-child(2) {
      z-index: 2;
      transform-origin: top;
    }

    &:nth-child(3) {
      z-index: 3;
      transform-origin: right;
    }

    &:nth-child(4) {
      z-index: 4;
      transform-origin: bottom;
    }
  }

  .loader-items-wrapper {
    animation: wrapper 4s infinite;
  }

  .loader-item {
    &:nth-child(1) {
      animation: first-box 4s infinite;
    }

    &:nth-child(2) {
      animation: second-box 4s infinite 100ms;
    }

    &:nth-child(3) {
      animation: third-box 4s infinite 150ms;
    }

    &:nth-child(4) {
      animation: fourth-box 4s infinite 250ms;
    }
  }
}

@keyframes wrapper {
  70% {
    transform: rotate(0);
  }
  75% {
    transform: rotate(100deg);
  }
  78% {
    transform: rotate(90deg);
  }
  86% {
    transform: rotate(90deg);
  }
  90% {
    transform: rotate(0);
  }
}

@keyframes first-box {
  20% {
    transform: translate(-50%, -50%) rotateY(-180deg);
  }
  27% {
    transform: translate(-50%, -50%) rotateY(-180deg);
  }
  32% {
    transform: translate(-80%, -50%) rotateY(-180deg);
  }
  37% {
    transform: translate(-50%, -50%) rotateY(-180deg);
  }
  76% {
    transform: translate(-50%, -50%) rotateY(-180deg);
  }
  86% {
    transform: translate(-50%, -50%) rotateY(0);
  }
}

@keyframes second-box {
  24% {
    transform: translate(-50%, -50%) rotateX(180deg);
  }
  29% {
    transform: translate(-50%, -80%) rotateX(180deg);
  }
  34% {
    transform: translate(-50%, -50%) rotateX(180deg);
  }
  39% {
    transform: translate(-50%, -50%) rotateX(90deg);
  }
  45% {
    transform: translate(-150%, -50%) rotateX(90deg);
  }
  50% {
    transform: translate(-110%, -50%) rotateX(180deg);
  }
  59% {
    transform: translate(-50%, -50%) rotateX(180deg);
  }
  74% {
    transform: translate(-50%, -50%) rotateX(180deg);
  }
  84% {
    transform: translate(-50%, -50%) rotateX(0);
  }
}

@keyframes third-box {
  22% {
    transform: translate(-50%, -50%) rotateY(180deg);
  }
  27% {
    transform: translate(-20%, -50%) rotateY(180deg);
  }
  32% {
    transform: translate(-50%, -50%) rotateY(180deg);
  }
  72% {
    transform: translate(-50%, -50%) rotateY(180deg);
  }
  82% {
    transform: translate(-50%, -50%) rotateY(0);
  }
}

@keyframes fourth-box {
  20% {
    transform: translate(-50%, -50%) rotateX(-180deg);
  }
  25% {
    transform: translate(-50%, -20%) rotateX(-180deg);
  }
  30% {
    transform: translate(-50%, -50%) rotateX(-180deg);
  }
  70% {
    transform: translate(-50%, -50%) rotateX(-180deg);
  }
  80% {
    transform: translate(-50%, -50%) rotateX(0);
  }
}

</style>

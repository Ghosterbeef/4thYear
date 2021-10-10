<template>
  <div class="loader-container">
    <div class="loader-items-wrapper">
      <span class="loader-item">
        <span class="drop"/>
        <span class="shadow"/>
      </span>
      <span class="loader-item">
        <span class="glitch"/>
        <span class="glitch"/>
      </span>
      <span class="loader-item"/>
      <span class="loader-item"/>
    </div>
    <div class="shadow-items-wrapper">
      <span class="shadow-item"/>
      <span class="shadow-item"/>
      <span class="shadow-item"/>
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
  align-items: center;
  justify-content: center;
  width: 1px;
  min-width: 100%;
  height: calc(var(--loader-item-size) * 4);

  & *::before,
  & *::after {
    content: "";
    position: absolute;
  }

  .loader-items-wrapper {
    position: relative;
    perspective: 200px;
    animation: wrapper var(--loader-speed) infinite;
  }

  .shadow-items-wrapper {
    position: relative;
    opacity: 0;
    filter: blur(1px);
    animation: shadow-items var(--loader-speed) infinite;

    .shadow-item {
      position: absolute;
      display: inline-block;
      top: 50%;
      left: 50%;
      z-index: 0;
      width: var(--loader-item-size);
      height: var(--loader-item-size);
      background: linear-gradient(135deg, var(--logo-color1) 0%, var(--logo-color2) 100%);

      &:nth-child(1) {
        transform-origin: left;
        transform: translate(-50%, -50%) rotateY(180deg);
      }

      &:nth-child(2) {
        transform-origin: right;
        transform: translate(-50%, -50%) rotateY(180deg);
      }

      &:nth-child(3) {
        transform-origin: bottom;
        transform: translate(-50%, -50%) rotateX(180deg);
      }
    }
  }

  .loader-item {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    width: var(--loader-item-size);
    height: var(--loader-item-size);
    transform: translate(-50%, -50%);
    background: linear-gradient(135deg, var(--logo-color1) 0%, var(--logo-color2) 100%);

    &:nth-child(1) {
      z-index: 1;
      transform-origin: left;
      animation: first-box var(--loader-speed) infinite;

      .drop {
        position: absolute;
        right: 60%;
        bottom: -70%;
        width: calc(var(--loader-item-size) / 12);
        height: calc(var(--loader-item-size) / 30);
        opacity: 0;
        animation: drop var(--loader-speed) infinite;
        background: linear-gradient(135deg, var(--logo-color1) 0%, var(--logo-color2) 100%);


        &::before, &::after {
          transform: rotateZ(90deg);
          width: calc(var(--loader-item-size) / 12);
          height: calc(var(--loader-item-size) / 20);
          background: linear-gradient(135deg, var(--logo-color1) 0%, var(--logo-color2) 100%);
        }

        &::before {
          right: 60%;
        }

        &::after {
          top: 20%;
          left: 50%;
        }
      }

      .shadow {
        position: absolute;
        top: 0;
        right: 0;
        width: var(--loader-item-size);
        height: var(--loader-item-size);
        opacity: 0;
        filter: blur(1px);
        animation: shadow var(--loader-speed) infinite;

        &::before, &::after {
          right: 0;
          width: 0;
          height: 0;
        }

        &::before {
          border-left: calc(var(--loader-item-size) / 1.2) solid transparent;
          border-top: calc(var(--loader-item-size) / 1.5) solid var(--logo-color1);
        }

        &::after {
          bottom: 0;
          border-left: calc(var(--loader-item-size) / 5) solid transparent;
          border-bottom: calc(var(--loader-item-size) / 2) solid var(--logo-color2);
        }
      }
    }

    &:nth-child(2) {
      z-index: 2;
      transform-origin: top;
      animation: second-box var(--loader-speed) infinite;

      .glitch {
        position: absolute;
        top: 34%;
        right: -2px;
        z-index: 10000;
        width: 118%;
        height: calc(var(--loader-item-size) / 10);
        opacity: 0;
        animation: second-box-glitch1 var(--loader-speed) infinite;

        &:nth-child(2) {
          top: 57%;
          width: 124%;
          animation: second-box-glitch2 var(--loader-speed) infinite;
        }

        &::before, &::after {
          height: 100%;
        }

        &::before {
          left: 0;
          width: 75%;
          transform: skew(30deg);
          background: linear-gradient(135deg, var(--logo-color1) 0%, var(--logo-color2) 100%);
        }

        &::after {
          right: 0;
          width: 25%;
          transform: skew(18deg);
          background: var(--section-background);
        }
      }
    }

    &:nth-child(3) {
      z-index: 3;
      transform-origin: right;
      animation: third-box var(--loader-speed) infinite;
    }

    &:nth-child(4) {
      z-index: 4;
      transform-origin: bottom;
      animation: fourth-box var(--loader-speed) infinite;
    }
  }
}

@keyframes wrapper {
  60% {
    transform: rotate(0);
  }
  70% {
    transform: rotate(100deg);
  }
  75% {
    transform: rotate(90deg);
  }
  90% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes shadow-items {
  69% {
    opacity: 0;
  }
  70% {
    opacity: 0.5;
    transform: translate(-5px, 9px) rotate(10deg);
  }
  74% {
    opacity: 0.3;
    transform: translate(-5px, 9px) rotate(10deg);
  }
  75% {
    opacity: 0;
  }

}

@keyframes first-box {
  1% {
    transform: translate(-50%, -50%) rotateY(0);
  }
  8% {
    transform: translate(-50%, -50%) rotateY(-180deg);
  }
  15% {
    transform: translate(-50%, -50%) rotateY(-180deg);
  }
  25% {
    transform: translate(-80%, -50%) rotateY(-180deg);
  }
  27% {
    transform: translate(-50%, -50%) rotateY(-180deg);
  }
  83% {
    transform: translate(-50%, -50%) rotateY(-180deg);
  }
  90% {
    transform: translate(-50%, -50%) rotateY(0);
  }
}

@keyframes drop {
  33% {
    opacity: 0;
  }
  34% {
    opacity: 1;
  }
  41% {
    opacity: 1;
  }
  42% {
    opacity: 0;
  }
}

@keyframes shadow {
  33% {
    right: -20%;
    opacity: 0;
    transform: rotate(-2deg);
  }
  34% {
    right: -30%;
    opacity: 0.5;
  }
  36% {
    right: -50%;
    opacity: 0.6;
  }
  40% {
    right: -55%;
    opacity: 0;
    transform: rotate(-2deg);
  }
}

@keyframes second-box {
  3% {
    transform: translate(-50%, -50%) rotateX(0);
  }
  10% {
    transform: translate(-50%, -50%) rotateX(180deg);
  }
  15% {
    transform: translate(-50%, -50%) rotateX(180deg);
  }
  25% {
    transform: translate(-50%, -80%) rotateX(180deg);
  }
  27% {
    transform: translate(-50%, -50%) rotateX(180deg);
  }
  45% {
    transform: translate(-50%, -50%) rotateX(180deg);
  }
  50% {
    transform: translate(-50%, -50%) rotateX(100deg);
  }
  55% {
    transform: translate(-150%, -50%) rotateX(100deg);
  }
  57% {
    transform: translate(-80%, -50%) rotateX(160deg);
  }
  59% {
    transform: translate(-50%, -50%) rotateX(180deg);
  }
  83% {
    transform: translate(-50%, -50%) rotateX(180deg);
  }
  90% {
    transform: translate(-50%, -50%) rotateX(0);
  }
}

@keyframes second-box-glitch1 {
  27% {
    opacity: 0;
    width: 110%;
  }
  29% {
    opacity: 0.9;
    width: 115%;
  }
  30% {
    opacity: 0.8;
    width: 117%;
  }
  32% {
    top: 34%;
    opacity: 0.9;
    width: 124%;
  }
  34% {
    top: 102%;
    opacity: 0.9;
  }
  38% {
    top: 102%;
    opacity: 0;
  }
  39% {
    top: 80%;
    opacity: 0;
    width: 117%;
  }
  40% {
    top: 80%;
    opacity: 0.9;
    width: 117%;
  }
  42% {
    opacity: 0;
  }
}

@keyframes second-box-glitch2 {
  28% {
    opacity: 0;
    width: 124%;
  }
  29% {
    opacity: 0.9;
    width: 118%;
  }
  30% {
    top: 57%;
    opacity: 0.8;
    width: 134%;
  }
  32% {
    opacity: 0.9;
    width: 124%;
  }
  34% {
    top: 90%;
    opacity: 0.9;
  }
  38% {
    top: 90%;
    opacity: 0;
  }
  39% {
    top: 71%;
    opacity: 0;
    width: 121%;
  }
  40% {
    top: 71%;
    opacity: 0.9;
    width: 121%;
  }
  50% {
    opacity: 0;
  }
}

@keyframes third-box {
  5% {
    transform: translate(-50%, -50%) rotateY(0);
  }
  12% {
    transform: translate(-50%, -50%) rotateY(180deg);
  }
  15% {
    transform: translate(-50%, -50%) rotateY(180deg);
  }
  25% {
    transform: translate(-20%, -50%) rotateY(180deg);
  }
  27% {
    transform: translate(-50%, -50%) rotateY(180deg);
  }
  83% {
    transform: translate(-50%, -50%) rotateY(180deg);
  }
  90% {
    transform: translate(-50%, -50%) rotateY(0);
  }
}

@keyframes fourth-box {
  7% {
    transform: translate(-50%, -50%) rotateX(0);
  }
  14% {
    transform: translate(-50%, -50%) rotateX(-180deg);
  }
  15% {
    transform: translate(-50%, -50%) rotateX(-180deg);
  }
  25% {
    transform: translate(-50%, -20%) rotateX(-180deg);
  }
  27% {
    transform: translate(-50%, -50%) rotateX(-180deg);
  }
  83% {
    transform: translate(-50%, -50%) rotateX(-180deg);
  }
  90% {
    transform: translate(-50%, -50%) rotateX(0);
  }
}

</style>

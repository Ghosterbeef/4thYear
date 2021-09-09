<template>
  <div class="loader">
    <svg viewBox="0 0 100 100">
      <g>
        <circle cx="73.801" cy="68.263" fill="#e15b64" r="3">
          <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50"
                            times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s"
                            begin="0s"></animateTransform>
        </circle>
        <circle cx="68.263" cy="73.801" fill="#f47e60" r="3">
          <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50"
                            times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s"
                            begin="-0.062s"></animateTransform>
        </circle>
        <circle cx="61.481" cy="77.716" fill="#f8b26a" r="3">
          <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50"
                            times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s"
                            begin="-0.125s"></animateTransform>
        </circle>
        <circle cx="53.916" cy="79.743" fill="#abbd81" r="3">
          <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50"
                            times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s"
                            begin="-0.187s"></animateTransform>
        </circle>
        <circle cx="46.084" cy="79.743" fill="#849b87" r="3">
          <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50"
                            times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s"
                            begin="-0.25s"></animateTransform>
        </circle>
        <circle cx="38.519" cy="77.716" fill="#6492ac" r="3">
          <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50"
                            times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s"
                            begin="-0.312s"></animateTransform>
        </circle>
        <circle cx="31.737" cy="73.801" fill="#637cb5" r="3">
          <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50"
                            times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s"
                            begin="-0.375s"></animateTransform>
        </circle>
        <circle cx="26.199" cy="68.263" fill="#6a63b6" r="3">
          <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50"
                            times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s"
                            begin="-0.437s"></animateTransform>
        </circle>
        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;0 50 50" times="0;1"
                          keySplines="0.5 0 0.5 1" repeatCount="indefinite"
                          dur="1.4925373134328357s"></animateTransform>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Loader"
}
</script>

<style scoped lang="scss">
.loader {
  display: flex;

  svg {
    margin: 0 auto;
    width: 200px;
    max-width: 80%;
    aspect-ratio: 1/1;
  }
}
</style>

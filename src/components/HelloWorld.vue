<template>
  <w-app>
    <h1>Vue 3 with Wave UI</h1>

    <div class="mxa ma4">
      <w-button
        class="ma1 "
        target="_blank"
        route="https://v3.vuejs.org/"
        bg-color="primary"
        outline
        xl
        >Vue CLI
      </w-button>

      <w-button
        class="ma1"
        target="_blank"
        route="https://antoniandre.github.io/wave-ui/"
        bg-color="warning"
        outline
        xl
        >Wave UI</w-button
      >
    </div>
    <!-- <w-button class="ma1" target="_blank"
  route="https://github.com/antoniandre/wave-ui" bg-color="warning" outline xl>warning</w-button> -->

    <div class="mxa ma10">
      <h3>Installed CLI Plugins</h3>

      <ul class="ma5">
        <li>
          <a
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
            target="_blank"
            rel="noopener"
            >babel</a
          >
        </li>
        <li>
          <a
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
            target="_blank"
            rel="noopener"
            >router</a
          >
        </li>
        <li>
          <a
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
            target="_blank"
            rel="noopener"
            >vuex</a
          >
        </li>
        <li>
          <a
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
            target="_blank"
            rel="noopener"
            >eslint</a
          >
        </li>
      </ul>
    </div>
  </w-app>
</template>


<style>
li  {
  list-style: none;
  
}
a {
  color: #19998f;
  font-size: 1.3rem;
}
</style>
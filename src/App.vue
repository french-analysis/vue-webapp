<template>
<div>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="http://bulma.io">
        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>

      <div class="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navMenuExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item " href="#/Network">Network</a>
        <a class="navbar-item " href="#/Hashtags">Trends</a>
      </div>
    </div>
  </nav>
  <div id="app">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

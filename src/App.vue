<template>
<div>
    <div class="tabs is-centered">
      <ul>
        <li class="is-active"><a href="#/Network">Network</a></li>
        <li><a href="#/Trends">Trends</a></li>
        <li><a href="#/Hashtags">Hashtags</a></li>
        <li><a href="#/URLS">URLS</a></li>
      </ul>
    </div>
  <div id="app" style="padding-right:15%; padding-left:15%;">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

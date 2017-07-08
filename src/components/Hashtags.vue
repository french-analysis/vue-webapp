<template lang="html">
<div>
  <div class="tabs is-centered">
    <ul>
      <li class="is-active"><a>Hashtags</a></li>
      <li><a href="#/URLS">URLS</a></li>
    </ul>
  </div>
  <div class="container is-fluid" style="padding-right:15%; padding-left:15%;">
    <div class="hashtag" v-for="hashtag in hashtag_counter">
      <span id = "makeLeft">#{{ hashtag["hashtag"] }}</span><span id = "makeRight">{{ hashtag["count"] }}</span>
      <br style="clear:both;"/>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Hashtags',
  data () {
    return {
      hashtag_counter: []
    }
  },
  created () {
    axios.get(`http://127.0.0.1:5000/hashtags`)
    .then(response => {
      // JSON responses are automatically parsed.
      console.log(response.data)
      this.hashtag_counter = response.data
    })
    .catch(e => {
      console.log('axios call throws error')
      this.errors.push(e)
    })
  }
}
</script>

<style>
.hashtag {
  width: 50%;
  border : 1px solid #dedede;
  border-radius : 5px;
  padding : 10px;
  margin-bottom : 10px;
}

#makeLeft{
float: left;
}

#makeRight{
float: right;
}
</style>

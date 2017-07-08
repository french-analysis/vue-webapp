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
export default {
  name: 'Hashtags',
  data () {
    return {
      hashtag_counter: [
        {
          'hashtag': 'Macron',
          'count': 7570
        },
        {
          'hashtag': 'CongresVersailles',
          'count': 4764
        },
        {
          'hashtag': 'SimoneVeil',
          'count': 3732
        },
        {
          'hashtag': 'NowPlaying',
          'count': 3108
        },
        {
          'hashtag': 'DPG',
          'count': 2876
        },
        {
          'hashtag': 'EdouardPhilippe',
          'count': 1693
        },
        {
          'hashtag': 'DirectAN',
          'count': 1468
        },
        {
          'hashtag': 'Veil',
          'count': 1403
        },
        {
          'hashtag': 'Iran',
          'count': 1360
        },
        {
          'hashtag': 'LREM',
          'count': 1264
        },
        {
          'hashtag': 'CeuxQuiNeSontRien',
          'count': 1169
        },
        {
          'hashtag': 'FreeIran',
          'count': 1129
        },
        {
          'hashtag': 'Ferrand',
          'count': 914
        },
        {
          'hashtag': 'France',
          'count': 852
        },
        {
          'hashtag': 'Hollande',
          'count': 848
        }
      ]
    }
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

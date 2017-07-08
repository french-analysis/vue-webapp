<template lang="html">
<div>
	<div class="tabs is-centered">
      <ul>
        <li><a href="#/Hashtags">Hashtags</a></li>
        <li class="is-active"><a>URLS</a></li>
      </ul>
    </div>
	<div class="container is-fluid" style="padding-right:15%; padding-left:15%;">
	  <div class="notification is-primary">
	    <button class="delete"></button>
	    Yay! You successfully landed on the <strong>URLS</strong> page!
	  </div>
	  <div class="box">
		  <article class="media">
		    <div class="media-left">
		      <figure class="image is-64x64">
		        <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
		      </figure>
		    </div>
		    <div class="media-content">
		      <div class="content">
		        <p>
		          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
		          <br>
		          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
		        </p>
		      </div>
		      <nav class="level is-mobile">
		        <div class="level-left">
		          <a class="level-item">
		            <span class="icon is-small"><i class="fa fa-reply"></i></span>
		          </a>
		          <a class="level-item">
		            <span class="icon is-small"><i class="fa fa-retweet"></i></span>
		          </a>
		          <a class="level-item">
		            <span class="icon is-small"><i class="fa fa-heart"></i></span>
		          </a>
		        </div>
		      </nav>
		    </div>
		  </article>
		</div>
	</div>
</div>
</template>
<script>
export default {
  name: 'URLS'
}
</script>

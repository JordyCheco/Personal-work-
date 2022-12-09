<script setup lang="ts">
import App from '../App.vue'
import Activity from '../components/Activity/Activity.vue'
</script>

<template>
  <main>
   <Activity/>
  </main>
  <article class="panel is-danger">
  <p class="panel-heading">
    See how your friends are doing
  </p>
  <div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://th.bing.com/th/id/R.393101b24b2969c299e3b260db9894c1?rik=rxgs3N3pF8Teaw&pid=ImgRaw&r=0" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>Monkey D. Luffy</strong> <small>@Strawhat</small> <small>31m</small>
          <br>
         Just did a 5k run!
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
  <div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://i.pinimg.com/originals/e9/be/67/e9be67dd130aee203aaed715ddfcf75c.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>Roronoa Zoro</strong><small>@Zoro</small> <small>20m</small>
          <br>
         Just Benched 300lbs!
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://yt3.ggpht.com/a/AATXAJwO2wn_C1sxmh5dZca6Vvdryn9KCtTOox0NDA=s900-c-k-c0xffffffff-no-rj-mo" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>Sanji</strong> <small>@Blackfoot</small> <small>31m</small>
          <br>
          Ran towards some beautiful ladies for 1000 miles today!
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://i.pinimg.com/736x/33/bb/f1/33bbf1143c020216614fe382db94f72f.jpg" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>Goku</strong> <small>@Kakarot</small> <small>5s</small>
          <br>
          Hey I'm Goku! @Zoro you seem strong enough to chanllenge me in a PR! ;)
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://cdn-images-1.medium.com/max/1200/1*rupxSxU5pKa_HDZ7zYGdqg.jpeg">
    </p>
  </figure>
  <div class="media-content">
    <div class="field">
      <p class="control">
        <textarea class="textarea" placeholder="Add a comment..."></textarea>
      </p>
    </div>
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <a class="button is-info">Submit</a>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <label class="checkbox">
            <input type="checkbox"> 
          </label>
        </div>
      </div>
    </nav>
  </div>
</article>
</div>
  
</article>
  
</template>

<template>
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
  <div class="comments">
        <div class="reply">
            <div class="avatar">
                <img :src="current_user.avatar" alt="">
            </div>
            <textarea>
            <input 
                type="text" 
                v-model.trim="reply" 
                class="reply--text" 
                placeholder="Leave a comment..."
                maxlength="250"
                required
                @keyup.enter="submitComment"
            />
            </textarea>
            <button class="reply--button" @click.prevent="submitComment"><i class="fa fa-paper-plane"></i> Send</button>
        </div>
    </div>
</article>
</div>
  
</article>
  
    <div class="comments">
        <div :class="comments_wrapper_classes">
            <single-comment 
                v-for="comment in comments"
                :comment="comment"
                :key="comment.id"
            ></single-comment>
        </div>
        <hr>
        <div class="reply">
            <div class="avatar">
                <img :src="current_user.avatar" alt="">
            </div>
            <input 
                type="text" 
                v-model.trim="reply" 
                class="reply--text" 
                placeholder="Leave a comment..."
                maxlength="250"
                required
                @keyup.enter="submitComment"
            />
            <button class="reply--button" @click.prevent="submitComment"><i class="fa fa-paper-plane"></i> Send</button>
        </div>
    </div>
</template>

<script lang="ts">
import singleComment from './SingleComment.vue';
    export default {
        name: 'comments',
        components: {
            singleComment
        },
        data() {
            return {
                reply: ''
            }
        },
        methods: {
            submitComment() {
                if(this.reply != '') {
                    this.$emit('submit-comment', this.reply);
                    this.reply = '';
                }
            }
        },
        props: ['comments', 'current_user', 'comments_wrapper_classes']
    }
</script>

<style scoped>
.comments {
    margin-top: 20px;
    padding: 20px;
    padding-top: 0;
}

.comments-wrapper {
    max-height: 250px;
    overflow-y: auto;
    padding-right: 10px;
}

.custom-scrollbar::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    -moz-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #fff;
}

.custom-scrollbar::-webkit-scrollbar
{
    width: 8px;
    background-color: #fff;
}

.custom-scrollbar::-webkit-scrollbar-thumb
{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    -moz-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
}

/* Reply component */
.reply {
    display: flex;
    position: relative;
    align-items: center;
    background-color: #EBEBEB;
    border-radius: 30px;
    padding: 5px 10px;
    overflow: hidden;
}

.reply .avatar {
    position: absolute;
}

.reply .avatar > img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
}

.reply .reply--text {
    min-height: 40px;
    padding: 10px 10px 10px 55px;
    margin-right: 10px;
    border: 0;
    color: #333;
    width: 100%;
    outline: 0;
    background-color: transparent;
    box-shadow: none;
}

.reply input.reply--text:valid {
    margin-right: 71px;
}

.reply input.reply--text:valid + .reply--button {
    right: 10px;
}

.reply .reply--button {
    position: absolute;
    right: -100px;
    border: 1px solid #2a629c;
    background-color: transparent;
    color: #2a629c;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 0.375rem 0.75rem;
    font-size: 15px;
    line-height: 1.5;
    border-radius: 30px;
    transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out, right 0.25s ease-in-out;
    outline: 0;
}

.reply .reply--button:hover {
    color: #fff;
    background-color: #2a629c;
}

.reply .reply--button:focus,
.reply .reply--button:active {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

hr {
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>
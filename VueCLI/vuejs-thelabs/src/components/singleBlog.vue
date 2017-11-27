<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>Author: {{blog.author}}</p>
        <ul>
            <li v-for="category in blog.categories">
                {{category}}
            </li>
        </ul>
        <router-link to="/" class="back-to-blogs">
            <div>Back to Blogs</div>
        </router-link>
    </div>
</template>

<script>
export default {
  data() {
      return {
          id: this.$route.params.id,
          blog: {

          }
      }
  },
  created() {
      this.$http.get('https://vue-playlist-c49fd.firebaseio.com/posts/' + this.id + '.json').then(function(data) {
          return data.json();
      }).then(function(data) {
          this.blog = data;
      });
  }
}
</script>

<style scoped>

#single-blog {
    max-width: 960px;
    margin: 0 auto;
}

.back-to-blogs {
    margin-top: 20px;
}
</style>


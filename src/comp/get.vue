<template>
  <div>

    <h1 class="d display-4 text-center m-4">These Are The Members Of This Site</h1>

    <div class="list p-2 text-center" v-for="blog in blogs">
             <router-link class="li" v-bind:to="'/get/'+ blog.id">{{blog.name}}</router-link>

    </div>



<footer class="lead text-center bg-success fixed-bottom">Copyrights Mohammed Kamil &copy 2018</footer>
  </div>
</template>

<script>
export default {

  data () {
    return {
      blogs:[]
    }
  },
  created(){
     this.$http.get('https://the-best-79ee3.firebaseio.com/posts.json').then(function(data){
       return data.json();
     }).then(function(data){
       var carts = [];
       for(let key in data){
         data[key].id = key;
         carts.push(data[key]);
       }
       this.blogs = carts;
     });
  }
}
</script>

<style scoped>
.d{
  padding:10px;
  background-color:rgba(0,0,0,0.6);
  border-radius:40px;
}
.list{
  max-width:800px;
  margin:20px auto;
  background-color:rgba(0,0,0,0.6);
  border-radius:20px;
  padding:20px;
}
.li{
  font-size:30px;
  text-decoration:none;
  transition:.5s;
  color:#fff;
}
.li:hover{
  color:#FF962C;
}



</style>

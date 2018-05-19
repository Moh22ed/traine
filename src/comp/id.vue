<template>
  <div>
    <div class="container pt-5">
    <table class="table text-center lead">
      <thead class="bg-dark">
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
      </thead>
      <tbody class="text-dark">
        <tr>
          <td>{{blog.name}}</td>
          <td>{{blog.email}}</td>
          <td>{{blog.phone}}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
    blog:{},
    id:this.$route.params.id
    }
  },
  created(){
    this.$http.get('https://the-best-79ee3.firebaseio.com/posts/' + this.id + '.json').then(function(data){
     return data.json();
   }).then(function(data){
     this.blog = data;
   });
  }
}
</script>

<style>



</style>

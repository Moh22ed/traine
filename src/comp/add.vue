<template>
  <div>
    <div v-if="!show">
    <div class="container">
<h1 class="display-4 text-dark  text-center">You can send me your info through this form below</h1>

<div class="row my-5 text-center">
  <div class="form col-lg-6">
    <h1 class="text-center text-light lead my-4">Fill Out This form</h1>
    <div class="form-group">
      <input type="text" class="form-control form-control-md" placeholder="Full Name" v-model="blog.name">
    </div>
    <div class="form-group">
      <input type="Email" class="form-control form-control-md" placeholder="Email Address" v-model="blog.email">
    </div>
    <div class="form-group">
      <input type="text" class="form-control form-control-md" placeholder="Phone Number" v-model="blog.phone">
    </div>
    <input type="submit" class="btn btn-outline-success btn-block" v-if="!show" @click="post">
  </div>
  <div class="col-lg-6 text-dark">
    <h1>Be One Of Our Members</h1>
    <div class="d-flex d-row lead">
      <div class="p-4 align-self-start">
      adipisicing aesentium dolor optio sequi omnis nesciunt cupiditate sapiente! Voluptate provident tempore quidem aperiam nisi repellat magnam ipsa.
       </div>
    </div>
    <div class="d-flex d-row lead">
      <div class="p-4 align-self-start">
      rcitationem temporibus voluptate, eum blanditiis ullam recusandae a dicta doloribus animi nostrum libero nemo amet sed incidunt nulla, id eligendi.
     </div>
    </div>
  </div>
</div>
</div>
<footer class="lead text-center bg-success p-2 fixed">Copyrights Mohammed Kamil &copy 2018</footer>
</div>
<!--container-->
<div v-if="show">
<div class="container">
  <h1 class="display-4 text-dark  text-center">Thank You For Sending Me Your Information</h1>

  <div class="c p-3 text-dark">
   <p class="lead">Name: {{blog.name}}</p>
   <p class="lead">Email: {{blog.email}}</p>
   <p class="lead">Phone Number: {{blog.phone}}</p>
  </div>
</div>
</div>


  </div>
</template>

<script>
export default {

  data () {
    return {
      blog:{
        name:'',
        email:'',
        phone:''
      },
      show:false

    }
  },
  methods:{
    post:function(){
    this.$http.post('https://the-best-79ee3.firebaseio.com/posts.json', this.blog).then(function(data){
      console.log(data);
      this.show = true;
    });
  }
  }
}
</script>

<style scoped>
.form{
  background-color:rgba(0,0,0,0.6);
  padding:20px;
  border-radius:10px;
}
.c{
  max-width:800px;
  border:1px #333 solid;
  margin:40px auto;
  border-radius:20px;
}



</style>

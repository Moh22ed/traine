<template>
  <div>
    <div id="sec">

  <div class="dark-overlay">
    <div class="container">

    <div class="home-inner">
      <div class="row lead">
        <div class="col-lg-8  d-none d-lg-block">
          <div class="d-flex d-row">
           <div class="p-4">
            Subscripe to our news letter so you give us ideas about what you want to do; we will give you an optinal suggestions to build your projects; ask us questions about how things works.
           </div>
          </div>
          <div class="d-flex d-row">
           <div class="p-4 align-self-end">
           If you are an educator and intrested in joining to our team Subscripe also and tells about what you do and we will see, if we are intersted we will be in touch.
           </div>
          </div>
          <div class="d-flex d-row">
           <div class="p-4 align-self-end">
            Help other members and groups if you are intersted, give advices, help them to build projects, or get better experiance by learning from others.
           </div>
          </div>
        </div>
        <div class="col-lg-4">
          <p class="display-4">Help Us Build Your Projects </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<section id="about" class="pb-4">
<div class="container text-center">
  <h1 class="display-4 ">About</h1>
  <p class="p-1 lead">This website been created by Mohammed Kamil. This website is just a demo for training and nothing is true about it .</p>
    <p class="lead p-1">Send form from the button below</p>
      <a href="/add" class="btn btn-outline-success">Send Form</a>
</div>
</section>
<section id="members" class="p-3">
<div class="container text-center text-dark">
<h1 class="display-4">Members</h1>
<p class="lead my-3">These are the members of the main group</p>
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th>Name</th>
      <th>Email Address</th>
      <th>Phone Number</th>
    </tr>
  </thead>
  <tbody class="text-dark">
    <tr>
      <td>Mohammed Kamil</td>
      <td>Moh333ed@gmail.com</td>
      <td>333-333-4444</td>
    </tr>
  </tbody>
  <tbody class="text-dark">
    <tr>
      <td>Murtadha Kamil</td>
      <td>martt2000@gmail.com</td>
      <td>222-333-4444</td>
    </tr>
  </tbody>
  <tbody class="text-dark">
    <tr>
      <td>Murtadha hrashii</td>
      <td>hrashi231@gmail.com</td>
      <td>222-111-1234</td>
    </tr>
  </tbody>

</table>
</div>
</section>
<footer class="lead text-center bg-success p-2 fixed">Copyrights Mohammed Kamil &copy 2018</footer>
  </div>
</template>
<script>
export default {

  data () {
    return {

    }
  }
}
</script>

<style scoped>

#sec{
  background:url('../assets/pic.jpg') no-repeat;
  background-size:cover;
  min-height: 510px;
  background-attachment:fixed;

}

.dark-overlay{
 position:absolute;
  background-color:rgba(0,0,0,0.7);
 left:0;
 width:100%;
 min-height:510px;

}

.home-inner{
  padding-top:100px;
}

#about{
  background:#333;

}


</style>

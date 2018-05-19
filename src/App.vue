<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-success navbar-dark">
      <div class="container">
            <a href="/" class="navbar-brand">MProject</a>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#TeTka">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="TeTka">
        <div class="navbar-nav ml-auto">
          <a href="/add" class="nav-link nav-item">Add</a>
          <a href="/get" class="nav-link nav-item">Members</a>
        </div>
      </div>
</div>
    </nav>

  <router-view></router-view>

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

<style>



body{
  background-color:#ccc;
  color:#fff;
}

</style>

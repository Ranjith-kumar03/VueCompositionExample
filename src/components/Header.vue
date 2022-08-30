<template>
  <div class="headerContainer">
    <div class="logo">
      <img src="" alt="" />
      logo
    </div>
    <div class="menuContainer">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/contactus">Contact Us</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.headerContainer {
  width: 100%;
  height: 62px;
  background-color: rgb(195, 14, 14);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position:sticky;
  position: relative;
  top: 0px;
  z-index: 999;
}
.logo{
    width:20%;
    background-color: chartreuse;
    height: 62px;
    display: flex;
    align-items: center;
    justify-content:center ;

}
.menuContainer{
    width: 80%;
}
.headerContainer .menuContainer nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
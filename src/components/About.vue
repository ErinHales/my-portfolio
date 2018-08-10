<template>
<div class="aboutMePage hide">
    <div class="circle">
        <img src="http://i67.tinypic.com/2cekeab.jpg" alt="">
    </div>
    <div class="content">
        <p></p>
    </div>
    <router-link to="/"><button class="back">Back</button></router-link>
    <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      msg: "About Component"
    };
  }
};
</script>

<style>
.aboutMePage {
    width: 100%;
    min-height: 100vh;
    color: white;
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #076982;
}

.circle {
    border-radius: 50%;
    background-color: rgba(255,255,255,0.2);
    padding: 40px;
    margin: 50px;
}

.circle img {
    width: 100px;
}

.content {
    width: 60%;
}

.back {
    background-color: #044252;
    border-radius: 30px;
    border: none;
    margin: 20px;
    font-size: 30px;
    color: white;
    padding: 10px;
}
</style>
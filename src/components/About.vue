<template>
<div class="aboutMePage hide">
    <div class="circle">
        <img src="http://i67.tinypic.com/2cekeab.jpg" alt="">
    </div>
    <div class="content">
        <p>I grew up in a family of 7 in rural Wyoming.  A large portion of my life has been spent outside: camping, hiking, riding my bike, kayaking, etc.  I learned to entertain myself with what I had, and I loved growing up in the country.</p>  
        <p>One of my greatest passions is music.  My main instrument is the violin.  I started learning it in second grade and I now play in the Wasatch Symphony.  In high school, I was a member of the Star Valley High School Bluegrass Band. I played the fiddle and mandolin, and I spent a lot of spare weekends doing gigs and recording CDs.  I also play the piano and the steel drum.</p>
        <p>Two of the values that I really try to embody are the values of hard work and learning. Coming into Dev Mountain, I knew that I wanted to push myself and that I would get out of it what I put into it.  Because of that, it has been an amazing experience.  I've learned that I can do really hard things. I've also discovered that I really enjoy coding.  I love the challenge, I love trying to come up with solutions, and I love trying to figure out new technologies.  I recognize that it doesn't matter how long I code or how good I get at something, there will constantly be newer technologies and better ways to do things, so I want to be a maleable.  I want to be teachable and ready to learn.</p>
    </div>
    <router-link to="/"><button class="back">Back</button></router-link>
    <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "About",
  mounted() {
      window.scrollTo(0, 0);
  },
  data() {
    return {
      msg: "About Component"
    };
  }
};
</script>

<style>
button {
    outline: none;
}

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

<template>
<div class="hello">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous">
    <div id="homePage">
        <!-- <img class="homePageImg parallax-window" src="http://i67.tinypic.com/4uymbs.jpg" alt=""> -->
      <div class="homePageImg"></div>
      <div class="nav">
        <h3>Erin</h3>
        <div class="navButtons">
          <img src="http://i65.tinypic.com/2d7widc.jpg" alt="" @click='toggleNav'>
          <a href="#" v-scroll-to="{element: '#homePage', duration: 2000}" @click='closeNav'><h3>home</h3></a>
          <a href="#" v-scroll-to="{element: '#projects', duration: 2000}"         @click='closeNav'><h3>projects</h3></a>
          <a href="#" v-scroll-to="{element: '#skills', duration: 2000}" @click='closeNav'><h3>skills</h3></a>
          <a href="#" v-scroll-to="{element: '#about', duration: 2000}" @click='closeNav'><h3>about</h3></a>
          <a href="#" v-scroll-to="{element: '#contactText', duration: 2000}" @click='closeNav'><h3>contact</h3></a>
        </div>
      </div>
      <div class="homeContainer">
        <div id="home">
          <div class="left">
            <div class="right">
              <div class="center">
                <h1>Erin Hales</h1>
                <h3>Web Developer</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img class="down" src="http://i64.tinypic.com/1rcb2q.jpg" alt="">
    </div>
    <h2 id="projectsHeader">Projects</h2>
    <div id="projects">
      <div class="project">
        <img src="http://i65.tinypic.com/1sh5ip.jpg" alt="">
        <p>Ozzy is a parenting application designed to help parents and care providers connect and communicate. It was designed as a personal project during my time at Dev Mountain and won the award for "Best Overall App".</p>
                <!-- <router-link to="/ozzy/app" class="link"> -->
        <button><a href="https://ozzy.site" target="_blank">Live Site
          <img id="arrowImg" src="http://i68.tinypic.com/mh810p.jpg" alt="arrow">
        </a></button>
        <button><a href="https://github.com/ErinHales/ozzy" target="_blank">GitHub Repo
          <img id="arrowImg" src="http://i68.tinypic.com/mh810p.jpg" alt="arrow">
        </a></button>
        <button><a href="https://www.figma.com/proto/Q236qFIh1cvSLVdEOZ5ahsZl/Ozzy-posts?node-id=14%3A21&scaling=min-zoom" target="_blank">Prototype in Figma <img id="arrowImg" src="http://i68.tinypic.com/mh810p.jpg" alt="arrow"></a></button>
                <!-- </router-link> -->
      </div>
      <!-- <div class="project">
        <img src="http://i63.tinypic.com/iqvj49.jpg" alt="">
        <p>This is a calendar application also built during Dev Mountain. It was a very technical piece. Because of
                    the way we measure time, I had to create a lot of algorithms to display the dates correctly and to make
                    events show up in the right spot.</p>
                <router-link to="/calendar/app" class="link">
        <button><a href="https://github.com/ErinHales/new-calendar-app" target="_blank">GitHub Repo
          <img id="arrowImg" src="http://i68.tinypic.com/mh810p.jpg" alt="arrow">
        </a></button>
                </router-link>
      </div> -->
      <!-- <div class="project">
        <img src="http://i64.tinypic.com/5nm5ig.jpg" alt="">
        <p>This portfolio site was built with Vue to show my flexibility in working with different frameworks.  Although I primarily work with React, I am open and able to learn new technologies.</p>
                <router-link to="/weather/app" class="link">
        <button><a href="https://github.com/ErinHales/my-portfolio" target="_blank">GitHub Repo
          <img id="arrowImg" src="http://i68.tinypic.com/mh810p.jpg" alt="arrow">
        </a></button>
                </router-link>
      </div> -->
      <!-- <div class="project">
        <img src="http://i63.tinypic.com/bfnxv4.jpg" alt="">
        <p>This weather app was built as part of the Free Code Camp curriculum. I built it on my own after 2 months
                    of studying code in my free time. It uses the Open Weather API and gives the current weather as well
                    as a three day forecast.</p>
                <router-link to="/weather/app" class="link">
        <button><a href="https://codepen.io/mcbridee093/pen/yKPaRN" target="_blank">View Project in Codepen
          <img id="arrowImg" src="http://i68.tinypic.com/mh810p.jpg" alt="arrow">
        </a></button>
                </router-link>
      </div> -->
      <div class="project">
        <img src="http://i67.tinypic.com/jsinuo.jpg" alt="">
        <p>This clone of Codepen.io was built as a group project over the course of three weeks.  It is a platform that allows developers to create and share coding projects called "pens" using an inbrowser code editor.</p>
                <!-- <router-link to="/weather/app" class="link"> -->
        <button><a href="https://www.clonepen.com" target="_blank">Live Site
          <img id="arrowImg" src="http://i68.tinypic.com/mh810p.jpg" alt="arrow">
        </a></button>
        <button><a href="https://github.com/ErinHales/codepen-clone" target="_blank">GitHub Repo
          <img id="arrowImg" src="http://i68.tinypic.com/mh810p.jpg" alt="arrow">
        </a></button>
                <!-- </router-link> -->
      </div>
    </div>
    <div id="skills">
      <h2>Skills</h2>
      <div class="skillsContainer">
        <div class="skill">
          <img src="http://i67.tinypic.com/1674j2r.jpg" alt="">
          <h3>JavaScript</h3>
        </div>
        <div class="skill">
          <img src="http://i67.tinypic.com/15dmatz.jpg" alt="">
          <h3>HTML</h3>
        </div>
        <div class="skill">
          <img src="http://i67.tinypic.com/1zc1pnc.jpg" alt="">
          <h3>CSS</h3>
        </div>
        <div class="skill">
          <img src="http://i64.tinypic.com/2myq2c4.jpg" alt="">
          <h3>React</h3>
        </div>
        <div class="skill">
          <img src="http://i65.tinypic.com/2chm4i9.jpg" alt="">
          <h3>jQuery</h3>
        </div>
        <div class="skill">
          <img src="http://i66.tinypic.com/2d9xr35.jpg" alt="">
          <h3>SQL</h3>
        </div>
        <div class="skill">
          <img src="http://i64.tinypic.com/fvcsjs.jpg" alt="">
          <h3>nodeJS</h3>
        </div>
        <div class="skill">
          <img src="https://vuejsexamples.com/content/images/2017/10/vuejsexamples.png" alt="">
          <h3>Vue</h3>
        </div>
        <div class="skill">
          <img src="http://i65.tinypic.com/2nro8b8.jpg" alt="">
          <h3>Angular</h3>
        </div>
      </div>
    </div>
    <div class="background">
      <h2 id="aboutText">About</h2>
    <div class="display-bottom">
      <div id="about">
        <!-- <img src="http://i67.tinypic.com/1o0upf.jpg" alt=""> -->
        <div class="blogs">
          <router-link to="/journey" class="link" @click='resetScroll'>
            <div>
              <img src="http://i65.tinypic.com/t7l7gz.jpg" alt="Web Development" />
              <h2>My Journey
              <br/> to Web Development</h2>
            </div>
          </router-link>
          <router-link to="/about" class="link" @click='resetScroll'>
            <div>
              <img src="http://i67.tinypic.com/2cekeab.jpg" alt="About Me" />
              <h2>About Me</h2>
            </div>
          </router-link>
          <router-link to="/work" class="link" @click='resetScroll'>
            <div>
              <img src="http://i64.tinypic.com/s5cz1c.jpg" alt="work" />
              <h2>Work Experience</h2>
            </div>
          </router-link>
        </div>
      </div>
      <h2 id="contactText">Let's get in touch.</h2>
      <form id="contact" @submit.prevent="sendMessage">
        <input type="text" placeholder="Name" v-model="name">
        <input type="text" placeholder="Email" v-model="email">
        <input type="text" placeholder="Subject" v-model="subject">
        <textarea name="" id="" cols="30" rows="10" placeholder="Message" v-model="message"></textarea>
        <div>
          <button @click="clear">Clear</button>
          <button type="submit">Send</button>
        </div>
      </form>
      <div class="externalLinks">
        <a href="https://github.com/ErinHales" target="_blank"><img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="github"></a>
        <a href="https://www.linkedin.com/in/erin-hales-64122a15b/" target="_blank"><img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="linked in"></a>
        <a href="https://codepen.io/mcbridee093/" target="_blank"><img src="http://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png" alt="codepen"></a>
        <a href="https://www.freecodecamp.org/fcc42d7bce8-1718-48bf-8f8f-4d568b10ef71" target="_blank"><img src="https://pbs.twimg.com/profile_images/692531829287567360/ytP7U362.png" alt="free code camp"></a>
      </div>
    </div>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import axios from 'axios'
Vue.use(VueScrollTo)

export default {
  name: 'Home',
  data () {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  },
  mounted () {
    let scrollpos = window.scrollY
    const header = document.getElementsByClassName('nav')

    if (header[0].classList) {
      const addClassOnScroll = () => header[0].classList.add('showNav')
      const removeClassOnScroll = () =>
        header[0].classList.remove('showNav')
      window.addEventListener('scroll', function () {
        scrollpos = window.scrollY
        if (scrollpos >= 200) {
          addClassOnScroll()
        } else {
          removeClassOnScroll()
        }
      })
    }
  },
  methods: {
    toggleNav: function () {
      const nav = document.getElementsByClassName('nav')
      if (nav[0].style.height !== '400px') {
        nav[0].style.height = '400px'
        nav[0].style.backgroundColor = '#F4B196'
      } else {
        nav[0].style.height = '70px'
        nav[0].style.backgroundColor = 'transparent'
      }
    },
    closeNav: function () {
      const nav = document.getElementsByClassName('nav')
      nav[0].style.height = '70px'
    },
    resetScroll: function () {
      window.scrollTo(0, 0)
    },
    sendMessage: function () {
      axios.put('/api/send', {
        from: this.email,
        subject: this.subject,
        message: this.message
      }).then(console.log('Message Sent')).catch(err => console.log(err))
      this.name = ''
      this.email = ''
      this.subject = ''
      this.message = ''
    },
    clear: function () {
      this.name = ''
      this.email = ''
      this.subject = ''
      this.message = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* coral = F4B196
dark blue = 076982*/

/* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
*/

body {
  overflow-x: hidden;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0px;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
body {
  margin: 0;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  width: 100%;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

button {
  outline: none;
  cursor: pointer;
}

input {
  outline: none;
}

@import url("https://fonts.googleapis.com/css?family=Josefin+Sans");

body {
  scroll-y: hidden;
}

p {
  text-indent: 30px;
  margin-bottom: 20px;
}

.homePageImg {
  height: 100%;
  margin: 0px;
  padding: 0px;
  position: fixed;
  width: 100%;
  overflow-x: hidden;
  background-image: url("http://i67.tinypic.com/4uymbs.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -2;
}

.nav {
  border: none;
  position: fixed;
  top: 0px;
  color: white;
  font-family: "Josephin Sans", sans-serif;
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: rgba(244, 177, 150, 0);
  z-index: 1;
}

.showNav {
  transition: all 1s ease;
  background-color: rgba(244, 177, 150, 1);
}

.nav > h3,
.navButtons h3 {
  display: inline-block;
  padding: 15px;
}

.navButtons h3 {
  cursor: pointer;
  transition: transform 0.3s linear;
  color: white;
}

.navButtons {
  padding-right: 30px;
}

.homeContainer {
  width: 100%;
  display: flex;
  justify-content: center;
}

#home {
  position: absolute;
  top: calc(50% - 8vw);
}

#home .left {
  border: 2px solid #044252;
  position: relative;
  top: -10px;
  left: -10px;
  width: 100%;
  height: 100%;
}

#home .right {
  width: 100%;
  height: 100%;
  top: 50%;
  left: 39%;
  border: 2px solid #044252;
  position: relative;
  top: 10px;
  left: 10px;
}
#home .center {
  margin: 30px;
}

#home h1 {
  font-size: 5vw;
  text-align: center;
}

#home h3 {
  font-size: 3vw;
  text-align: center;
  padding: 10px;
}

.navButtons > h3:active {
  border-bottom: 4px solid #f4b196;
}

.navButtons > h3:hover {
  transform: scale(1.07);
}

.navButtons img {
  display: none;
  height: 50px;
  margin: 10px;
}

.down {
  position: absolute;
  margin-left: calc(50vw - 25px);
  width: 50px;
  top: 87vh;
  text-align: center;
  animation: bounce 2s infinite;
}

.background {
  background-color: rgba(255, 255, 255, 0.5);
  /* margin-top: -100px; */
}

#about {
  padding-bottom: 50px;
}

.blogs {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* margin-top: 100px; */
  margin-bottom: 100px;
  width: 99vw;
}

.blogs div {
  width: 300px;
  height: 300px;
  font-size: 30px;
  background-color: #076982;
  color: white;
  padding: 50px;
  text-align: center;
  transition: transform 0.5s linear;
  margin: 100px;
}

.link {
  text-decoration: none;
}

.blogs div:hover {
  cursor: pointer;
  transform: scale(1.07);
}

.blogs img {
  width: 200px;
  margin-bottom: 20px;
}

#skills {
  background-color: #f4b196;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.skillsContainer {
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 1200px;
}

.skill {
  padding: 60px;
  text-align: center;
}

#skills h3 {
  font-size: 30px;
  margin: 20px;
}

#skills h2 {
  font-size: 40px;
  padding: 20px;
  padding-top: 90px;
  text-align: center;
}

#skills img {
  width: 50px;
}

#projects {
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 200px 50px;
  margin-top: 100vh;
}

.project {
  background-color: rgba(255, 255, 255, 0.5);
  color: #044252;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 20px;
  width: 400px;
  font-size: 20px;
  text-align: center;
}

.project button {
  background-color: #044252;
  font-size: 15px;
  border: none;
  padding: 10px;
  margin: 5px;
}

.project a {
  color: white;
  text-decoration: none;
}

.project p {
  margin-top: 10px;
}

.project img {
  width: 80%;
}

form {
  background-color: rgba(255, 255, 255, 0.5);
  width: 80%;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  margin-top: 100px;
}

form input {
  width: 60%;
  background-color: transparent;
  border: none;
  border-bottom: 3px solid gray;
  margin: 20px;
  font-size: 40px;
  outline: none;
}

textarea {
  width: 60%;
  background-color: transparent;
  font-size: 30px;
  outline: none;
}

form button {
  background-color: #044252;
  color: white;
  border: none;
  font-size: 30px;
  padding: 20px;
  margin: 20px;
}

#projectsHeader,
#contactText {
  font-size: 40px;
  text-align: center;
  margin-top: 100px;
}

#aboutText {
  font-size: 40px;
  text-align: center;
  padding-top: 200px;
}

#projectsHeader {
  position: absolute;
  top: 100vh;
  width: 100vw;
}

#arrowImg {
  width: 10px;
  height: 10px;
}

.externalLinks {
  display: flex;
  justify-content: center;
  align-items: center;
}

.externalLinks img {
  width: 80px;
  margin: 50px;
}

.externalLinks img:hover {
  cursor: pointer;
}

@keyframes bounce {
  70% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0px);
  }
}

@media (max-width: 1300px) {
  .blogs div {
    width: 200px;
    height: 200px;
    margin: 100px 50px 100px 50px;
  }
  .blogs img {
    width: 100px;
  }
}

@media (max-width: 1200px) {
  .skillsContainer {
    width: 100%;
  }
  #skills {
    width: 100%;
  }
  .content {
    width: 80%;
  }
}

@media (max-width: 1000px) {
  #home h1 {
    font-size: 8;
  }
  #home h2 {
    font-size: 6;
  }
  form input {
    width: 80%;
  }
  textarea {
    width: 80%;
  }
  .externalLinks img {
    width: 60px;
    margin: 30px;
  }
}

@media (max-width: 800px) {
  #skills h3 {
    margin: 10px;
  }
  form {
    width: 100%;
    margin-left: 0px;
    margin-bottom: 0px;
  }
  textarea {
    height: 300px;
  }
  form input {
    font-size: 30px;
  }

  .navButtons img {
    display: block;
    width: 50px;
  }

  .nav {
    overflow: hidden;
    height: 70px;
    transition: height 600 ease-in-out;
  }

  .navButtons {
    display: flex;
    flex-direction: column;
    text-align: right;
    align-items: flex-end;
  }
  .content {
    width: 90%;
  }
  .project {
    width: 300px;
  }
}

@media (max-width: 540px) {
  #home h1 {
    font-size: 10vw;
  }
  #home h2 {
    font-size: 8vw;
  }
  .skillsContainer {
    flex-direction: column;
  }
  .project {
    width: 250px;
  }
  .externalLinks img {
    width: 40px;
    margin: 20px;
  }
}
</style>

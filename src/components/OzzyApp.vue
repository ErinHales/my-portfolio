<template>
    <div>
        <div class="header">
            <img src="http://i67.tinypic.com/33lm8g4.jpg" alt="" />
            <h1>Ozzy</h1>
        </div>
        <div>
            <div class="card">
                <p>I started off with the style.  I knew that my application would have muliple different views, so I wanted a design that would be consistent and cohesive.  This is my prototype created through figma.com.</p>
                <a class="figmaLink" target="_blank" href="https://www.figma.com/proto/Q236qFIh1cvSLVdEOZ5ahsZl/Ozzy-posts?node-id=14%3A21&scaling=min-zoom">Check it out <img id="arrowImg" src="http://i68.tinypic.com/mh810p.jpg" alt="arrow"></a>
            </div>
            <div class="card">

            </div>
            <div class="card">

            </div>
            <div class="card">

            </div>
            <div class="card">

            </div>
            <div class="card">

            </div>
            <div class="card">

            </div>
            <div class="card">

            </div>
            <div class="card">

            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'Ozzy',
  data () {
    return {
      msg: 'Ozzy Component'
    }
  }
}
</script>

<style>
#arrowImg {
  width: 15px;
  height: 15px;
}
.figmaLink {
  text-decoration: none;
  color: white;
  background-color: #5d356d;
  font-size: 24px;
  padding: 5px;
}
.header {
  background-color: #9b59b6;
  display: flex;
  align-items: center;
}
.header h1 {
  font-size: 50px;
  color: white;
}
.header img {
  width: 100px;
  margin: 20px;
}
.card {
    width: 200px;
    text-align: center;
    background-color: #9b59b6;
    /* padding: 10px; */
    color: white;
}
</style>

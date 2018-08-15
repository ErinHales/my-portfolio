<template>
    <div class="workPage hide">
        <div class="circle">
            <img src="http://i64.tinypic.com/s5cz1c.jpg" alt="">
        </div>
        <div class="content">
            <p>Up until recently, I had always wanted to be a teacher.  When I was attending college at Western State Colorado university, I studied music education, and I worked at the Stepping Stones day care center.  I later was given the opportunity to teach my own preschool classes of 3 and 4 year-olds.  This was a lot of work!  I had between 9 and 14 kids in each class.  I made my own lesson plans, emailed parents, evaluated kids and their progress, cleaned my classroom, and much more.  While I enjoyed the kids, I found that I didn't enjoy the work.  It was long hours and poor pay.</p>
            <p>After I quit that job, I became a nanny for the Allen family.  I loved this job and the family.  I worked really hard over the two years that I was there, but I realized that it wasn't a carrer.</p>
            <p>It was then that I discovered programming.  I began by taking some online courses and found that I loved it.  I am really excited to get into this new line of work, and I really believe that it will be a rewarding, lucrative, and enjoyable field.</p>
        </div>
        <router-link to="/"><button class="back">Back</button></router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Work',
    mounted() {
        window.scrollTo(0, 0);
    },
    data () {
        return {
            msg: 'Work Component'
        }
    }
}
</script>

<style>
button {
    outline: none;
}

.workPage {
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
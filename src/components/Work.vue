<template>
    <div class="workPage hide">
        <div class="circle">
            <img src="http://i64.tinypic.com/s5cz1c.jpg" alt="">
        </div>
        <div class="content">
            <p>alksdfa;lsdgh;agoa sijfaso;id fja;slkdfj; lask jdf;lasjd fl;kasd jfs df k jsoi ajf;asd jf;lkasjdf dsflf;iasjdf;oisjdflksdjf
                    sdfljas s ;s laksj sd las klsd fkasldjf aslkd ;alsdkfj aslkdjfl;askjfa ;asdkf as f;sfl aslk;f flas fl;l;as
                    fasd f;alksdfj a;ls f f f;lkasd f sdfl; sflk asdfl ;lf ;af adf af asdf as; f asfdas df;ls fkls fkls f
                    sf s;dfkl sdf asdf as df;lkasj fasdf s df sdf ;sadlkf ;lskdf k sf asd flk;dsaf ;laksdjfl aksdf;lk sdf
                    jals;kd fj;sf sfk as f sdfj sfkl; jas </p>
        </div>
        <router-link to="/"><button class="back">Back</button></router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Work',
    data () {
        return {
            msg: 'Work Component'
        }
    }
}
</script>

<style>
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
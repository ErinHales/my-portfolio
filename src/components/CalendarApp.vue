<template>
    <div>
        <h3>Calendar</h3>
        <h1>{{msg}}</h1>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Calendar',
    data () {
        return {
            msg: 'Calendar Component'
        }
    }
}
</script>

<style>

</style>
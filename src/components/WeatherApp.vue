<template>
    <div>
        <h3>Weather App</h3>
        <h1>{{msg}}</h1>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Weather App',
    data () {
        return {
            msg: 'Weather App Component'
        }
    }
}
</script>

<style>

</style>
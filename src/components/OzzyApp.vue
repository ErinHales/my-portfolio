<template>
    <div>
        <h3>Ozzy</h3>
        <h1>{{msg}}</h1>
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

</style>
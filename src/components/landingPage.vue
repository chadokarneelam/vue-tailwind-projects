<template lang="">
    <div>
        <div>
            <div class="nav">
                <router-link class="nav-list cursor-pointer" v-for="(item, index) in this.navList" :key="index" :to="item.goTo">
                {{item.name}}
                </router-link>
            </div>
            <div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            navList:[
                {name:'Subscribe Page',goTo:'/'},
                {name:'Collection',goTo:'/collection'},
                {name:'Product Page',goTo:'/product'},
            ]
        }
    }
}
</script>
<style lang="">
    
</style>
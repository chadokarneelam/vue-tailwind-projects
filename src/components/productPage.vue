<template lang="">
    <div class="flex justify-center items-center my-auto h-[80vh]">
        <div class="product-box ">
            <div class="pic"><img class="pic " src="./../assets/home.png" alt=""></div>
            <div class="flex flex-col mt-2 p-2 pl-4 text-left">
                <span class="shipping">Free Shipping</span>
                <span>{{product.name}}</span>
            <span class="line-through">Rs.{{product.prize}}</span>
            <span>Rs{{product.marked}}</span>
            <span class="disc">{{product.disclaimer}}</span>
            <div class="flex justify-center">
                <span class="s-button w-32 text-center "><button>Add to cart</button></span>
            </div>
            <span>{{product.piece}}+ pcs in stock</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            product:{
                name:'Kitty Wireless Gaming Headset Quartz',
                piece:50,
            disclaimer:'this offer is valid for limited time only',
        prize:1566,
    marked:756,            }
        }
    }
}
</script>
<style lang="css">
    .shipping{
        font-size:0.75rem;
    }
    .disc{
        font-size:0.75rem;
    }
</style>
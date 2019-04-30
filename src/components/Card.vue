<template>
    <div>
        <div class="shadow-box" v-bind:style="boxStyle">
            <h2 class="box-title">{{title}}</h2>
            <p class="content">{{content}}</p>
            <slot ></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:"Card",
    props:{
        title:String,
        content:String,
        width:String,
        height:String
    },
    computed:{
    },
    data:function(){
        return {
            boxStyle:{
                width:this.width,
                height:this.height
            }
        }
    }
}
</script>

<style>
.shadow-box{
  background:rgb(42, 145, 241);
  border-radius: 20px;
  box-shadow: 0px 4px 16px 0px rgb(42, 145, 241);
  padding: 5px 15px;
  color:white;
}
.box-title{
    margin:0px 0px;
}
.content{
    margin:0px 0px;
}
</style>

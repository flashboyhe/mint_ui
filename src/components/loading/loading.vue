<template>
    <div class="loading" v-bind:class="{ font_color: isTrue }">
        {{msg}}
        <br>
        {{haha}}  .....{{hehe}}
       
    </div>
</template>

<script>

export default {
  name: 'loading',
  props:['haha',"hehe"],
  data () {
    return {
     msg: 'Welcome to 闪哥',
     isTrue:true,
     isError:false
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.font_color{
	color:salmon;
	background: pink;
}

</style>

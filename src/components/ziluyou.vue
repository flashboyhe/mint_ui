<template>
  <div class="ziluyou">
    <router-link to="/ziluyouone">我是第一个子路由</router-link>
    <router-link to="/ziluyoutwo">我是第二个子路由</router-link>
   
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'ziluyou',
  data () {
    return {
      
	   self: this,
		
		
    }
  },
   methods: {
            show (index) {
                this.$Modal.info({
                    title: '用户信息',
                    content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

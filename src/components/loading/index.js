import MyLoading from './loading.vue'
// 这里是重点
const Loading = {
    install: function(Vue){
        Vue.component('Loading',MyLoading)
    }
}

// 导出组件
export default Loading
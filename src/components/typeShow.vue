<template>
    <div class="type">
        <ul>
            <li class="typeList" v-for="(type,index) in typeList" :key="index">
                <div class="type_icon">
                    <img :src="type.images" alt="">
                </div>
                <div class="type_name">{{type.title}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'typeShow',
    props:['typeList'],
    data(){
        return{}
    }
}
</script>
<style lang="less" scoped>
.type{
    padding: .3rem;
    height: 3.3rem;
    background: white;
    ul{
        text-decoration: none;
        .typeList{
            display: flex;
            flex-direction: column;
            float: left;
            align-items: center;
            margin: .15rem;
            .type_icon{
                width: .9rem;
                height: .9rem;
                border-radius: 50% 50%;
                background: lightblue;
                img{
                    height: 100%;
                    width: 100%;
                    border-radius: 50% 50%;
                }
            }
            .type_name{
                font-size:.28rem;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(76,76,76,1);
            }
        }
    }
}
</style>
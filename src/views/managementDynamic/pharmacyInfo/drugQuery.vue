<template>
    <div class="drugQuery">
        <div class="drug_top">
            <HeaderTitle :title="title"></HeaderTitle>
        </div>
        <div class="query">
            <div class="flex"></div>
        </div>
    </div>
</template>

<script>
import HeaderTitle from '../../../components/headertitle';
export default {
    name:'drugQuery',
    components:{ HeaderTitle },
    data(){
        return{
            title:'药品查询',
        }
    }
}
</script>

<style lang="less" scoped>
.drugQuery{
    .query{
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
        background: #ffffff;
        width: 100%;
        position: absolute; 
        top: 1.7rem ; 
        left: 0 ; 
        bottom: 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        position: fixed;
        .flex{
            overflow: auto;
        }
    }
}
</style>
<template>
  <div class="ModuleTitle_container">
    <div class="top_container">
        <div class="border_container">
        </div>
        <div class="title_container">
            <slot name="title"></slot>
        </div>
        <div class="border_container">

        </div>
    </div>
    <div class="bottom_container">
        <div class="subtitle_container">
            <slot name="subtitle"></slot>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'ModuleTitle',
    props:[],
    mounted(){
    },
    methods:{

    }
};
</script>

<style scoped lang="less">
@import '../../static/lessfunc.less';
.ModuleTitle_container{
    .flex_x_center();
    .top_container{
        display: flex;
        .border_container{
            .w(220px);
            .h(35px);
            .bdb(1px,#b3b3b3);
        }
        .title_container{
            .fw(600);
            .fc(#2ab1a7);
            .fs(32px);
            .mglr(45px);
        }
    }
    .bottom_container{
        .mgt(17px);
        .subtitle_container{
            .fs(22px);
            .fc(#ef7d59);
            .fw(600);
        }
    }
}
</style>

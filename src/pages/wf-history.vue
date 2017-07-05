<style>
.facebook-avatar {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border: 1px solid blue;
    height: 55px;
    line-height: 55px;
    text-align: center;
    float: left;
    margin: 14px 14px;
}

.facebook-avatar img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.card-history {
    /*float: left;*/
    padding-top: 0 !important;
}

.card-history .card-header {
    /*margin-left: 54px;*/
    float: left;
    width: 60%;
}

.card-history .card-footer {
    float: left;
}
</style>

<template>
    <f7-page name="wf-history">
        <f7-navbar title="审批历史" back-link="返回" sliding></f7-navbar>
        <f7-block inner class="detail-content">
            <!--自定义的详情-->
            <div class="card facebook-card">
                <!--<div class="card-header">
                                            <div class="facebook-avatar">
                                                张三
                                            </div>
                                            <div class="facebook-name">草稿</div>
                                            <div class="facebook-name">2017/3/13 23:42:42</div>
                                        </div>-->
    
            </div>
            <div class="page-content card-history">
                <div class="card facebook-card ">
                    <div class="facebook-avatar">
                        <img src="http://lorempixel.com/68/68/people/1/" width="34" height="34">
                    </div>
                    <div class="card-header">
                        <div class="facebook-name">采购审批</div>
                    </div>
                    <div class="card-header">
                        <div class="facebook-date">2017/2/23 23:23:54</div>
                    </div>
                    <div class="card-footer">
                        备注：我是很长的备注。。。。
                    </div>
                </div>
            </div>
        </f7-block>
    </f7-page>
</template>
<script>
export default {
    name: 'wf-history',
    mounted() {

    }
}
</script>


<style>
.detail-content {
    margin: 6px 0px;
}

.detail-header {
    height: 40px;
    line-height: 40px;
    color: green;
    padding: 0 8px;
    /*margin: auto 8px;*/
    border: 1px solid green;
}

.detail-col-name {
    width: 40%;
}

.detail-col-value {
    width: 60% !important;
}

.btn-history {
    margin-top: 6px;
    border-radius: 0;
    width: 80px;
    display: inline-block;
    border: 1px solid green;
    background-color: green;
    color: white;
    float: right;
}
</style>

<template>
    <f7-page>
        <f7-navbar title="详情" back-link="返回" sliding></f7-navbar>
        <f7-block inner class="detail-content">
            <detail-header :node="main.CurrentNodeDisplayName" :recordId="main.ID"></detail-header>
            <detail-block-list :details="details"></detail-block-list>
            <!--自定义的详情-->
            <div v-for="detail in custDetails" :key="detail.Key">
                <div class="content-block-title">单据明细审批</div>
                <f7-list form>
                    <f7-list-item>
                        <f7-label class="detail-col-name">审批意见（同意）</f7-label>
                        <f7-label class="detail-col-value">
                            <f7-switch></f7-switch>
                        </f7-label>
                    </f7-list-item>
                    <f7-list-item>
                        <f7-label class="detail-col-name">原料编码</f7-label>
                        <f7-label class="detail-col-value">{{detail.CommodityCode}}</f7-label>
                    </f7-list-item>
                    <f7-list-item>
                        <f7-label class="detail-col-name">原料名称</f7-label>
                        <f7-label class="detail-col-value">{{detail.CommodityName}}</f7-label>
                    </f7-list-item>
                    </f7-list-item>
                    <f7-list-item>
                        <f7-label class="detail-col-name">仓库</f7-label>
                        <f7-label class="detail-col-value">{{detail.WarehouseName}}</f7-label>
                    </f7-list-item>
                </f7-list>
            </div>
        </f7-block>
    </f7-page>
</template>

<script>
import serviceBus from '../services/service'
import detailHeader from '../components/detail-header'
import detailBlockList from '../components/detail-block-list'
export default {
    data: function () {
        return {
            main: {},
            details: [],
            custDetails: []
        }
    },
    components: {
        detailHeader,
        detailBlockList
    },
    methods: {
        loadData() {
            return serviceBus.getWorkflowDetail(this.$route.params.WorkflowName, this.$route.params.ID).
                then((res) => {
                    // this.$f7.alert(JSON.stringify(res))
                    this.main = res.Main
                    this.details = res.Details
                    this.custDetails = res.CustDetails
                }).catch((ex) => {
                    this.$f7.alert('加载数据失败！' + ex.message);
                })
        }
    },
    mounted() {
        this.$nextTick(() => {
            return this.loadData()
        })
    }
}
</script>
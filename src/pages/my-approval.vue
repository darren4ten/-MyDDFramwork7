<style>
.wdith100 {
    width: 100%;
    margin-right: 10px;
}

.card-detail-leftbar {
    border: 1px solid green;
    height: 90px;
    width: 6px;
    background-color: green;
}

.card-detail-header {
    color: #6d6d72;
    font-size: 14px;
}

.card-detail-node {
    color: #6d6d72;
    font-size: 14px;
    float: right;
}

.list-approval {
    margin-top: -2px;
}


/*清除左侧15px的边距*/

.list-approval .item-link>.item-content {
    padding-left: 0;
}

.list-bar-item {}

.list-bar-item {
    padding-left: 0 !important;
}

.list-bar-item .item-title {
    width: 100%;
}

.list-bar-item .item-title-row {
    height: 24px;
}

.list-bar-item .item-subtitle {
    margin: 8px auto;
    height: 30px;
    font-size: 20px;
}

.list-bar-item .item-text {
    height: 24px;
}
</style>

<template>
    <f7-page>
        <f7-navbar sliding>
            <f7-nav-left style="width:50%">
                <f7-col class="wdith100">
                    <f7-button open-panel="left">待审批</f7-button>
                </f7-col>
            </f7-nav-left>
            <f7-nav-right style="width:50%">
                <f7-col class="wdith100">
                    <f7-button open-panel="right">已审批</f7-button>
                </f7-col>
            </f7-nav-right>
        </f7-navbar>
        <f7-block class="page-main" inner>
            <f7-searchbar cancel-link="Cancel" placeholder="标题、流程编号" :clear="true">
            </f7-searchbar>
            <!-- Page Content -->
            <div class="list-block media-list list-approval">
                <ul>
                    <f7-list-item v-for="item in items" :key="item.ID" :link="'/wf-detail/'+item.ID+'/'+item.WorkflowName">
                        <div class="item-content list-bar-item">
                            <div class="item-media card-detail-leftbar">
                                <span class="ft-movielist-item-img"></span>
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">
                                        <span class="card-detail-header">{{item.SubmitUserFullName}}-{{item.SubmitTime}}</span>
                                        <span class="card-detail-node">{{item.CurrentNodeDisplayName}}</span>
                                    </div>
                                </div>
                                <div class="item-subtitle">{{item.WorkflowName}}</div>
                                <div class="item-text">{{item.SN}}</div>
                            </div>
                        </div>
                    </f7-list-item>
    
                </ul>
            </div>
        </f7-block>
    </f7-page>
</template>

<script>
export default {
    data: function () {
        return {
            items: []
        }
    },
    mounted() {
        this.items = [{
            ID: '693C3078-A59B-4A1A-A25B-40A715FC9973',
            SubmitUserFullName: '张三',
            SubmitTime: '2017/1/1 23:43:45',
            CurrentNodeDisplayName: '采购审批',
            WorkflowName: '采购价调整',
            SN: '#23243 张三-费用报销单-采购价调整[834437]'
        },
        {
            ID: '833EB945-281E-4791-ABA0-4FE1C3BE71BF',
            SubmitUserFullName: '李四',
            SubmitTime: '2017/1/1 23:43:45',
            CurrentNodeDisplayName: '采购审批',
            WorkflowName: '采购价调整',
            SN: '#23243 李四-费用报销单-采购价调整[834437]'
        },
        {
            ID: 'DD32FFC1-7E40-4756-9B86-9AB6E2272CBE',
            SubmitUserFullName: '王五',
            SubmitTime: '2017/1/1 23:43:45',
            CurrentNodeDisplayName: '采购审批',
            WorkflowName: '采购价调整',
            SN: '#23243 王五-费用报销单-采购价调整[834437]'
        }];
    }
}
</script>
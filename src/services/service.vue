<script>
export default {
    name: 'servicebus',
    urls: {
        workflowDetailUrl: ''
    },
    getWorkflowDetail: function (wfName, recordId) {
        // return axios.get(this.urls.workflowDetailUrl, {
        //     params: {
        //         wfName: wfName,
        //         recordId: recordId
        //     }
        // })

        var testData= {
            Main: {
                ID: '693C3078-A59B-4A1A-A25B-40A715FC9973',
                SubmitUserFullName: '张三',
                SubmitTime: '2017/1/1 23:43:45',
                CurrentNodeDisplayName: '采购审批',
                WorkflowName: '采购价调整',
                SN: '#23243 张三-费用报销单-采购价调整[834437]'
            },
            Details: [
                {
                    GroupName: "基本信息",
                    Items: [
                        {
                            Key: '标题',
                            Value: '#23345 费用报销单-采购价调整[834437]'
                        },
                        {
                            Key: '申请人',
                            Value: '张安'
                        },
                        {
                            Key: '申请时间',
                            Value: '2017/4/1 12:23:43'
                        }]
                }, {
                    GroupName: "单据信息",
                    Items: [
                        {
                            Key: '供应商编码',
                            Value: 'yg23434'
                        },
                        {
                            Key: '供应商名称',
                            Value: '北京宏发情缘商贸有限公司'
                        },
                        {
                            Key: '开始日期',
                            Value: '2017/4/1 12:23:43'
                        },
                        {
                            Key: '结束日期',
                            Value: '2017/5/1 12:23:43'
                        },]
                }],
            CustDetails: [{
                CommodityCode: '10078',
                CommodityName: '精选澳洲肥牛（500g）',
                WarehouseName: '上海宝山仓库'
            },
            {
                CommodityCode: '10178',
                CommodityName: '精选澳洲肥牛（500g）',
                WarehouseName: '上海金山仓库'
            }]
        }
        return Promise.resolve(testData)
    }
}
</script>

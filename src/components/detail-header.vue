<template>
    <div class="detail-header">
        当前审批节点：{{node}}
        <!--<f7-button class="btn-history" @click="$router.load({name: 'wf-history',params:{recordId:recordId}})">审批历史</f7-button>-->
        <f7-button class="btn-history" :href="'/wf-history/'+recordId">审批历史</f7-button>
    </div>
</template>
<script>
export default {
    name: 'detail-header',
    props:['node','recordId'],
    data() {
        return {

        }
    }
}
</script>

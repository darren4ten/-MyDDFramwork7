<template>
    <div class="detail-header">
        当前审批节点：{{node}}
        <f7-button class="btn-history">审批历史</f7-button>
    </div>
</template>
<script>
export default {
    name: 'detail-header',
    props:['node'],
    data() {
        return {

        }
    }
}
</script>

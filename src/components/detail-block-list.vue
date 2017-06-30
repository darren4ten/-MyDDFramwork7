<template>
    <div>
        <div v-for="detail in details" :key="detail.Key">
            <div class="content-block-title">{{detail.GroupName}}</div>
            <f7-list form>
                <f7-list-item v-for="item in detail.Items" :key="item.Key">
                    <f7-label class="detail-col-name">{{item.Key}}</f7-label>
                    <f7-label class="detail-col-value">{{item.Value}}</f7-label>
                    <!--<f7-input type="text" placeholder="Name"></f7-input>-->
                </f7-list-item>
            </f7-list>
        </div>
    </div>
</template>
<script>
export default {
   name: 'detail-block-list',
    props:['details'],
    data() {
        return {

        }
    }
}
</script>


<template>
    <el-row type="flex" justify="center">
        <el-col :span="20" >
            <el-pagination class="pagination-justify" background
                           layout="prev, pager, next"
                           :total="totalNum" :page-size="pageSize"
                           :current-page="pageNum"
                           v-on:current-change="pagenation"/>

            <el-table :data="txs" stripe style="width: 100%">
                <el-table-column prop="hash" label="Tx Hash"/>
                <el-table-column prop="block" label="Block"/>
                <el-table-column prop="from" label="From"/>
                <el-table-column prop="to" label="To"/>
                <el-table-column prop="amount" label="Amount"/>
                <el-table-column prop="fee" label="Fee"/>
                <el-table-column prop="status" label="Status"/>
            </el-table>

            <el-pagination class="pagination-justify" background
                           layout="prev, pager, next"
                           :total="totalNum" :page-size="pageSize"
                           :current-page="pageNum"
                           v-on:current-change="pagenation"/>
        </el-col>
    </el-row>
</template>


<script>
    import http from "../api/http"
    import constant from "../util/constant/constant"

    let vm;
    export default {
        name: "Tx",
        data: function () {
            return {
                totalNum: undefined,
                pageNum: 1,
                pageSize: 4,
                txs: [],
            }
        },
        created: function () {
            vm = this;
            vm.getTxList();
        },
        methods: {
            getTxList: function () {
                // TODO: why define that = this
                let url = constant.urlTxList + "/" + vm.pageNum + "/" + vm.pageSize;
                http.get(url, {}).then(function (data) {
                    if (data) {
                        vm.txs = [];
                        vm.totalNum = data.Count;
                        for (let v of data.Data) {
                            let amount = v.Amount;
                            if (amount && Array.isArray(amount)) {
                                let coin = amount[0]
                                amount = coin.amount + coin.denom;
                            } else {
                                amount = undefined;
                            }

                            let tx = {
                                hash: v.Hash,
                                block: v.BlockHeight,
                                from: v.From,
                                to: v.To,
                                amount: amount,
                                fee: v.Fee.amount + v.Fee.denom,
                                status: v.Status,
                            };
                            vm.txs.push(tx);
                        }
                    }
                }).catch(function (err) {
                    // TODO: handle err
                    throw err;
                });
            },
            pagenation: function (val) {
                vm.pageNum = val;
                vm.getTxList();
            }
        }
    }
</script>

<style scoped>
    @import "../scss/tx.scss";
</style>
<template>
    <el-container>
        <el-header>
            <el-row>
                <el-col :span="12">
                    <router-link to="/">首页</router-link>
                </el-col>
                <el-col :span="12">
                    <router-link to="/transaction">Transaction</router-link>
                </el-col>
            </el-row>
        </el-header>
        <el-main>
            Main
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
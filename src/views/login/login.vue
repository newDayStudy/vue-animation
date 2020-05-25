<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username" autocomplete="new-password"></el-input>
        </el-form-item>
       <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" show-password autocomplete="new-password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" v-show="ruleForm.password && ruleForm.username" @click="login">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>

export default {
    data () {
        return {
            ruleForm: {
                username: '',
                password: ''
            },
            rules: {}
        }
    },
    mounted () {
        
        
    },
    methods: {
        login(){
            this.$router.push({
                path: 'employee'
            })
        }
    }
}
</script>


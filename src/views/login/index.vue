<template>
	<div class="login-container">
		<el-form :model="loginForm" :rules="loginRules" ref="loginForm" class="login-form" auto-complate="on">
			<div class="title-container">
				<h3 class="title">{{title}}</h3>
			</div>
			<el-form-item prop="username">
				 <el-input
		          v-model="loginForm.username"
		          :placeholder="palceholder.username"
		          name="username"
		          type="text"
		          auto-complete="on"
		        />
			</el-form-item>
			<el-form-item prop="password">
				 <el-input
		          v-model="loginForm.password"
		          :placeholder="palceholder.password"
		          name="password"
		          type="text"
		          auto-complete="on"
		        />
			</el-form-item>
			<el-form-item>
				<el-button type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>
			</el-form-item>
		</el-form>
	</div>

</template>
<script>
	import { isvalidUsername } from '@/utils/validate.js'
	export default {
		data(){
			const validateUsername = (rule,value,callback) => {
				if(!isvalidUsername(value)){
					callback(new Error ('please input the correct username'))
				}else{
					callback()
				}
			}
			const validatePassword = (rule,value,callback) => {
				if(value.length<6){
					callback(new Error ('The password can not be less then 6 digits'))
				}else{
					callback()
				}
			}
			return {
				title:"后台登录",
				loginForm:{
					username:'admin',
					password:'111111'
				},
				palceholder:{
					username:'用户名',
					password:'密码'
				},
				loginRules:{
					username: [{required:true,trigger:'blur',validator:validateUsername}],
					password: [{required:true,trigger:'blur',validator:validatePassword}]
				},
				loading:false,
			}
		},
		methods:{
			handleLogin(){
				this.$refs.loginForm.validate(valid => {
					if(valid){//检验通过
						this.loading=true;
						//this.$store.dispatch('LoginByUsername',this.loginForm)
						this.$store.dispatch('LoginByUsername',this.loginForm).then(()=>{console.log('success')}).catch(()=>{console.log('err')})
					}
				})
				console.log('dd')
				
			}
		},
	}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
	.login-container{
		position:fixed;
		width:100%;
		height:100%;
		background-color:$bg;
		.login-form{
			position:absolute;
			left:0;
			right:0;
			width:520px;
			max-width:100%;
			margin:120px auto;
		}
	}
	.title-container{
		postion:relative;
		.title{
			font-size:26px;
			color:$light_gray;
			margin: 0px auto 40px auto;
			text-align:center;
			font-weight:bold;
		}
	}
</style>
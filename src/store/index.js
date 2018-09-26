import Vue from 'vue'
import Vuex from 'vuex'
import { loginByUsername } from '@/api/login'
import { setToken,getToken } from '@/utils/auth'
Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		token:getToken() || ''
	},
	mutations:{
		LoginByUsername(state,data){
			state.token = setToken(data.login)
		}
	},
	actions:{
		LoginByUsername(ctx,userInfo){
			return new Promise((resolve,reject)=>{
				loginByUsername(userInfo.username, userInfo.password).then(response=>{
					console.log(response.data)
					ctx.commit('LoginByUsername',response.data);
					resolve();
				}).catch(error => {reject(error)})
			})
			
		}
	}
})

export default store
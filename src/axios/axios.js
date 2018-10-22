import axios from 'axios';
import qs from 'qs'
import store from '../store/index'

// process是一个全局变量
const env = process.env.NODE_ENV//在生产环境的时候，将会被设置为production
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
//在开法环境的时候，竟会被设置为development
let baseURL = env == 'development'?'/api' : '/'
const instance = axios.create({//生成一个axios实例
  baseURL:'http://211.67.177.56:8080/hhdj',
  timeout:15000

})
instance.interceptors.request.use(function(config){
  if(config.method === 'post') {
    config.data =qs.stringify(config.data);
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  return config;
}, function(error){
return Promise.reject(error);
});

const xhr = {
  get(url,data,config={}){
    config.headers={
      'token':store.state.token
    }
    return new Promise((resolve,reject)=>{
      instance.get(url,{params:data,...config}).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err)
      })
    })
  },
  fetch(url,data,config={},methods){
    config.headers={
      'token' :store.state.token
    }
    return new Promise((resolve,reject)=>{
      instance[methods](url,data,config).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        resolve(err)
      })
    })
  },
  post(url,data,config){

    return this.fetch(url,data,config,'post')
  }
}

export default xhr



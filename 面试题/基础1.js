// 1. nodejs事件轮询机制
window.setTimeout(()=>{
  console.log('setTimeout()')
},0)

setImmediate(()=>{
  console.log('setTimeout()')
},0)
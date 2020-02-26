let server = require('./server')
let router = require('./router')
let resuestHandlers = require('./requestHandlers')
let handle = {}
handle['/'] = resuestHandlers.start
handle['/start'] = resuestHandlers.start
handle['/table'] = resuestHandlers.table
handle['/upload'] = resuestHandlers.upload
handle['/show'] = resuestHandlers.show

server.start(router.route, handle)
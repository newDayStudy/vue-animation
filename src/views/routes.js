
var routes = []
var indexRoutes = require.context('.', true, /\.routes.js$/)
indexRoutes.keys().forEach(key=>{
    if(key=='./routes.js')return
    routes = routes.concat(indexRoutes(key).default)
})
export default routes;
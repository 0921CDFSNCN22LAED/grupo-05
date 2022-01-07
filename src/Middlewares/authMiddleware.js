function authMiddleware(res, req, next) {
    if(req.session.usuarioLogueado == undefined) {
        next();     
    }else {
        res.send("Esta pagina es solo para usuarios")
    }
}
module.exports = authMiddleware;
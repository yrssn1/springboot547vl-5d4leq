const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"会员","menuJump":"列表","tableName":"huiyuan"}],"menu":"会员管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"菜品分类","menuJump":"列表","tableName":"caipinfenlei"}],"menu":"菜品分类管理"},{"child":[{"buttons":["新增","查看","修改","删除","下单"],"menu":"菜品信息","menuJump":"列表","tableName":"caipinxinxi"}],"menu":"菜品信息管理"},{"child":[{"buttons":["查看","修改","删除","导出","配送"],"menu":"订单信息","menuJump":"列表","tableName":"dingdanxinxi"}],"menu":"订单信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"订单配送","menuJump":"列表","tableName":"dingdanpeisong"}],"menu":"订单配送管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"管理员","tableName":"users"}],"menu":"管理员管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","下单"],"menu":"菜品信息列表","menuJump":"列表","tableName":"caipinxinxi"}],"menu":"菜品信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","支付"],"menu":"订单信息","menuJump":"列表","tableName":"dingdanxinxi"}],"menu":"订单信息管理"},{"child":[{"buttons":["查看"],"menu":"订单配送","menuJump":"列表","tableName":"dingdanpeisong"}],"menu":"订单配送管理"}],"frontMenu":[{"child":[{"buttons":["查看","下单"],"menu":"菜品信息列表","menuJump":"列表","tableName":"caipinxinxi"}],"menu":"菜品信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"会员","tableName":"huiyuan"}]
    }
}
export default menu;

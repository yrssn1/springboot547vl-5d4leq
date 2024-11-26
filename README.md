# springboot006基于SpringBoot的网上订餐系统

## 简介

本代码仅供学习参考使用

加QQ(**3055269939**)免费获取项目和论文

## 主要内容

### 数据库表设计

本基于Spring Boot的网上订餐系统采用了MYSQL数据库管理系统，主要数据库表详细信息如下：

表4-1  users管理员信息表

| 字段名   | 数据类型     | 是否允许空 | 字段含义 |
| -------- | ------------ | ---------- | -------- |
| `id`     | bigint(20)   | NOT NULL   | 编号     |
| username | varchar(100) | NULL       | 用户名   |
| password | varchar(100) | NULL       | 密码     |
| role     | varchar(100) | NULL       | 角色     |
| `addtime | timestamp    | NULL       | 新增时间 |

 

表4-2  caipinfenlei菜品分类信息表

| 字段名        | 数据类型     | 是否允许空 | 字段含义 |
| ------------- | ------------ | ---------- | -------- |
| `id`          | bigint(20)   | NOT NULL   | 编号     |
| addtime       | timestamp    | NULL       | 创建时间 |
| `caipinfenlei | varchar(200) | NULL       | 菜品分类 |

 

表4-3  caipinxinxi菜品信息表

| 字段名          | 数据类型     | 是否允许空 | 字段含义     |
| --------------- | ------------ | ---------- | ------------ |
| `id`            | bigint(20)   | NOT NULL   | 编号         |
| addtime         | timestamp    | NULL       | 创建时间     |
| caipinmingcheng | varchar(200) | NULL       | 菜品名称     |
| tupian`         | varchar(200) | NULL       | 图片         |
| caipinfenlei    | varchar(200) | NULL       | 菜品分类     |
| tuijianzhishu   | varchar(200) | NULL       | 推荐指数     |
| jiage           | varchar(200) | NULL       | 价格         |
| kouwei          | varchar(200) | NULL       | 口味         |
| shicai          | varchar(200) | NULL       | 食材         |
| caipinxiangqing | longtext     | NULL       | 菜品详情     |
| clicktime       | datetime     | NULL       | 最近点击时间 |
| `clicknum       | int(11)      | NULL       | 点击次数     |

 

表4-4  dingdanxinxi订单信息表

| 字段名           | 数据类型     | 是否允许空 | 字段含义 |
| ---------------- | ------------ | ---------- | -------- |
| `id`             | bigint(20)   | NOT NULL   | 编号     |
| addtime          | timestamp    | NULL       | 创建时间 |
| `dingdanbianhao  | varchar(200) | NULL       | 订单编号 |
| caipinmingcheng  | varchar(200) | NULL       | 菜品名称 |
| caipinfenlei     | varchar(200) | NULL       | 菜品分类 |
| `jiage           | varchar(200) | NULL       | 价格     |
| `shuliang        | varchar(200) | NULL       | 数量     |
| zongjine         | float        | NULL       | 总金额   |
| xiadanshijian`   | datetime     | NULL       | 下单时间 |
| beizhu           | varchar(200) | NULL       | 备注     |
| `huiyuanzhanghao | varchar(200) | NULL       | 会员账号 |
| huiyuanxingming  | varchar(200) | NULL       | 会员姓名 |
| shoujihaoma      | varchar(200) | NULL       | 手机号码 |
| dizhi            | varchar(200) | NULL       | 地址     |
| huiyuanzhekou    | varchar(200) | NULL       | 会员折扣 |
| ispay            | varchar(200) | NULL       | 是否支付 |

 

表4-5  huiyuan会员信息表

| 字段名           | 数据类型     | 是否允许空 | 字段含义 |
| ---------------- | ------------ | ---------- | -------- |
| `id`             | bigint(20)   | NOT NULL   | 编号     |
| addtime          | timestamp    | NULL       | 创建时间 |
| `huiyuanzhanghao | varchar(200) | NULL       | 会员账号 |
| mima             | varchar(200) | NULL       | 密码     |
| huiyuanxingming  | varchar(200) | NULL       | 会员姓名 |
| touxiang         | varchar(200) | NULL       | 头像     |
| xingbie          | varchar(200) | NULL       | 性别     |
| nianling         | varchar(200) | NULL       | 年龄     |
| shoujihaoma      | varchar(200) | NULL       | 手机号码 |
| dizhi            | varchar(200) | NULL       | 地址     |
| huiyuandengji    | varchar(200) | NULL       | 会员等级 |
| huiyuanzhekou    | varchar(200) | NULL       | 会员折扣 |
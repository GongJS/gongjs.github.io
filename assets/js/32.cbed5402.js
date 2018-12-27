(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{216:function(t,s,a){t.exports=a.p+"assets/img/testApi.a23b6226.jpg"},217:function(t,s,a){t.exports=a.p+"assets/img/workbench-1.b8235887.jpg"},218:function(t,s,a){t.exports=a.p+"assets/img/test.3d2b71ad.jpg"},251:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql","aria-hidden":"true"}},[this._v("#")]),this._v(" mysql")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),s("p",[this._v("在安装软件的过程中，要记得复制"),s("code",[this._v("mysql")]),this._v("的初始密码，安装完后再改成自己记得住的密码，如"),s("code",[this._v("123456")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:a(217)}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("user")]),this._v("表的内容如下：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticStyle:{"text-align":"left",width:"450px",margin:"0 auto"}},[a("table",[a("tr",[a("th",{attrs:{width:"150px"}},[t._v("字段")]),t._v(" "),a("th",{attrs:{width:"150px"}},[t._v("类型")]),t._v(" "),a("th",{attrs:{width:"150px"}},[t._v("说明")])]),t._v(" "),a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("int(自增)")]),t._v(" "),a("td",[t._v("用户的id")])]),t._v(" "),a("tr",[a("td",[t._v("username")]),t._v(" "),a("td",[t._v("VARCHAR(45)")]),t._v(" "),a("td",[t._v("用户名字")])]),t._v(" "),a("tr",[a("td",[t._v("password ")]),t._v(" "),a("td",[t._v("VARCHAR(128)")]),t._v(" "),a("td",[t._v("用户密码")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("management")]),this._v("表的内容如下：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticStyle:{"text-align":"left",width:"450px",margin:"0 auto"}},[a("table",[a("tr",[a("th",{attrs:{width:"150px"}},[t._v("字段")]),t._v(" "),a("th",{attrs:{width:"150px"}},[t._v("类型")]),t._v(" "),a("th",{attrs:{width:"150px"}},[t._v("说明")])]),t._v(" "),a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("int(自增)")]),t._v(" "),a("td",[t._v("用户的id")])]),t._v(" "),a("tr",[a("td",[t._v("username")]),t._v(" "),a("td",[t._v("VARCHAR(45)")]),t._v(" "),a("td",[t._v("用户名字")])]),t._v(" "),a("tr",[a("td",[t._v("sex ")]),t._v(" "),a("td",[t._v("VARCHAR(45)")]),t._v(" "),a("td",[t._v("性别")])]),t._v(" "),a("tr",[a("td",[t._v("state ")]),t._v(" "),a("td",[t._v("VARCHAR(45)")]),t._v(" "),a("td",[t._v("状态")])]),t._v(" "),a("tr",[a("td",[t._v("interest ")]),t._v(" "),a("td",[t._v("VARCHAR(45)")]),t._v(" "),a("td",[t._v("爱好")])]),t._v(" "),a("tr",[a("td",[t._v("birthday ")]),t._v(" "),a("td",[t._v("DATE")]),t._v(" "),a("td",[t._v("生日")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"sequelize"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sequelize","aria-hidden":"true"}},[this._v("#")]),this._v(" Sequelize")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("yarn add mysql@^2.16.0    //安装mysql驱动\nyarn global add sequelize-auto@^0.4.29 //自动生成schema\nyarn add sequelize@^3.28.0\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("然后就会在 schema 文件夹下自动生成两个"),s("code",[this._v("management.js")]),this._v("和"),s("code",[this._v("user.js")]),this._v("两个文件：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//management.js")]),t._v("\n\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sequelize"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DataTypes"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sequelize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("define")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v("'management'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DataTypes"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("INTEGER")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("11")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        allowNull"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        primaryKey"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        autoIncrement"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      username"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DataTypes"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("STRING")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("45")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        allowNull"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      sex"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DataTypes"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("STRING")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("45")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        allowNull"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      state"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DataTypes"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("STRING")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("45")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        allowNull"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      interest"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DataTypes"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("STRING")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("45")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        allowNull"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      birthday"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DataTypes"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("DATEONLY")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        allowNull"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      tableName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'management'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// user.js")]),t._v("\n\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sequelize"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DataTypes"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sequelize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("define")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v("'user'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DataTypes"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("INTEGER")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("11")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        allowNull"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        primaryKey"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        autoIncrement"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      username"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DataTypes"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("STRING")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("45")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        allowNull"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      password"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DataTypes"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("STRING")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("128")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        allowNull"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      tableName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'user'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("用"),s("code",[this._v("sequelize-auto")]),this._v("能够根据数据库里的字段自动帮我们定义表结构。生成的数据库表结构文件也都自动帮我们 module.exports 出来了，可以直接导入到别的文件使用。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在"),s("code",[this._v("server")]),this._v("目录下的"),s("code",[this._v("config")]),this._v("目录下我们新建一个"),s("code",[this._v("db.js")]),this._v("，用于初始化 Sequelize 和数据库的连接。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// db.js")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Sequelize "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'sequelize'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 引入sequelize")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 使用url连接的形式进行连接")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Demo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Sequelize")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'mysql://root:XXXX@localhost/Demo'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  define"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    timestamps"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Demo "),a("span",{attrs:{class:"token comment"}},[t._v("// 将Demo暴露出接口方便Model调用")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("更改密码")]),this._v(" "),s("p",[this._v("要将 root 后面的"),s("code",[this._v("XXXX")]),this._v("换成自己的本读数据库秘密")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在"),s("code",[this._v("models")]),this._v("文件夹里将数据库和表结构文件连接起来。在这个文件夹下新建一个"),s("code",[this._v("user.js")]),this._v("的文件。我们先来写一个查询用户 id 的东西。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// models/user.js")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" db "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'../config/db.js'")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 引入user的表结构")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" userModel "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'../schema/user.js'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" DemoDb "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Demo "),a("span",{attrs:{class:"token comment"}},[t._v("// 引入数据-")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" DemoDb"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userModel"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 用sequelize的import方法引入表结构，实例化了basicTable。")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" getUserById "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" userInfo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" User"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("findOne")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 用await控制异步操作，将返回的Promise对象里的数据返回出来。也就实现了“同步”的写法获取异步IO操作的数据")]),t._v("\n    where"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" id\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" userInfo "),a("span",{attrs:{class:"token comment"}},[t._v("// 返回数据")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  getUserById "),a("span",{attrs:{class:"token comment"}},[t._v("// 导出getUserById的方法，将会在controller里调用")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//controllers/user.js")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" user "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'../models/user.js'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" getUserInfo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" id "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{attrs:{class:"token comment"}},[t._v("// 获取url里传过来的参数里的id")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" user"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getUserById")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 通过await“同步”地返回查询结果")]),t._v("\n  ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" result "),a("span",{attrs:{class:"token comment"}},[t._v("// 将请求的结果放到response的body里返回")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  getUserInfo "),a("span",{attrs:{class:"token comment"}},[t._v("// 把获取用户信息的方法暴露出去")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 把获取用户信息的方法暴露出去")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在"),s("code",[this._v("routes")]),this._v("文件夹下新建一个"),s("code",[this._v("router.js")]),this._v("的文件。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//routes/router.js")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" KoaRouter "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'koa-router'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" UserController "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./../controllers/user.js'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("KoaRouter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  router"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("post")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'/user/:id'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" UserController"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getUserInfo"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//用POST请求")]),t._v("\n  app"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("router"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("routes")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("router"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("allowedMethods")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("把路由挂载到"),s("code",[this._v("Koa")]),this._v("上，修改"),s("code",[this._v("app.js")]),this._v("文件：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// app.js")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Koa "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'koa'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" bodyParser "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'koa-bodyparser'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" router "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./server/routes/router'")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Koa")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("bodyParser")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("router")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("listen")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("3000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'server is running at http://localhost:3000'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" app\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:a(218)}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("打开终端，输入 node index.js，如果终端打印出"),s("code",[this._v("server is running at http://localhost:3000")]),this._v("，说明我们的 API 可以进行测试了！")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"测试-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试-api","aria-hidden":"true"}},[this._v("#")]),this._v(" 测试 API")])}],e=a(0),o=Object(e.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("如果本地还没有配置好"),n("code",[t._v("mysql")]),t._v("的开发环境，可以去"),n("a",{attrs:{href:"https://dev.mysql.com/downloads/mysql/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),n("OutboundLink")],1),t._v("下载"),n("code",[t._v("MySQL Community Server")]),t._v("并安装，")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("大家根据自己的电脑系统选择相应的版本下载就行，我安装的是"),n("code",[t._v("mac版的5.7.23")]),t._v(".\n然后安装可视化工具来操作我们的本地数据库，我们使用官方的"),n("a",{attrs:{href:"https://dev.mysql.com/downloads/workbench/",target:"_blank",rel:"noopener noreferrer"}},[t._v("workbench"),n("OutboundLink")],1),t._v("，不需要破解就能免费使用，因为要配合我们的本地"),n("code",[t._v("mysql")]),t._v("版本，"),n("code",[t._v("workbench")]),t._v("的版本选择"),n("code",[t._v("6.3.10")]),t._v("。\n安装完后打开"),n("code",[t._v("workbench")]),t._v("软件，连接本地数据库。默认端口是：3306，用户名：root，这里的密码不要使用初始密码，不然可能会连接不上，用更改过后的密码登录。\n登录成功后，新建一个名为"),n("code",[t._v("Demo")]),t._v("的 schema，在"),n("code",[t._v("Demo")]),t._v("里新建两张 table，一张是"),n("code",[t._v("user")]),t._v("，一张是"),n("code",[t._v("management")]),t._v(",如下图：")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),n("p",[t._v("感谢互联网的大神们带我们走过了刀耕火种的时代，有了"),n("code",[t._v("vue")]),t._v("、"),n("code",[t._v("react")]),t._v("这样优秀的 MVVM 框架，我们再也不用去为了操作 DOM 而头疼，当然，我们也不需要再用原生的"),n("code",[t._v("sql")]),t._v("语句去和数据库打交道。现在流行把关系数据库的表结构映射到对象上，也就是传说中的 ORM 技术-Object-Relational Mapping。在本教程里，使用为 node 量身打造的"),n("a",{attrs:{href:"http://docs.sequelizejs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sequelize"),n("OutboundLink")],1),t._v("，在"),n("a",{attrs:{href:"https://github.com/sequelize/sequelize",target:"_blank",rel:"noopener noreferrer"}},[t._v("github"),n("OutboundLink")],1),t._v("上已经有了 15000 多个 star 了。开始安装：")]),t._v(" "),t._m(8),n("p",[t._v('进入 server 的目录，执行如下语句 sequelize-auto -o "./schema" -d Demo -h 127.0.0.1 -u root -p 3306 -x XXXXX -e mysql，（其中 -o 参数后面的是输出的文件夹目录， -d 参数后面的是数据库名， -h 参数后面是数据库地址， -u 参数后面是数据库用户名， -p 参数后面是端口号， -x 参数后面是数据库密码，这个根据自己的数据库密码来！ -e 参数后面指定数据库为 mysql）')]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),n("p",[t._v("接着我们在 controllers 写一个 user 的 controller，来执行这个方法，并返回结果：")]),t._v(" "),t._m(18),n("p",[t._v("下面需要定义路由，前端需要通过指定的路由，才能够调用这个方法。\n::: 提示\n为了省事，教程里的所有请求都采用 post 请求\n:::")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),n("p",[t._v("最后，我们在数据库里随意加一条数据用来测试：")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),n("p",[t._v("API 的测试工具这里选用"),n("a",{attrs:{href:"https://www.getpostman.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("postman"),n("OutboundLink")],1),t._v("，如果没有安装该软件的话自己去官网下载安装一下，打开软件开始测试,方法选"),n("code",[t._v("post")]),t._v(",地址"),n("code",[t._v("http://localhost:3000/user/1")]),t._v(",点击"),n("code",[t._v("send")]),t._v("测试,结果如下图：")]),t._v(" "),n("img-wrapper",[n("img",{attrs:{src:a(216)}})]),t._v(" "),n("p",[t._v("成功拿到数据库里的数据，说明我们的 API 没有问题。")])],1)},n,!1,null,null,null);s.default=o.exports}}]);
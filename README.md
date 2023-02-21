# lzo-ts-admin

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

> npm init vue@latest 内部使用 create-vue 创建vite版本脚手架
## 项目结构
-   .vscode
    -   extensions.json
        -   recommendations 建议安装包含的vscode插件，否则右下角弹窗提示安装

-   public                打包的时候直接复制到dist中
-	src 下目录结构划分
   1. assets 存放一些静态资源、网络字体等
   2. components 公共组件抽取
   3. common 自定义的公用文件封装，多个项目统通用的组件、方法
   4. hooks 存放hook函数
   5. router
   6. service 网络请求 接口统一调用
   7. store 状态管理
   8. utils 第三方库文件
   9. view/pages 页面视图文件
   10. mock 模拟数据
   11. layout（管理系统布局配置）
-   .editorconfig         为多个编辑器保持一致风格
-   .eslintrc.cjs         代码不符合规范报错提示
-   .prettierrc.json      代码格式化标准文件(与eslint保持一致)
-   .gitignore            git忽略文件
-   env.d.ts              ts声明文件
-   index.html            html模板
-   package.json
-   package-lock.json
-   tsconfig.config.json  ts配置文件中会应用
-   tsconfig.json         ts配置文件
-   vite.config.ts        类似webpack的 vue.config.js

## 项目配置
-	替换ico文件，配置标题
-	normalize.css 重置css
-	SCSS/LESS配置（vite）
   1. SASS 安装 `npm install sass sass-loader -D`  安装好就行了
   2. LESS 安装 `npm install less -D` 安装好就行了

-	配置 router
	-	`npm install vue-router`
	-	导入 createRouter, createWebHashHistory  导出 router，main中use

-	配置 pinia
	-	`npm install pinia`
	-	导入 createPinia，export default pinia = createPinia()，main中use
	-	通过 defineStore 创建一个个store，vue页面中通过 hooks的方式使用

-	axios 网络请求封装
	-	`npm install axios`

-	vint 的环境变量
	```javascript
	// vite 用 import.meta.env.MODE 代替 process.env.NODE_ENV
	console.log(import.meta.env.BASE_URL) // baseurl
	console.log(import.meta.env.DEV) // 是否运行在开发环境
	console.log(import.meta.env.MODE) // vite 直接通过这个判断  production/development 生产或开发模式
	console.log(import.meta.env.PROD) // 是否运行在生产环境
	console.log(import.meta.env.SSR) // 是否运行在SSR环境
	```
-	vite 的环境配置文件
	-	都会读取: .env               中配置 VITE_ 开头的变量,`VITE_XXX='lzo'`,后期可以从 import.meta.env.VITE_XXX 获取
	-	开发读取: .env.development
	-	生产读取: .env.production
	-	git忽略:  .env.xxx.local

-	[element-plus](https://element-plus.gitee.io/en-US/guide/installation.html#using-package-manager) 配置
	-	[中文网](http://element-plus.org/zh-CN/)
	-	安装 `npm install element-plus --save`
	-	全局导入不推荐
		-	import ElementPlus from 'element-plus' , main中use一下
	-	按需导入
		-	`npm install -D unplugin-vue-components unplugin-auto-import`
		```js
		// 配置element-plus
		import AutoImport from 'unplugin-auto-import/vite'
		import Components from 'unplugin-vue-components/vite'
		import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

		export default defineConfig({
			plugins: [
				AutoImport({
					resolvers: [ElementPlusResolver()]
				}),
				Components({
					resolvers: [ElementPlusResolver()]
				})
			]
		})

		// 不需要像以前哪有，组件中用到什么，手动引入什么
		```
		-	ts项目中，会生成ts文件 "components.d.ts","auto-imports.d.ts" 加入到ts配置文件的include中


### editorconfig 配置(编辑情况下)
> 有助于为不同IDE编辑器上处理同一个项目的多个开发人员 维护一致的编码风格

1、vscode 需要安装 EditorConfig for VS Code 插件
2、基础配置
```shell
# 表示是最顶层的配置文件，发现为true时，才会停止查找.editorconfig文件
root = true

# 所有文件适用以下规则
[*]

# 编码格式，可选值有latin1、utf-8（一般使用它）、utf-16be、utf-16le
charset = utf-8

# 设置缩进风格，可选值有制表符tab和空格space
indent_style = tab

# 设置缩进空格数，一般为整数2或4
indent_size = 4

# 设置tab类型的缩进列数，一般为整数2或4
tab_width = 4

# 设置换行符格式，可选值lf(一般为它)、cr、crlf
end_of_line = lf

# 是否删除行尾的空格，可为true和false
trim_trailing_whitespace = true

# 保存文件时是否在文件的最后插入一个空行。可为true和false
insert_final_newline = true


# md 文件还适用适用一些规则
[*.md]
max_line_length = off

```

### prettierrc 格式化配置(格式化情况下)

1、项目安装 prettier
2、配置代码风格
```json
/**
	{
		"useTabs": false,          是否使用tab作为缩进
		"tabWidth": 2,             tab是空格的情况下是几个空格
		"printWidth": 80,          单行字符的长度（超过之后就会自动换行）
		"singleQuote": false,      是否使用单引号
		"trailingComma": "none",   多行尾部是否添加逗号(对象最后一个实现是否加逗号，none不加，all加)
		"semi": true,              语句末尾是否加封号

		"quoteProps": "<as-needed|consistent|preserve>", 对象key 是否加引号,  需要的情况加/存在一个就加/保留存在的
		"jsxSingleQuote": false, 在jsx文件中的引号需要单独设置
		"bracketSpacing": true, object对象里面的key和value值和括号间的空格
		"jsxBracketSameLine": false, jsx标签多行属性写法时，尖括号是否另起一行
		"arrowParens": "<always|avoid>", 箭头单参数是否省略括号，默认always是总是带括号
		"vueIndentScriptAndStyle": false, vue script和style标签中是否缩进,开启可能会破坏编辑器的代码折叠
		"endOfLine": "<lf|crlf|cr|auto>", 行尾换行符,默认是lf
		"embeddedLanguageFormatting": "<off|auto>", 默认是auto,控制被引号包裹的代码是否进行格式化
*/

{
	"useTabs": false,
	"tabWidth": 2,
	"printWidth": 80,
	"singleQuote": false,
	"trailingComma": "none",
	"semi": true
}
```
3、可以添加 .prettierignore 忽略格式化的文件
4、vscode 安装 prettier 插件
5、搜索 Default Formatter 设置一个默认格式化程序为 prettier(或重右键设置一个默认格式化方式为 prettier)
6、`shift + alt + f` 或 `prettier --write . `手动格式化生效
7、文件首选项设置 找到 Format On Save 勾选保存是格式化， `ctrl + s` 保存时生效

### eslint 不规范的时候智能提示
> eslint 的配置需要与prettierrc配置保持一致，否则一格式化就报错 `eslint-config-prettier`，.eslintrc.cjs 添加 'plugin:prettier/recommended' 与 prettierrc 的配置关联起来，prettierrc 改变需要重启

1、vscode 安装插件 ESLint
2、配置代码风格 (包含 prettierrc 的配置)
```js
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	'extends': [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier',      // 上四个官方推荐
		'plugin:prettier/recommended'       // 关联prettierrc
	],
	parserOptions: {
		ecmaVersion: 'latest'
	},
	rules: {
		// @typescript-eslint/no-unused-vars" 关闭一些其他不需要的报错
		// 鼠标移入波浪线位置，弹窗提示后面有一个包，复制下来在这关闭
		"@typescript-eslint/no-unused-vars": "off",    // 关闭定义而未使用的变量报错
		'vue/multi-word-component-names': 'off'        // 否则页面名字不能是单个单词
	}
}


// 'plugin:prettier/recommended'

```

### 遇到的问题
1. .vue文件不生效(已解决 当时vue的默认格式化程序不是prettier)
2. 封装axios ts 不认识环境变量 `process`
   1. @types/node 确认已安装
   2. 将 "types": ["node"], 从 tsconfig.config.json 移动到 tsconfig.json 中
3. vite 中对打包的代码进行预览
   1. "preview": "vite preview"

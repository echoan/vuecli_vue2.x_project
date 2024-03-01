# vue 脚手架相关内容 以及 如何使用 vue 脚手架 进行项目的开发 --- 01_src

# vue 脚手架 安装

1. npm install -g @vue/cli 或 yarn global add @vue/cli （全局安装 vue-cli 的最新版本，安装一次即可）
   npm install -g @vue/cli@4.5.0 (全局安装 vue-cli 的指定版本)
   npm uninstall -g @vue/cli （vue-cli 的卸载）
   注意:在 Mac 端执行以上命令可能会出现 "Error: EACCES: permission denied"（权限被拒绝）的错误，
   此时要使用 sudo 命令来获取管理员权限，在上述命令前 添加 sudo 即可 如:sudo npm install -g @vue/cli
   如果安装过程中速度缓慢，可以通过以下方式解决

   1. 配置 npm 的淘宝镜像来解决
      设置 npm 的镜像 方式
      npm config set registry https://registry.npm.taobao.org/ （配置 npm 的镜像）
      npm config set registry https://registry.npmjs.org （设置 npm 的官方镜像）

      查看设置的 npm 镜像方式
      npm config get registry
      若返回 "https://registry.npm.taobao.org/"，说明配置的是淘宝镜像；
      如果返回 "https://registry.npmjs.org/"，说明配置的是官方镜像。

   2. 安装 cnpm 来解决
      npm install -g cnpm --registry=https://registry.npm.taobao.org
      安装完 cnpm 后 使用 cnpm install -g @vue/cli 来执行安装 vue-cli 的操作。

2. 安装完成 查看安装的 vue-cli 的版本 vue -V 或者 vue --version

# 使用 vue 的脚手架工具 来初始化一个 vue2.x 版本的工程

1. 在要创建工程的目录 执行 vue create projectName 命令 初始化一个 vue2.x 版本的工程。
2. 项目初始化成功后 进入初始化的项目 cd vuecli_vue2.x_project,执行 npm run serve 即可在本地运行该项目。
3. 使用脚手架初始化的项目，脚手架默认隐藏了所有 webpack 相关的配置，想要查看的话，可通过执行 vue inspect > output.js 来显示当前项目 webpack 有关的配置。

# 脚手架初始化的项目 目录结构

1. .gitignore:git 的忽略文件,哪些文件或者文件夹不想受 git 管理 在此处 配置
2. babel.config.js babel 的配置文件（和语法转换等有关 如 es6->es5 语法的转换） 更多 babel 相关配置可参看 babel 官网。
3. package.json 记录项目名，版本，项目的各种依赖和对应版本的文件。
   package.json 文件中 serve 命令 运行项目；build 命令 将项目打包已待后续服务器部署；lint 命令 执行代码语法检查（一般不用）
4. package-lock.json 包版本控制文件，保证依赖包下载时能够下载文件中记录的版本，避免出错。

5. src 目录
   main.js: 项目的入口文件，执行 npm run serve 后，首先找到 main.js，然后去执行。
   一般在 main.js 中做的事情

   1. 引入 Vue;
   2. 引入根组件 App.vue
   3. 关闭 vue 的生产提示
   4. 创建 Vue 的实例对象 VM，并挂载在容器中(使用$mount('app')或者配置el属性均可)
      new Vue({
        render: h => h(App),
      }).$mount('#app')
      或者
      new Vue({
      el:'#app',
      render: h => h(App),
      })
   5. 创建实例时，使用 render: h => h(App),的原因
      当在 main.js 中通过 import 方式 引入 Vue 时，引入的是 node_modules 中 vue/dist/vue.runtime.esm.js
      vue.runtime.esm.js 和完整的 Vue(vue/dist/vue.js)的区别在于，它只包含 Vue 的核心功能，但是不包含 Vue 的模板解析器。

      当引用不含模板解析器的 vue.runtime.esm.js 时，所以不能使用 template 配置项，需要使用 render 函数 render: h => h(App),而如果引入的是完整的 vue.js 话，可以使用 template 的方式 添加模板。

      render 的完整写法 render:(createElement)=>{ return createElement(templateName) } 进一步简写为
      render:createElement=>createElement(templateName) => render:h=>h(templateName) 这里的 template
      就是模板 可以是 render:h=>h('h2','hello')这种形式，也可以直接是一个组件模板（如这里的根组件 App）

      之所以在入口文件引入 vue.runtime.esm.js 而不是 vue.js，首先能够减少引入资源的体积；其次，模板解析器在开发时帮我们解析模板，但是开发完成，打包时经过 webpack 的处理的项目已经不再需要模板解析器，但是如果引用的是 vue.js 就会导致打包后的资源中仍然有模板解析器部分。

6. App.vue 根组件
7. assets 目录 项目静态资源（图片，图标等资源目录）
8. components 组件目录 当前项目中定义的组件都放在该目录（根组件除外）
9. public 目录 网站图标和 根组件所在的模板容器（index.html）

# vue 中的 vue.config.js

1. 通过执行 vue inspect > output.js 可以将 vue 脚手架的默认配置暴露出来，但是我们想要定义自己的配置，一般
   不在 vue 脚手架默认的配置文件中修改，而是创建一个自己的配置文件 vue.config.js 在里面做一些自己的配置，
   每次修改 vue.config.js 文件，都需要重新运行项目，重新运行后，vue.config.js 的自定义配置就会覆盖脚手架中默认
   的配置。
   vue.config.js 中 常添加的自定义配置如下:
   1. 入口文件(entry) 指定入口文件
   2. lintOnSave:false 关闭语法检查
      其他更多可配置项 可以参考 vue 官方文档 https://cli.vuejs.org/zh/config/

# 基于 Vue 脚手架创建的 vue2.x 版本的工程 对 vue 中的一些常用属性进行分析 -- 02_src

# vue 中的 ref 属性

1. 可以为模板中的 dom 节点或者组件添加 ref 属性，然后通过 this.$refs.refName 来获取到对应的 dom 节点或者组件的实例对象。

# vue 中的 props 属性

1. 父组件向子组件传递的数据，在子组件中使用 props 来接收。
2. 子组件中 props 接收数据的方式
   1. 简单接收 props:['dataName']
   2. 限制数据类型 props:{ dataName:dataType(Number,String 等等)}
   3. 限制数据类型，是否必传，以及默认值（与是否必传互斥）props:{dataName:{ type:dataType,required:true/false,default:100 }}
      需要注意的是 子组件中通过 props 获取到的参数 不能直接修改，如果有修改的需求，常用的有三种方式
      第一种方式 在父组件中定义好修改数据的方式，传给子组件，并在子组件中调用该方法。
      第二种方式 在子组件的 data 中定义一个变量，将要修改的 props 中的数据复制给 data 中的该变量，然后修改子组件
      中的 data。
      第三种方式 使用自定义事件来处理子组件操作父组件数据的问题。

# mixin（混入）属性

1. Vue 中 多个组件共用的一些配置（数据，方法）等，可以抽取成一个混入对象。
2. 一般会在根目录 定义一个 mixin.js，将要混入的内容定义在 mixin.js 中。
3. 混入定义完成后，可以通过两种方式使用
   第一种:局部引入，哪个组件需要使用，就在哪个组件中 通过 import 关键字 引入，然后在组件实例中 定义 mixins:['mixin_js_exportNAme'] 即可。
   第二种:全局引入，在 main.js 中 引入 ，然后通过 Vue.mixin(mixin_js_exportNAme) 设置在全局，这样
   VM 实例和所有 VC 实例 都可用使用 mixin.js 中的配置。全局设置多个引入 要多次调用 Vue.mixin(),但是一般
   实际大多数情况中都会定义在一个混入中，然后全局或局部使用。

4. 需要注意的是，如果组件使用了混入的配置，但是在组件内部又自己定义了同样的配置，那么 data 属性和 methods 中的
   方法 便会覆盖掉 混入中定义的同名配置。但是，如果在混入中配置了生命周期函数，那么 在组件中配置的相同的生命周期函数
   不会覆盖混入中配置的，两者会一起生效（混入的在前，组件的在后）

# 插件 plugins.js

1. 通常开发工作中我们可能会用到各种插件来增加 Vue 的功能来满足实际的开发需要，这就需要定义插件。
2. 一般需要定义插件时，在根目录 定义 plugins.js 文件，然后在该文件中去定义我们需要的功能。插件的本质
   是一个包含 install 方法的对象，install 方法的第一个参数 是 Vue,除此之外的参数 是插件使用时传递的参数。
3. 插件中我们可以做些什么？
   在插件 通常定义一些满足实际开发需要的一些功能，比如，定义全局的过滤器，添加全局的指令，配置全局的混入，
   甚至，我们可以通过 Vue.prototype 在 Vue 的原型对象上定义方法（定义的方法在 VM 和 VC 中都可以使用）
4. 插件定义完成 一般在 main.js 中 通过 Vue.use(pluginsName) 来配置，然后即可在全局使用。如果我们需要使用多个
   插件，可以多次调用 Vue.use(pluginsName).

# 样式 控制 scoped

1. scoped 用于控制 vue 组件的样式只在当前组件生效，避免组件间样式产生冲突。
2. 一般在根组件中 定义的样式对全局都起作用，一般不加 scoped 来限制。
3. 组件中 在 style 标签中写样式，一般可以通过 lang 属性 指定 要写的样式是 css 或者 less 或者 sass
   当样式采用的是 less/sass 时，Vue 不能直接解析编译，需要安装对应 loader，如使用 less,就安装 less-loader
   安装过程中如果报错，可能是 vue 脚手架的 webpack 和安装的 loader 版本不匹配 导致。
   安装 less-loader;npm i less-loader
   查看 webpack 的所有版本 命令 npm view webpack versions
   查看 less-loader 的所有版本 npm view less-loader versions

# 组件化开发一个 todoList 功能 03_src_todoList

1. vue 使用 v-for 时，绑定的 key，应该尽量保证唯一性，前端有时候在模拟数据，使用 v-for 构建一个列表时，会给模拟的数据添加 id 属性，此时常用一些 js 库来生成唯一性的 id。
   常用的生成唯一标识的 js 库:uuid(体积较大)，nanoid(体积较小) 安装 npm i uuid/npm i nanoid

2. 组件化开发时，通常会把多个子组件中都会用到的数据定义到他们的上层组件中，这称为状态提升，这样做是为了方便组件对这些数据进行操作进而更新所有与更改的数据相关的组件。但是有时这样也会带来一个问题，就是在没有用到这些数据的组件中，仍然免不了传递这些数据（当前组件没有用到这些数据，但是当前组件的子组件却用到了），这可以使用状态管理器或者通过兄弟组件之间数据通信的方式(全局事件总线)来解决。

3. 本地存储 webStorage
   1. 存储内容大小一般支持 5MB 左右(不同浏览器可能还不一样)
   2. 浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制。
   3. 相关 API:
      xxxxxStorage.setItem('key','value');
      该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值
   4. xxxxxStorage.getItem('person');
      该方法接受一个键名作为参数，返回键名对应的值。
   5. xxxxxStorage.removeItem('key');
      该方法接受一个键名作为参数，并把该键名从存储中删除
   6. xxxxxStorage.clear()
      该方法会清空存储中的所有数据.
   7. SessionStorage 存储的内容会随着浏览器窗口关闭而消失。
   8. LocalStorage 存储的内容，需要手动清除才会消失。
      xxxxxstorage.getItem(xxx)如果 xxx 对应的 value 获取不到，那么 getltem 的返回值是 null.
   9. JSON.parse(null)的结果依然是 null

# 组件中的自定义事件,全局事件总线，消息发布和订阅 04_src

1. 自定义事件

   1. 通过组件中的自定义事件 可以实现子组件向父组件的通信。
   2. 绑定自定义事件的方式
      a. 在父组件中 通过 v-on / @ 为子组件添加自定义事件的名字，值为 定义在 父组件中的方法。
      如 <!-- <TestTwo :student="student" @changeStudent_02="changeStudentInfo" /> -->

      b. 在父组件中使用的子组件上 添加 ref 的属性，然后在父组件的 mounted 钩子函数中 通过 this.$refs.xxxx.on 绑定事件。

      this.$refs.testThree.$on('changeStudent_03', this.changeStudentInfo)
      changeStudent_03: 自定义事件名
      this.changeStudentInfo: 自定义事件中指定的回调函数（一般是在父组件中定义的函数）
      另外，如果不想在父组件中定义方法，也可以通过以下方式，为自定义的事件 指定 回调函数
      this.$refs.testThree.$on('changeStudent_03', ()=>{})

   3. 指定的自定义事件如果只想触发一次，使用关键字 once 或者 $once.
   4. 在定义了自定义事件的子组件中触发 自定义事件 通过 this.$emit('事件名',参数 1,参数 2)
   5. 解绑自定义事件
      this.$off('事件名') 解绑某个自定义事件
      this.$off(['事件名 1','事件名 2'])
      this.$off() 解绑子组件的所有自定义事件

   6. 组件上可以绑定自定义事件 同样 也可以绑定原生事件，绑定原生事件使用 native 关键字:@click.native="clickEvent"

   7. 当组件销毁时，组件上绑定的自定义事件 也会随之被销毁，但是 原生的事件依然能够触发。

2. 全局事件总线
   除了自定义事件之外，也可以在父组件中定义好方法，传给子组件，并在子组件中调用该方法来实现子组件向父组件中通信，当然也可以采用全局事件总线的方式来处理组件之间的通信问题。

   1. 全局事件总线(GlobalEventBus),是一种适用于任意组件之间通信的方式（父子组件之间的通信，兄弟组件之间的通信，一般多用于兄弟组 件之间），也可以称为 bus 传值。
   2. 全局事件总线的通信原理:在 Vue 的原型上 添加一个属性 $bus,同时为了使$bus 能访问到 $emit，$on,$off 等关键字，将该属性指向 Vue 的实例对象 vm，这样做是为了让项目中 所有的 VC（组件实例） 都能够访问到 $bus。
   3. 全局事件总线的安装，是在 通过 new Vue 关键字 创建 Vue 实例对象 VM 时的 beforeCreate 钩子函数中 去 添加到 Vue 的原型上的。
      new Vue({
      ....
      beforeCreate(){
      Vue.prototype.$bus = this //安装全局事件总线，$bus 就是当前应用的 vm
      }，)

   4. 全局事件总线的使用

      当一个组件（A）想要接收另外一个组件(B)传递的数据时，在 A 组件的 mounted 钩子函数中 通过 this.$bus.$on('eventName',callBack) 来定义接收数据的事件名和对应的事件回调（当定义多个通信事件名时，要确保定义的事件名没有重名的，否则会相互影响）。
      同时在 A 组件中的 methods 中定义好事件回调（或者也可以不定义方法而是在定义通信事件时，通过箭头函数的形式指定通信事件的回调函数）。
      组件 A 中
      methods:{
      callBackEvent(){
      }
      }
      mounted(){
      this.$bus.$on('myContextEventName',this.callBackEvent)
      }

      在 B 组件中
      在合适的时机 调用 this.$bus.$emit('myContextEventName',params)
      myContextEventName 要和定义在 A 组件中的 通信事件名一致。
      params 要传递的数据

   5. 在 A 组件中，最好在 beforeDestroy 钩子中，用$off 去解绑当前组件所用到的事件，以释放定义的通信事件名的变量。this.$bus.$off('eventName')

3. 消息的订阅和发布 (pubsub-js)

   1. 在 Vue 任意组件中通信 除了可以使用 全局事件总线（$bus）外，还可以借助第三方工具，通过消息的订阅发布来实现。
   2. 使用 pubsub-js 来实现 Vue 中 组件间的订阅发布模式的过程。（订阅发布工具有很多，这里选择的是 pubsub-js）

      1. 安装 工具 npm install pubsub-js
      2. 在要使用发布订阅的组件中 进行引入 import pubsub from 'pubsub.js'
      3. 如果想要 A 和 B 两个组件进行通信，A 组件 接收 B 组件 传递的数据，需要在 A 组件中 mounted 钩子函数中 订阅消息，然后在 methods 中配置订阅消息的回调函数。

         在 A Component 中

         methods:{
         demo(messageName,cxzz){
         console.log('我是 A 组件中定义的订阅消息的回调函数')
         }
         }
         注意 消息订阅发布 定义的回调中 接收 2 个参数，第一个 订阅的消息名;第二个 消息发布时传递的数据

         mounted(){
         this.pubid = pubsub.subscribe('messageName',this.demo)
         }
         messageName:订阅的消息名
         pubsub.subscribe('messageName',this.demo) 返回一个 id,用 this.pubid 来接收，一般会在组件销毁时的
         beforeDestroy 中 通过 pubsub.unsubscribe(this.pubid) 的方式 取消订阅。

         在 B component 中

         在合适的时机 调用 pubsub.publish('messageName',params)
         messageName 消息名 要和 配置订阅消息时的消息名保持一致
         params 要传输的数据

      4. 尽管可以使用消息的发布和订阅来在任意组件间进行通信，但是在 vue 中一般使用全局事件总线来处理任意组件间的通信。

# 将 todoList 案例 进行改写 添加列表项的编辑，同时使用全局事件总线来实现部分组件的通信 05_src

1. nextTick
   语法:this.$nextTick(()=>{})
   作用:对应 dom 节点下一次更新完毕之后执行 nextTick 中的回调函数。
   使用场景:当数据发生变动，而我们又要依赖数据更新后的 dom 执行一些其他操作时，就要在 $nextTick 指定的回调函数中执行。

# vue 中 的动画效果 06_src

1. 在 Vue 中通过动画添加效果

   1. 在 vue 中 用 transotion 标签 将要添加动画的 dom 节点 包裹。
   2. 在样式中定义好动画
      @keyframes myAction {
      from {
      transform: translate(-100%);
      }
      to {
      transform: translate(0px);
      }
      }
   3. 为没有添加 name 属性 的 transition 添加 进入和离开时的对应动画
      进入时
      .v-enter-active{
      animation: myAction 1s linear;
      }
      离开时
      v-leave-active{
      animation: myAction 1s linear reverse;
      }
   4. 通过控制添加动画的 dom 的显示和隐藏 动画加载

   5. transition 可以添加 name 属性 和 appear 属性
      添加 name 属性后 进入时 类名需要修改成 .name-enter-active,离开时 类名需要修改成 .name-leave-active
      添加 appear 属性 初始化时动画就生效

2. 在 Vue 中通过过渡添加和动画同样的效果 transition

   1. 添加 过渡
      添加进入起点的过渡效果 通过 v-enter 类名 添加进入起点的状态
      .v-enter{

      }
      添加进入终点的过渡效果 通过 v-enter 类名 添加进入终点的状态
      .v-enter-to{

      }
      添加离开起点的过渡效果 通过 v-leave 类名 添加离开起点的状态
      .v-leave{

      }
      添加离开终点的过渡效果 通过 v-leave-to 类名 添加离开终点的状态
      .v-leave-to{

      }

      一般来讲 进入起点和离开终点的状态效果一样，进入终点和离开起点的状态效果一样，因此可以进行样式的合并简写。

   2. 在要添加过渡的 dom 节点 使用 定义的过渡效果 添加以下 css
      transition:1s linear

   3. 也可以通过类名 .v-enter-active,.v-leave-active 来 添加 css transition:1s linear
   4. 如果 transition 添加了 name 属性 ，那么要将类名中的 v 关键字 换成 属性 name 的值。

3. transition 和 transitiongroup
   单个 dom 节点 的过渡 用 transition 包裹
   多个 dom 节点的 过渡 用 transitiongroup 包裹，多个 dom 节点的过渡 要绑定 key 属性

4. vue 中 使用 animate.css 第三方库 来添加动画
   1. 安装 npm i animate.css
   2. 使用 在文件中引入 import 'animate.css
      在 transition 标签上 添加 固定 name animate_animated 和 animate_bounce
      在 transition 上 添加 enter-active-class， 添加 进入的动画的类名（选择 animate.css 中想要的动画的类名）
      通过 leave-active-class 添加 离开时的动画类名

# 为 todolist 案例 添加 过渡效果 07_src

# vue 中 配置 代理 解决 跨域问题 08_src

1. 在 vue 中 常用 axios 来请求数据
   axios 的使用
   安装 npm i axios
   引入 axios
   在需要请求数据的地方 用 axios 请求即可

2. 在使用 axios 去请求接口的时候，有时会出现跨域问题。
   跨域问题解决
   从后端:从 cors 方向解决。
   从前端: jsonp 解决跨域 前后端一起配合
   另外还可以通过设置代理 来解决在开发阶段出现的跨域的问题。
   可以通过 nginx 或者 借助 vue-cli 来开启一个代理服务

3. 在 vue 中通过 vue-cli 开启 代理
   方式一

   1. 在 vue.config.js 文件中 配置要代理的服务
      devServer: {
      proxy: 'http://localhost:4000' //要代理的服务
      }
      这会告诉开发服务器 将任何未知请求 代理到 http://localhost:4000 上
   2. 使用时，在请求跨域接口时，请求接口的主机名和端口 替换成本地即可。
   3. 需要注意的是 如果请求的接口 为 http://localhost:5001/text 并且在当前根目录的 public 中 存在 text
      那么即使配置了代理，那么，在请求时，获取到的仍然是当前 public 目录下的 text
      通过方式一配置代理的缺陷: 1. 不能够灵活的设置请求走不走代理；2.不能设置多个代理

   方式二

   1. 同样在 vue.config.js 中 配置
      devServer: {
      proxy:{
      '/api1':{
      target:http://localhost:4000,
      pathRewrite:{'^/api1':''},
      changeOrigin:true
      },
      '/api2':{
      target:http://localhost:4001,
      pathRewrite:{'^/api2':''},
      changeOrigin:true
      }
      }
      },

      /api1: 指的是匹配所有以 '/api'开头的请求路径， 只有请求接口有'api1'的请求才会走设置的代理
      target: 要代理的的服务
      pathRewrite:{'^/api1':''},将请求的接口中的 api1 后缀替换为''。之所以将前缀替换为 '',是因为，有时候我们在实际的开发中为了方便将某一类请求进行代理而人为的添加了前缀，但是真正的接口中并没有这个前缀，为了保证添加了代理后，请求接口不会 404，我们需要将添加到前缀去除。
      changeOrigin:true 是否将请求的端口号改为和代理端口号一致

      change0rigin 设置为 true 时，服务器收到的请求头中的 host 为:1ocalhost:4000
      change0rigin 设置为 false 时，服务器收到的请求头中的 host 为:localhost:8080
      change0rigin 默认值为 true

      尽管这种配置代理的方式略微复杂了一些，但是，这种方式可以灵活的处理一个请求要不要走代理，同时，可以设置多个代理。

# vue 中一个完整的请求数据的案例 09_src github 搜索查询案例

1. 使用 axios 来实现一个 调用 github 公开接口 实现的搜索案例。
2. 使用 vue-resource 来发送请求（常用在 vue.1.x 版本,现阶段一般使用 axios）
   vue-resource 插件 的使用
   安装 npm i vue-resource
   使用 在根组件 引入 import vueResource from 'vue-resource'
   配置插件 Vue.use(vueResource)

   之后，便可以在 vue 的实例中 访问到 vue.$http 的方法了，请求使用 this.$http.get/post 即可。

# vue 插槽的使用 slot 10_src slot 插槽

1. 插槽的作用

   通过插槽的使用 可以让父组件向子组件的的指定位置 插入 html 结构，此外，还可以利用作用域插槽实现子组件的数据通信给父组件

2. 插槽可以分为 默认插槽，具名插槽，和作用域插槽

   1. 默认插槽的使用
      子组件中，添加 slot 标签，标签内可以有默认的 dom 结构，在父组件中使用子组件时，在子组件中 添加要插入的 dom 结构，如果不插入，那么子组件显示 slot 中的默认 dom 结构
   2. 具名插槽的使用
      子组件中的 slot 添加 name 属性，在父组件中使用子组件时，在子组件中在要插入到 slot 中的 dom 节点上 添加 slot="slotname"，或者使用 template 标签 包裹要插入到子组件中的 dom 节点，在 template 标签上 添加 slot="slotname" 或者 v-slot:slotname 指定 要插入的 dom 节点要显示在那个 slot 中。
   3. 作用域插槽(数据在组件自身，但是根据数据生成的 dom 结构，由使用该组件的地方决定)
      将子组件中的数据 通过 在 slot 标签上 绑定属性的方式进行传递
      在父组件中使用子组件，在使用插槽的地方 用 template 包裹，通过关键字 v-scope 或者 scope 接收到传递的数据 即可使用。

# Vuex 相关 11_src vuex 的使用

1. Vuex 是什么
   Vuex 是一个集中式状态管理插件，对多个组件中共同使用数据状态进行集中管理。

2. Vuex 的使用

   1. 安装 npm i vuex@3
      安装时如果使用的 vue2.x 那么要搭配 vuex3.x 版本
      如果是使用的 vue3 那么要搭配 vue4.x 版本

   2. 在 main.js 中 引入 store

   3. vuex 的插件注册, Vue.use() (一般在 vuex 的核心文件 store 的入口文件进行注册)

   4. 创建 store 的核心配置文件（store 目录下的 index.js）
      注意:创建 store 入口文件时，需要在创建 store 实例之前在 store 的入口文件 index.js 中通过 Vue.use(Vuex)进行注册,否则创建 store 实例时会报错。
      至于为什么不能在 main.js 中 先通过 Vue.use() 注册 vuex，后引入创建的 store，是因为，在脚手架中通过 import 导入的文件会在编译阶段优先解析，即使在 main.js 中先注册插件 vuex,再通过 import 方式引入 store, 也会先解析 store，再进行 vuex 的注册,当解析 store 时，发现并未注册 vuex，因此就会报错。因此，一般在创建 store 的入口文件时，就要在创建 store 实例之前 先注册 vuex.

   5. store 入口文件 index.js 中 的核心内容
      action,mutions,state 三者均为对象，在通过关键字 Vuex.Store({}) 创建 store 实例时作为配置项传入。

      actions: 用于响应组件中的动作，可以在此过程中，进行异步操作。
      mutations: 根据 actions 中的动作，进行对数据的相关操作。
      state: 共用的数据状态存储在 state 中。

   6. 在 mian.js 文件引入创建的 store 核心文件， 并在创建实例时 添加 store 的配置。

3. vuex 实际使用的工作流

   1. 在组件中，想要读取 state 中的状态 可以直接通过 $store.state.属性名 来读取。

   2. 组件中如果修改 state 中的状态 在合适的时机 通过 this.$store.dispatch('actionName',value)
      actionName:定义在 store 核心文件 index.js 的 actions 中的 方法名。
      value:修改值。

   3. actions 中的对应方法接收到组件发出的指令，响应组件的修改指令。actions 中定义的方法中可以接收 2 个参数
      context，和 value
      context:上下文，可以理解为一个 miniStore,其包含 dispatch,commit,state 等属性
      value:组件传来的修改值。
      actions 中 对应方法响应组件后，通过 context.commit('mutationKeyName',value)手动调用 mutations 中 定义的方法 来执行组件的指令。
      mutationKeyName: mutations 中 定义的用于响应 actions 动作的方法。

      需要注意的是，如果组件的传来的指令需要进行其他的异步的处理或有其他的复杂的业务逻辑，均可以在 actions 的方法中进行处理，这也是 actions 的存在目的和设计初衷。而，如果组件发出的指令仅仅是做简单的修改状态的操作，我们甚至可以不经过 actions 的响应，直接在在组件中通过调用 mutations 中的方法来达到目的。

   4. mutations 中的对应方法 接到 actions 传来的指令后，调用匹配 actions 动作的对应方法来完成对状态数据的修改。
      mutations 中的方法 接收两个参数 state 和 value。
      注意 在 mutations 中不要添加业务逻辑和异步的处理程序，如果有，可以在 actions 中处理好再调用 mutations 中的方法。

   5. mutations 中 完成 对 state 中的数据修改后，state 中数据发生变化，重新更新 dom。

   6. 当 actions 中用于响应组件某个指令的方法业务逻辑过多时，可以将 actions 中的响应方法进行拆分成多个，然后通
      过 this.$store.dispatch 分别调用。
      另外，要注意的是，虽然可以在 actions 中的方法中可以直接访问到 state 中的数据而且可以进行修改，但是不要这样做，否则当使用 vuex 工具 进行调试时，就会导致数据的混乱。

4. Vuex 中的 getters 的使用
   getters 也是一个对象，其属性是一个个的方法，方法返回 state 中的数据进行加工处理后的值，给组件使用。
   定义的 getters，也需要在 创建 store 的实例时，作为参数，传给 options。

5. Vuex 中的 mapState 和 mapGetters
   mapState 帮助映射 state 中的 数据 为计算属性
   计算属性中使用 mapState (在要使用的地方导入 import {mapState} from Vuex)
   ...mapState({one:'one',two:'two'}) 或者 ...mapState(['one','two'])
   'one','two' 指 store 仓库 state 中的数据属性
   mapGetters 帮助映射 getters 中的数据 为计算属性
   使用方式 类比 mapState

6. Vuex 中的 mapActions 和 mapMutations
   mapActions 用于生成与 actions 对话的方法 ($store.dispatch())
   使用时，先引入，然后在 methods 中去使用 同 mapState 和 mapGetters 一样 有对象写法和数组写法两种形式

   mapMutations 用于生成 与 mutations 对话的方法 用法同 mapActions ($store.commit())

   需要注意的是，如果使用 mapActions 和 mapMutations 需要在使用的文件的 dom 节点绑定事件的时候要传递好参数。

# Vuex 的模块化 和命名空间 12_src vuex 的命名空间和模块化

1. 为什么在 vuex 中要使用模块化和命名空间？

   在使用 vuex 来管理项目中的状态时，使用 vuex 的模块化和命名空间不是必须的，但是当项目中的功能模块越来越多时，有时候把所有需要管理的状态写在一起不便于日后管理和维护，为了使每个功能模块的数据状态更加明确，此时可以使用 vuex 的模块化和命名空间对每个功能模块的数据进行划分管理。

2. vuex 中如何实现模块化和命名空间？

   为各个功能模块定义一个对象，其属性包含 state,actions,mutations,getters。
   各个模块需要进行管理等数据定义在 state 中
   各个模块操作数据的方法 定义在 actions（有业务逻辑或者异步请求的）
   各个模块直接操作数据的方法 定义在 mutations 中
   各个模块需要对 state 数据进行二次加工的定义到 getters 中
   定义好以上内容后，为当前定义的对象添加 namespaced:true 的属性 开启 命名空间

3. 如何使用模块化和命名空间?

   开启命名空间后

   读取 state 中的数据

   1. 直接读取 this.$store.state.moduleName.attribute
   2. 借助 mapState 读取 ...mapState(moduleName,['attribute'])

   读取 getters 中的数据

   1. 直接读取 this.$store.getters['moduleName/attribute']
   2. 借助 mapGetters ...mapGetters('moduleName',['attribute'])

   调用 actions 中的 dispatch

   1. 直接调用 this.$store.dispatch('moduleName/attribute',params) params 指要传递的数据
   2. 借助 mapActions ...mapActions('moduleName',{eventName:'actionsAPI'})
      eventName: 绑定事件的事件名
      actionsAPI: actions 中与之对应的 api

   调用 mutations 中的 commit

   1. 直接调用 this.$store.commit('moduleName/attribute',params) params 指要传递的数据
   2. 借助 mapMutations ...mapMutations('moduleName',{eventName:'mutationsAPI'})
      eventName: 绑定事件的事件名
      mutationsAPI:mutations 中与之对应的 api

# 路由相关 13_src vue 路由相关

1.  什么是路由？

    一个路由实际就是一组映射关系（key:value）,key 是路由规则，value 在 vue 中可以理解为一个对应的页面组件。
    当浏览器的路由发生变化时，展示匹配到对应路由规则的页面组件。

2.  vue 中 使用插件 vue-router 来管理路由，配置路由规则。

3.  单页面应用 spa 的理解
    单页面应用（SPA） 是 single page web application 的缩写,整个应用只有一个页面，通过配置的路由规则来控制将来要展示哪一部分，不刷新页面只做页面的局部更新，数据通过 ajax 获取。

4.  vue-router 的使用

    1.  安装

        npm i vue-router@3（安装 3 版本），npm i vue-router@4 安装 4 版本
        需要注意的是，vur-router 已经更新到了 4 版本，最新版本只能搭配 vue3，如果使用的是 vue2.x 的版本，那么需要搭配 vue-router 的 3 版本。

    2.  创建路由文件（一般在根目录创建 router 文件夹，入口文件 index.js），配置路由规则。

        1. 入口文件 导入 vue-router; (import VueRouter from 'vue-router' )
        2. 基于 new VueRouter({routes:[]}) 配置好路由规则.

           import VueRouter from "vue-router";
           import About from "../components/About.vue";
           import Home from "../components/Home.vue";
           export default new VueRouter({
           routes: [
           {
           path: "/about",
           component: About,
           },
           {
           path: "/home",
           component: Home,
           },
           ],
           });

    3.  vue-router 的使用

        1. 项目入口文件 main.js 导入 vue-router,并作为插件使用 Vue.use(VueRouter)，并导入配置的路由文件
        2. 在初始化 vue 实例时 基于导入的创建的路由文件初始化路由。
           new Vue({
           el: "#app",
           store,
           router,
           beforeCreate() {
           //注册 全局事件总线
           Vue.prototype.$bus = this;
           },
           render: (h) => h(App),
           });
        3. 在要使用的地方，用 <router-link></router-link> 来作为 a 标签，利用 router-link 的 to 属性来配置要跳转的路径
        4. 使用 <router-view></router-view> 标签 来作为 将来匹配上路由规则的组件的展示容器。

    4.  几个注意

        1. 我们通常把配置路由规则的组件称为路由组件，一般放在和 components 目录并列的 pages 目录下。
        2. 当我们切换路由时，其实本质上是将路由组件进行不断的挂载和销毁。
        3. 每个路由组件都有自己的$route 属性，里面存储着自己的路由信息。
        4. 整个应用只有一个 router 可以通过组件的$router 来访问。

    5.  嵌套路由（多级路由） 在路由配置文件中的一级路由中添加 children 属性配置一级路由的嵌套路由
        需要注意的是，配置嵌套路由时，path 路径不需要添加 '/',直接写子路由规则即可。
        另外，在使用嵌套路由时，router-link 的 to 属性 需要带着父路由规则。to='/parent/children'

    6.  路由传参

        1. query 传参
           1. 在跳转路由的 router-link 的 to 属性上 传递参数，然后在要跳转的组件中使用 $route.query 获取到传递的参数。 传递参数时，有两种方式:
           2. 字符串拼接 传递参数 :to="`/home/message/detail?id=${item.id}&title=${item.title}`"
           3. 对象传递
              <router-link
              :to="{
              path: '/home/message/detail',
              query: {
              id: item.id,
              title: item.title,
              },
              }"
              > </router-link>
        2. params 传参
           1. 要使用 params 传参 需要在路由配置文件中，在路由规则的 path 属性 使用 占位符声明接收 params 参数。（path:'detail/:id/:title'）
           2. 使用时 同样有两种方式
              字符串拼接 :to="`/home/message/detail/${item.id}/${item.title}`"
              对象形式
              <router-link
              :to="{
              name:'detail'
              params: {
              id: item.id,
              title: item.title,
              },
              }"
              > </router-link>需要注意的是 如果使用 params 传参数，那么使用对象形式传参的时候 不能使用 path ，必须搭配命名路由使用。
           3. 接收参数时，在要使用参数的组件 通过$route.params 获取

    7.  命名路由
        命名路由主要是为了简化在跳转路由时配置跳转路径的写法。
        不使用命名路由的写法
        <router-link to="/demo/test/welcome">跳转</router-link>
        使用命名路由的写法
        <router-link :to="{name:hello}">跳转</router-link>

        想要使用命名路由需要先在路由配置入口文件来配置好,为路由规则 添加 name 属性

    8.  路由的 props 属性
        无论是以 query 还是 params 形式传参数，都会面临一个问题，就是，当传递的参数比较多时，在要使用这些参数的组件中接收这些参数时都会比较琐碎，为了解决这个问题，可以使用 路由的 props 属性来解决。
        路由的 props 属性 有三种实现方式，均是在路由配置文件配置路由规则时添加。
        1. props 为一个对象，该对象中所有的 key-value 最终都会通过 props 传给要使用参数的组件，在要使用这些参数的组件中 通过 props 属性 接收后可直接使用。但是这种方式比较局限，只能传递固定数据。
        2. props 为布尔值 true 这样会把路由所有通过 params 传递的参数 通过 props 传递给 组件。
           局限性在于 只支持 params 传参。
        3. props 为一个函数 该函数返回的每一组 key-value 都会通过 props 传递给需要参数的组件。这种方式既适用于 params 传参，也适用于 query 传参。
           props($route){
         return{
           id:$route.query/params.id,
           name:$route.query/params.name
           }
           }
    9.  router-link 的模式
        router-link 有 replace 和 push 两种 模式，用来控制路由跳转时操作浏览器历史记录的模式.
        push 模式 追加历史记录
        replace 替换掉当前的记录
        router-link 默认是 push 模式
        router-link 开启 replace 模式 在 router-link 标签上添加 replace 属性即可。

    10. vue 中的编程式路由导航
        编程式路由导航是为了在不使用 router-link 标签时实现路由的跳转。
        形式:通过事件来实现跳转，
        this.$router.push({
         path/name:path/name,
         query/params:{}
         })
       传参时要写query 还是 params 要看是选用的哪种传参方式。
       或者 使用 replace 模式
       此外，编程式路由的其他几个常用的api
       this.$router.back() //后退一步
        this.$router.forward() //前进
       this.$router.go()//正数代表前进几步，负数代表后退几步

    11. vue 中的缓存路由

        1. 使用 keep-alive 来实现 缓存路由。
        2. 用 keep-alive 标签来包裹 router-view 标签， 通过关键字 include 来控制哪些组件路由进行缓存，
           如果不添加 include 那么将来要在 router-view 中展示的所有的组件路由都会被缓存。
        3. include 关键字 值为 组件名 而非配置路由规则时的路由名,要进行路由缓存的组件要添加 name 属性。
           include = 'News' 缓存一个路由的写法
           include = ['News','Message'] 缓存多个路由的写法

    12. vue 中的另外两个生命周期钩子
        当为某个组件添加了路由缓存并且在当前组件中开启了一个定时器后，当从当前组件切走时，该组件的 beforeDestroy 和 destroyed 生命周期钩子就不会再被触发，添加的定时器也就没有机会清除。
        解决这个问题，可以使用 vue 中另外的两个生命周期钩子 activated 和 deactivated 来解决。
        activated 路由组件被激活时 触发
        deactivated 路由组件失活时 触发

    13. 在 vue 中 可以使用路由守卫来控制用户可以激活哪些路由组件，进行路由的权限控制。
        路由守卫分为 全局路由守卫，独享路由守卫，组件内的路由守卫。

        1. 全局路由守卫:包括全局前置守卫 和 全局后置守卫。

           1. 全局前置路由守卫:会在初始化和切换路由时触发，通常在切换路由时通过条件进行权限控制。
              一般添加在 router 的入口文件 index.js 中，通过函数 router.beforeEach((to,from,next)=>{}) 来根据路由路径和其他条件来 实现路由守卫。
              to: 要跳转的路由
              form: 起初的路由
              next() 用于对符合条件的路由进行放行

           2. 全局后置路由守卫:会在初始化和切换路由后触发 通常用于在切换路由之后做一些操作
              通过 router.afterEach((to,from,next)=>{})进行控制。
              与前置路由守卫不同的是，没有 next() 参数

           如果想在配置的路由规则中自定义添加一些字段，用于辅助路由守卫，可以在路由配置规则的 meta:{} 对象上添加，否则是添加不生效的。

        2. 独享路由守卫
           单独为某个路由规则添加的路由守卫，只有前置，没有后置。 通过函数 beforeEnter((to,from,next)=>{})来实现。
           注意 独享路由守卫 没有 afterEnter。

        3. 组件内路由守卫
           与全局路由守卫和独享路由守卫不同的是，组件内路由守卫并不是写在路由规则配置文件中的，而是写在组件内部的。
           组件内路由守卫 通过 beforeRouteEnter(to,from,next){} 和 beforeRouteLeave(to,from,next){} 来设置。
           beforeRouteEnter 通过路由守卫 进入到该组件时触发
           beforeRouteLeave 通过路由守卫 离开该组件时被调用

    14. 路由的 hash 模式和 history 模式

        在路由的配置文件中 通过 mode 属性 指定 当前路由模式是选用 hash 模式还是 history 模式。

        hash 模式:

        1. 地址带'#'号，不美观（路由默认的便是 hash 模式，像这种 http://localhost:8080/#/home/message，带'#'号的是 hash 模式的标识。）
        2. 兼容性较好；
        3. 若将地址通过第三方手机 app 分享，地址可能会被标记为不合法。

        hash 模式 '#'号后的值不会包含在 http 的请求中（hash 值不会带给服务器）
        项目上线前，需要打包，然后将打包好的静态资源放在服务器上访问，如果使用的是 hash 路由模式，那么 hash 值不会被添加到请求中，当访问某个带 hash 值路径的资源时，可以正常访问，刷新也不会有影响。

        history 模式:

        1. 不包含'#'号，地址干净美观；
        2. 兼容性相较 hash 模式略差；
        3. 项目上线时将打包后将资源部署到服务器在打开的页面刷新，会出现服务端页面 404 的问题（http://localhost:8080/home/message 是路由地址而非请求路径，但是 history 模式会将整个 http://localhost:8080/home/message 当作请求路径，找不到对应该路径下的资源所以会报 404）。

        如果项目上线 要使用 history 模式，需要后端人员支持。

# vue 常用 ui 组件库 14_src element_ui 的使用

1. vue 常用 UI 组件库

   1. 移动端:
      Vant: https://vant-contrib.gitee.io/vant/#/zh-CN/
      Mint UI: https://mint-ui.github.io/#!/zh-cn

   2. PC 端
      Element UI :https://element.eleme.cn/#/zh-CN
      AntdDesignVue:https://www.antdv.com/docs/vue/introduce

2. element ui 的使用

   完整引用（体积较大）

   1. 安装 npm i element-ui -S
   2. 在 main.js 中 引入
      import ElementUI from 'element-ui';
      import 'element-ui/lib/theme-chalk/index.css';
   3. 作为插件使用 Vue.use(ElementUI)
   4. 在页面上参照官网使用它的组件即可。

   按需引入（用到哪些引用哪些）

   1. 安装 babel-plugin-component
      npm install babel-plugin-component -D
   2. 在项目的.babelrc 文件或者 babel.config.js 中 作如下配置
      {
      "presets": [["es2015", { "modules": false }]],
      "plugins": [
      [
      "component",
      {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-chalk"
      }
      ]
      ]
      }
      需要注意的是，因为脚手架更新或者其他原因，有时做如上配置在运行时会出现错误，这时可以尝试 将 ["es2015", { "modules": false }] 修改为 ["@babel/preset-env", { modules: false }],
   3. 在入口文件 main.js 中 用到哪个组件就引入哪个组件，并且注册为插件

      import { Button } from 'element-ui';
      Vue.use(Button)
      即可。

   更多详细内容可以 element 的参考官网。

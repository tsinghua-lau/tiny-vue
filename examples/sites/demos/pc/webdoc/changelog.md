# 更新日志

## v2.11.0/v3.11.0

`2023/10/24`

### Exciting New Features 🎉

* feat(color-picker): add color-picker component by [@GaoNeng-wWw](https://github.com/GaoNeng-wWw) in [#383](https://github.com/opentiny/tiny-vue/pull/383)
* feat: add rich-text-editor component by [@kagol](https://github.com/kagol) in [#401](https://github.com/opentiny/tiny-vue/pull/401)
* feat(rich-text-editor): add row height and merge h1-h6 and pargraph by [@Caesar-ch](https://github.com/Caesar-ch) in [#414](https://github.com/opentiny/tiny-vue/pull/414)
* feat(rich-text-editor): support code highlight by [@Caesar-ch](https://github.com/Caesar-ch) in [#440](https://github.com/opentiny/tiny-vue/pull/440)
* feat: optimize rich text editor toolbar style by [@kagol](https://github.com/kagol) in [#444](https://github.com/opentiny/tiny-vue/pull/444)
* feat(rich-text-editor): add font-size selection by [@Caesar-ch](https://github.com/Caesar-ch) in [#448](https://github.com/opentiny/tiny-vue/pull/448)
* feat(rich-text-editor): css style adjustment by [@Caesar-ch](https://github.com/Caesar-ch) in [#459](https://github.com/opentiny/tiny-vue/pull/459)
* feature(divider): 增加 Divider 组件 ([#354](https://github.com/opentiny/tiny-vue/issues/354) close) by [@vaebe](https://github.com/vaebe) in [#471](https://github.com/opentiny/tiny-vue/pull/471)
* feat(rich-text-editor): add vue2 support by [@Caesar-ch](https://github.com/Caesar-ch) in [#483](https://github.com/opentiny/tiny-vue/pull/483)
* feat(rich-text-editor): fix bug, add font-size and add api demo by [@Caesar-ch](https://github.com/Caesar-ch) in [#497](https://github.com/opentiny/tiny-vue/pull/497)
* feat(rich-text-editor): support media url by [@Caesar-ch](https://github.com/Caesar-ch) in [#508](https://github.com/opentiny/tiny-vue/pull/508)
* feat: color select panel component by [@GaoNeng-wWw](https://github.com/GaoNeng-wWw) in [#492](https://github.com/opentiny/tiny-vue/pull/492)
* feat: scripts support cross-platform by [@gweesin](https://github.com/gweesin) in [#554](https://github.com/opentiny/tiny-vue/pull/554)
* feat(react): collect refs and children in one traverse by [@pe-3](https://github.com/pe-3) in [#551](https://github.com/opentiny/tiny-vue/pull/551)
* feat(color-select-panel): history & predefine color by [@GaoNeng-wWw](https://github.com/GaoNeng-wWw) in [#530](https://github.com/opentiny/tiny-vue/pull/530)
* feat(react): add switch comp with mobile & pc mode by [@pe-3](https://github.com/pe-3) in [#565](https://github.com/opentiny/tiny-vue/pull/565)
* feat(react): add badge comp with mobile & pc mode by [@pe-3](https://github.com/pe-3) in [#566](https://github.com/opentiny/tiny-vue/pull/566)
* feat(react): ehance virtual comp，each comp has v-if，default as true by [@pe-3](https://github.com/pe-3) in [#564](https://github.com/opentiny/tiny-vue/pull/564)
* feat(popeditor): adds the autoreset property by [@wkif](https://github.com/wkif) in [#562](https://github.com/opentiny/tiny-vue/pull/562)
* feat(react): add mobile mode in tiny react alert by [@pe-3](https://github.com/pe-3) in [#550](https://github.com/opentiny/tiny-vue/pull/550)
* feat(anchor): Add anchor component dot type theme by [@chenxi-20](https://github.com/chenxi-20) in [#587](https://github.com/opentiny/tiny-vue/pull/587)
* feat(fileupload): Added the function of pasting and uploading files by [@chenxi-20](https://github.com/chenxi-20) in [#593](https://github.com/opentiny/tiny-vue/pull/593)
* feat(search): Add default selection function for search types and pre… by [@chenxi-20](https://github.com/chenxi-20) in [#614](https://github.com/opentiny/tiny-vue/pull/614)
* feat(calendar-view): add calendar-view component
* feat(search):增加搜索类型默认值属性
* feat(fileupload):增加粘贴上传功能
* feat(anchor): 增加锚点 dot 类型
* feat: 使用一套组件库包支持vue2.6.x和vue2.7.x
* feat(form): XDesign表单校验失败新增错误图标
* feat(select): Select组件，新增clearNoMatchValue属性，自动清空不匹配值
* feat(tree): tree组件适配XDesign设计规范
* feat(timeline): Timeline组件增加line-width属性, 用以设置连接线长度

### Bug Fixes 🐛

* fix(sites): 切换 sites 引用 @opentiny/vue-repl包 by [@shenjunjian](https://github.com/shenjunjian) in [#391](https://github.com/opentiny/tiny-vue/pull/391)
* fix:When nesting using Split, the mouse direction on the left and right split line is wrong when the upper and lower division is nested by [@jack-zishan](https://github.com/jack-zishan) in [#392](https://github.com/opentiny/tiny-vue/pull/392)
* fix: fix packages/vue/package.json format error when execute pnpm dev by [@kagol](https://github.com/kagol) in [#387](https://github.com/opentiny/tiny-vue/pull/387)
* fix(sites): change design config when change theme by [@gimmyhehe](https://github.com/gimmyhehe) in [#393](https://github.com/opentiny/tiny-vue/pull/393)
* fix(color-picker): 修复组件若干问题 by [@GaoNeng-wWw](https://github.com/GaoNeng-wWw) in [#394](https://github.com/opentiny/tiny-vue/pull/394)
* fix Playground Page by [@shenjunjian](https://github.com/shenjunjian) in [#399](https://github.com/opentiny/tiny-vue/pull/399)
* fix(sites): fix by [@shenjunjian](https://github.com/shenjunjian) in [#400](https://github.com/opentiny/tiny-vue/pull/400)
* fix(playground): fix process.env \ changeVersion \sortablejs bugs by [@shenjunjian](https://github.com/shenjunjian) in [#422](https://github.com/opentiny/tiny-vue/pull/422)
* fix(sites): fix grid demo api link jump error url by [@gimmyhehe](https://github.com/gimmyhehe) in [#421](https://github.com/opentiny/tiny-vue/pull/421)
* fix(modal): fix css value error by [@Zz-ZzzZ](https://github.com/Zz-ZzzZ) in [#426](https://github.com/opentiny/tiny-vue/pull/426)
* fix(search): the enter bug of the search component is fixed by [@chenxi-20](https://github.com/chenxi-20) in [#439](https://github.com/opentiny/tiny-vue/pull/439)
* fix(checkbox): fix checkbox selected icon bug close [#450](https://github.com/opentiny/tiny-vue/issues/450) by [@gimmyhehe](https://github.com/gimmyhehe) in [#451](https://github.com/opentiny/tiny-vue/pull/451)
* fix: fix when datetime component in dialog-box, the popper scroll awa… by [@shenjunjian](https://github.com/shenjunjian) in [#455](https://github.com/opentiny/tiny-vue/pull/455)
* fix(time-picker): fix time-picker arrow-control bug by [@kagol](https://github.com/kagol) in [#464](https://github.com/opentiny/tiny-vue/pull/464)
* fix: alert mobile close should works by [@LinboLen](https://github.com/LinboLen) in [#478](https://github.com/opentiny/tiny-vue/pull/478)
* 🐛 fork tiny-vue 启动失败，添加字符串末尾缺少的引号 by [@allenli178](https://github.com/allenli178) in [#488](https://github.com/opentiny/tiny-vue/pull/488)
* fix(dialog-box): 修复右侧弹窗不能滚动问题 by [@Binks123](https://github.com/Binks123) in [#500](https://github.com/opentiny/tiny-vue/pull/500)
* fix(Cascader, DropDown, Popeditor): fixed Cascader component panel no… by [@yoyo201626](https://github.com/yoyo201626) in [#513](https://github.com/opentiny/tiny-vue/pull/513)
* feat(rich-text-editor): resolve svg viewbox by [@Caesar-ch](https://github.com/Caesar-ch) in [#515](https://github.com/opentiny/tiny-vue/pull/515)
* fix(collapse): 修复collapse未深度监听导致Pc端tiny-collapse activeNames直接push无法响… by [@wkif](https://github.com/wkif) in [#512](https://github.com/opentiny/tiny-vue/pull/512)
* fix(slider): slider range select bug ([#390](https://github.com/opentiny/tiny-vue/issues/390)) by [@chenguang1994](https://github.com/chenguang1994) in [#518](https://github.com/opentiny/tiny-vue/pull/518)
* fix(dialog-box): dialog mask err([#495](https://github.com/opentiny/tiny-vue/issues/495)) by [@Zuowendong](https://github.com/Zuowendong) in [#503](https://github.com/opentiny/tiny-vue/pull/503)
* fix(theme): 修复官网组件标题背景色异常 by [@vaebe](https://github.com/vaebe) in [#496](https://github.com/opentiny/tiny-vue/pull/496)
* fix: fix pnpm dev:site error by [@kagol](https://github.com/kagol) in [#536](https://github.com/opentiny/tiny-vue/pull/536)
* docs(guide): fix alert out of bounds by [@Binks123](https://github.com/Binks123) in [#541](https://github.com/opentiny/tiny-vue/pull/541)
* fix: fix extra highlight color when press button in mobile mode by [@gweesin](https://github.com/gweesin) in [#537](https://github.com/opentiny/tiny-vue/pull/537)
* docs: fix popover demo position error when toggle code block by [@gweesin](https://github.com/gweesin) in [#535](https://github.com/opentiny/tiny-vue/pull/535)
* fix(color-select-panel): z-index by [@GaoNeng-wWw](https://github.com/GaoNeng-wWw) in [#560](https://github.com/opentiny/tiny-vue/pull/560)
* fix(guider): 箭头部分情况超出了指定位置，优化样式 ，解决计算问题([#454](https://github.com/opentiny/tiny-vue/issues/454)) by [@chenguang1994](https://github.com/chenguang1994) in [#539](https://github.com/opentiny/tiny-vue/pull/539)
* fix(tree): Click margin-top zoom will collapse treemenu([#559](https://github.com/opentiny/tiny-vue/issues/559)) by [@chenguang1994](https://github.com/chenguang1994) in [#568](https://github.com/opentiny/tiny-vue/pull/568)
* fix(popper): fix popper element offset error in micro-app by [@gimmyhehe](https://github.com/gimmyhehe) in [#570](https://github.com/opentiny/tiny-vue/pull/570)
* fix: Guide component mobile overflow by [@xlearns](https://github.com/xlearns) in [#574](https://github.com/opentiny/tiny-vue/pull/574)
* fix(numeric):numeric 修复输入超大数字变为科学计数法时失焦后组件消失的问题 by [@shonen7](https://github.com/shonen7) in [#563](https://github.com/opentiny/tiny-vue/pull/563)
* fix(rich-text-editor): fix Unsupported URL Type "link:" when execute npm i by [@kagol](https://github.com/kagol) in [#579](https://github.com/opentiny/tiny-vue/pull/579)
* fix：Added version import to component templates by [@wkif](https://github.com/wkif) in [#578](https://github.com/opentiny/tiny-vue/pull/578)
* fix(popper): remove window variable code by [@gimmyhehe](https://github.com/gimmyhehe) in [#586](https://github.com/opentiny/tiny-vue/pull/586)
* fix(rich-text-edtior):fix rich-text-edtior functionality and style issues by [@shonen7](https://github.com/shonen7) in [#592](https://github.com/opentiny/tiny-vue/pull/592)
* fix(doc): rename dom id avioding conflicts([#595](https://github.com/opentiny/tiny-vue/issues/595)) by [@chenguang1994](https://github.com/chenguang1994) in [#597](https://github.com/opentiny/tiny-vue/pull/597)
* chore: support alpha version and fix build error by [@kagol](https://github.com/kagol) in [#600](https://github.com/opentiny/tiny-vue/pull/600)
* fix(form): form tooltip append-to-body fix by [@gimmyhehe](https://github.com/gimmyhehe) in [#599](https://github.com/opentiny/tiny-vue/pull/599)
* fix(rich-text-editor): fix Unsupported URL Type link by [@kagol](https://github.com/kagol) in [#601](https://github.com/opentiny/tiny-vue/pull/601)
* fix: fix global registration error with rich-text-editor by [@zzcr](https://github.com/zzcr) in [#602](https://github.com/opentiny/tiny-vue/pull/602)
* fix(vue-icon_left-ward-arrow): Correct LeftWardArrow import path by [@yoyo201626](https://github.com/yoyo201626) in [#603](https://github.com/opentiny/tiny-vue/pull/603)
* fix: fix incorrect target in webComponent by [@gimmyhehe](https://github.com/gimmyhehe) in [#605](https://github.com/opentiny/tiny-vue/pull/605)
* fix: fix rich-text build error by [@zzcr](https://github.com/zzcr) in [#618](https://github.com/opentiny/tiny-vue/pull/618)
* fix(Rich Text Editor): Fix bugs in the Rich Text Editor by [@shonen7](https://github.com/shonen7) in [#616](https://github.com/opentiny/tiny-vue/pull/616)
* fix(color-picker、divider):Fix 'color picker' switch color failure, de… by [@shonen7](https://github.com/shonen7) in [#619](https://github.com/opentiny/tiny-vue/pull/619)
* fix(select-text-field): Select，text-fiel And value-field Example For One by [@Xppp0217](https://github.com/Xppp0217) in [#610](https://github.com/opentiny/tiny-vue/pull/610)
* Fix the issue of blocked headers in dialogBox by [@Huangyilin19](https://github.com/Huangyilin19) in [#620](https://github.com/opentiny/tiny-vue/pull/620)
* fix: add missing svg to fix build:ui error
* fix: fix vue-renderless/types path error
* fix(search): 修复enter回车键搜索报错问题
* fix(search): 修复搜索类型文字过长显示错位问题
* fix(fileupload):修复上传组件在文件上传时，点击取消上传报错问题
* fix(anchor):修复官网使用锚点时，固定模式闪现的问题**
* fix(grid): 修复grid表格筛选手动调用clearFilter不会触发filter-change方法的问题
* fix(popeditor): 修复popeditor组件在vue2.7下报错bug
* fix(form): 修复表单项下多个子元素导致tooltip重复
* fix(collapse): collspse组件图标与文体间距修改
* fix(checkbox): 修复checkbox禁用态悬浮bug
* fix(select): 修复 Select 组件，多选时初始化输入框高度不对
* fix(select): 修复Select组件下拉框没有默认添加到body上
* fix(select): 修复 Select 组件，折叠 Tag时，位置够却换行了
* fix(dropdown): 修复dropdownItem禁用时触发itemclick
* fix(dropdown): 修复Dropdown组件smb图标显示不正确
* fix(select): 修复select组件，大数据开启optimization时，未显示正确label
* fix(Slider): fix slider 范围选择
* fix(input): 修复当input组件传入id时，造成内部标签会接收透传id，造成双id问题
* fix(Cascader): 修复在验证Cascader单组件引入时面板不能正常关闭的问题
* fix(modal): Modal组件不响应动态宽度与高度
* fix(tree-menu): TreeMenu组件Saas主题下TreeMenu元素排布变形, 默认主题下图标位置不正确, 节点选中与悬浮的样式不对
* fix(tree-menu): TreeMenu组件的collapsible属性同时控制多个功能
* fix(tabbar): 移动端tabbar组件点击事件报错
* fix(tree): Tree组件自定义渲染内容时, 节点没对齐
* fix(steps): Steps组件内容鼠标悬浮光标不正确; 节点序号与图标颜色不正确
* fix(tree): Tree树懒加载数据无法渲染第一层节点

### Other Changes

* test(badge): add unit test by [@lyx-jay](https://github.com/lyx-jay) in [#388](https://github.com/opentiny/tiny-vue/pull/388)
* test(modal): add modal unit test by [@Zz-ZzzZ](https://github.com/Zz-ZzzZ) in [#374](https://github.com/opentiny/tiny-vue/pull/374)
* docs: update release notes by [@kagol](https://github.com/kagol) in [#397](https://github.com/opentiny/tiny-vue/pull/397)
* style(rich-text-editor): format code style by [@kagol](https://github.com/kagol) in [#402](https://github.com/opentiny/tiny-vue/pull/402)
* docs(rich-text-editor): add demo and api docs by [@kagol](https://github.com/kagol) in [#404](https://github.com/opentiny/tiny-vue/pull/404)
* docs(container): fix container composition demos fix [#425](https://github.com/opentiny/tiny-vue/issues/425) by [@kagol](https://github.com/kagol) in [#441](https://github.com/opentiny/tiny-vue/pull/441)
* test(modal): add surplus unit test by [@Zz-ZzzZ](https://github.com/Zz-ZzzZ) in [#435](https://github.com/opentiny/tiny-vue/pull/435)
* docs: fix the problem of missing container component style by [@kagol](https://github.com/kagol) in [#453](https://github.com/opentiny/tiny-vue/pull/453)
* feat(unit): add breadcrumb unit test by [@lyx-jay](https://github.com/lyx-jay) in [#457](https://github.com/opentiny/tiny-vue/pull/457)
* refactor(date-table): supplement the ts type declaration of the date-table component by [@kagol](https://github.com/kagol) in [#456](https://github.com/opentiny/tiny-vue/pull/456)
* feat(rich-text-editor): Add api design by [@Caesar-ch](https://github.com/Caesar-ch) in [#475](https://github.com/opentiny/tiny-vue/pull/475)
* docs: optimize time picker demo api docs by [@kagol](https://github.com/kagol) in [#482](https://github.com/opentiny/tiny-vue/pull/482)
* docs: optimzie date picker demo/api by [@kagol](https://github.com/kagol) in [#486](https://github.com/opentiny/tiny-vue/pull/486)
* optimize button docs by [@Binks123](https://github.com/Binks123) in [#522](https://github.com/opentiny/tiny-vue/pull/522)
* docs(anchor): optimize anchor demo api docs by [@Binks123](https://github.com/Binks123) in [#540](https://github.com/opentiny/tiny-vue/pull/540)
* docs(breadcrumb): optimize breadcrumb docs by [@Binks123](https://github.com/Binks123) in [#547](https://github.com/opentiny/tiny-vue/pull/547)
* feat(react): 添加贡献文档，readme 改名为 README by [@pe-3](https://github.com/pe-3) in [#538](https://github.com/opentiny/tiny-vue/pull/538)
* docs(README): correct misspellings by [@Zz-ZzzZ](https://github.com/Zz-ZzzZ) in [#561](https://github.com/opentiny/tiny-vue/pull/561)
* fix(divider,color-picker): divider组件content-position描述完善，以及部分api关联示例变动；color-picker组件修改错误变量 by [@shonen7](https://github.com/shonen7) in [#567](https://github.com/opentiny/tiny-vue/pull/567)
* feat: update pc/mobile/mobile-first docs by [@zzcr](https://github.com/zzcr) in [#583](https://github.com/opentiny/tiny-vue/pull/583)
* docs: update component number by [@kagol](https://github.com/kagol) in [#585](https://github.com/opentiny/tiny-vue/pull/585)
* feat: update docs api by [@zzcr](https://github.com/zzcr) in [#613](https://github.com/opentiny/tiny-vue/pull/613)
* feat(grid-size): table size integration by [@ianxinnew](https://github.com/ianxinnew) in [#617](https://github.com/opentiny/tiny-vue/pull/617)
* fix(grid-slot): Table Example Add Editor Slot by [@ianxinnew](https://github.com/ianxinnew) in [#608](https://github.com/opentiny/tiny-vue/pull/608)
* feat(grid-api): API Remove Default Text by [@ianxinnew](https://github.com/ianxinnew) in [#622](https://github.com/opentiny/tiny-vue/pull/622)
* fix(select-size): select component medium，small，mini Type For One by [@Xppp0217](https://github.com/Xppp0217) in [#607](https://github.com/opentiny/tiny-vue/pull/607)
* chore: examples/site demo support ts intellisense
* chore(picker): add picker ts declaration(vue.ts)
* chore(timeline): timeline与timelineItem组件补充ts类型
* chore(modal): modal组件补充ts类型声明
* chore(floatbar): floatbar组件补充ts类型声明
* chore(dialog-box): dialog-box组件补充ts类型声明
* chore(numeric): Numeric补充ts类型声明
* chore(playground): 优化playground的编辑器和分享功能

## v2.10.0/v3.10.0

`2023/08/14`

### Exciting New Features 🎉

* feat(pop-editor): 当编辑框弹出时添加自定义事件 fix [#268](https://github.com/opentiny/tiny-vue/issues/268) by [@yuanningning](https://github.com/yuanningning) in [#315](https://github.com/opentiny/tiny-vue/pull/315)
* feat(ip-address): 更改ipAddress组件的IPv6类型 close [#272](https://github.com/opentiny/tiny-vue/issues/272) by [@yuanningning](https://github.com/yuanningning) in [#337](https://github.com/opentiny/tiny-vue/pull/337)
* feat(filter-panel): 新增过滤器面板组件
* feat(dialog-select): 新增 DialogSelect 组件
* feat(infinite-scroll): 新增 InfiniteScroll 无限滚动组件
* feat(tag-group): 新增 TagGroup 标签组组件
* feat(docs): 官网添加示例composition-api写法，支持切换composition-api和option-api
* feat(docs): 组件demo支持playground
* feat(grid): 表格增加快捷筛选面板，可以支持多选框筛选和日期筛选 ，同时支持用户配置默认筛选项
* feat(grid): 表格排序按钮默认为x-design最新规范图标
* feat(grid): 表格提示现在支持自定义tooltip内容显示，支持字符串或者jsx
* feat(tree-menu): TreeMenu新增设置与获取当前选中节点的方法
* feat(tree-menu): 树形菜单新增可折叠特性
* feat(tree): Tree新增连接线设置
* feat(timeline-item): 新增timeline-item组件
* feat(modal): modal支持配置底部按钮props与文字
* feat(button-group): 按钮组新增单个disabled特性
* feat(alert): 新增close插槽，实现外部控制显示或隐藏 
* feat(alert): 组件图标取消垂直居中，采用固定定位 
* feat(time-picker): 支持设置步长 `step`
* feat(date-picker): 增加 label 内置功能 `label`
* feat(date-picker): 支持设置时间选择的步长 `step`
* feat(date-picker): 支持显示周次 `show-week-number`
* feat(date-picker): 支持过滤器模式 `shape="filter"`
* feat(date-picker): 支持年份多选和年份范围选择 `type="years" | type="yearrange"`
* feat(date-picker): 支持某日起始/某日为止功能 `type: 'startFrom'`

### Bug Fixes 🐛
* fix(numeric): 修复当前值+Step>max时不能取max的问题 by [@Huangyilin19](https://github.com/Huangyilin19) in [#297](https://github.com/opentiny/tiny-vue/pull/297)
* fix(grid): 修复了列冻结且没有滚动条时表格组件中的异常样式 by [@zzcr](https://github.com/zzcr) in [#298](https://github.com/opentiny/tiny-vue/pull/298)
* fix(button): 修复了朴素按钮图标禁用颜色的问题 by [@gimmyhehe](https://github.com/gimmyhehe) in [#299](https://github.com/opentiny/tiny-vue/pull/299)
* fix(grid): 修复了表过滤器面板的错误样式，修复了webpack本地环境下ResizeWatch接口的警告问题 by [@zzcr](https://github.com/zzcr) in [#305](https://github.com/opentiny/tiny-vue/pull/305)
* fix(theme): 从容器、布局中删除样式 by [@shenjunjian](https://github.com/shenjunjian) in [#306](https://github.com/opentiny/tiny-vue/pull/306)
* fix(vue-theme): 在文本区域组件中修复 `@apply` by [@shenjunjian](https://github.com/shenjunjian) in [#319](https://github.com/opentiny/tiny-vue/pull/319)
* fix(input): 修复了禁用的输入在表单错误中不生效的问题 by [@gimmyhehe](https://github.com/gimmyhehe) in [#322](https://github.com/opentiny/tiny-vue/pull/322)
* fix(checkbox): 修复了复选框标签为0时不显示错误的问题 by [@gimmyhehe](https://github.com/gimmyhehe) in [#331](https://github.com/opentiny/tiny-vue/pull/331)
* fix(select): 修复了计算选择组件的高度和错误创建项目的问题 by [@MomoPoppy](https://github.com/MomoPoppy) in [#358](https://github.com/opentiny/tiny-vue/pull/358)
* fix(carousel): 将箭头圆宽度调整为28px by [@lyx-jay](https://github.com/lyx-jay) in [#376](https://github.com/opentiny/tiny-vue/pull/376)
* fix(drawer): 蒙版消失的速度比内容更快 by [@lyx-jay](https://github.com/lyx-jay) in [#375](https://github.com/opentiny/tiny-vue/pull/375)
* fix(badge): 修复显示重复内容的问题 by [@lyx-jay](https://github.com/lyx-jay) in [#382](https://github.com/opentiny/tiny-vue/pull/382)
* fix: 修复了执行 pnpm build:ui vue 命令时的ts声明错误 by [@kagol](https://github.com/kagol) in [#386](https://github.com/opentiny/tiny-vue/pull/386)
* fix(grid): 修复表格冻结列在x-design规范显示异常问题
* fix(grid): 修复表格冻结列在表格有纵向滚动条时
* fix(grid):修复表格fetchdata情况下，表格数据被处理两次问题
* fix(tree): 修复isEmpty属性在节点数据变化后没响应变化的问题
* fix(button-group): XDesign主题朴素按钮字体颜色修复
* fix(input): 修复input在表单禁用状态时不生效bug
* fix(popover): 避免初始加载时，触发的hide事件
* fix(dialog-box): 不在body上增加class，可以避免引起的页面抖动
* fix(tabs): 取消初始化赋值，修复超出页签栏显示问题，优化更多弹出框 
* fix(icons): 优化图标部分的自定义宽度和颜色
* fix(theme): 取消主题切换后自动刷新页面
* fix(anchor): 修复锚点异步获取数据导致监听bug，增加切换动画效果
* fix(dropdown): 修复设置箭头显示不生效
* fix(select): 修复组件初始化创建条目的场景，同时设置option 和value，有匹配项却自动创建的问题 
* fix(select): 修复 select 组件多选多行时input框高度计算有误的问题
* fix(popEditor): 编辑框关闭时先隐藏了内容的问题

### Other Changes
* perf(tooltip): Tooltip 组件性能优化 by [@shenjunjian](https://github.com/shenjunjian) in [#368](https://github.com/opentiny/tiny-vue/pull/368)
* chore(row): 恢复演示示例中的样式 by [@shenjunjian](https://github.com/shenjunjian) in [#311](https://github.com/opentiny/tiny-vue/pull/311)
* feat(pnpm-lock): 添加 pnpm-lock.ymal 文件 by [@zzcr](https://github.com/zzcr) in [#320](https://github.com/opentiny/tiny-vue/pull/320)
* feat(button): 完善单元测试 by [@chenqifeng66](https://github.com/chenqifeng66) in [#364](https://github.com/opentiny/tiny-vue/pull/364)
* test(alert): 增加 Alert 组件单元测试 by [@Zz-ZzzZ](https://github.com/Zz-ZzzZ) in [#369](https://github.com/opentiny/tiny-vue/pull/369)
* docs(tag): 增加标签灵活用法，超出隐藏，显示title示例

## v2.9.0/v3.9.0

`2023/06/30`

### Exciting New Features 🎉

- feat: 新增 Popconfirm 气泡确认框、Drawer 抽屉、Guide 引导三个全新组件 🎊
- feat: 支持 vitepress 工程服务器端渲染 SSR 🎊
- feat: ButtonGroup 按钮组新增选块角标功能 🎊
- feat: 新增 Alert 组件新增关闭 Alert 后，控制再次 Alert 的显示或隐藏功能 🎊
- feat: 为每个组件添加运行时的版本号，方便用户查看当前组件版本号 🎊
- feat: Dropdown 组件新增 inheritWidth 属性，支持弹框最小宽度继承触发源宽度 🎊

### Bug Fixes 🐛

- fix(grid): 修复鼠标悬浮表格组件排序和筛选按钮时不应该出现 tooltip 提示问题
- fix(grid): 修复表格组件冻结列在 border 模式下，上边框被影藏的问题
- fix(grid): 修复表头冻结列在有滚动条时显示异常的 bug
- fix(grid): 修复表格右侧冻结列大于两个显示异常问题
- fix(search): 修复搜索组件无法在 popover 中自适应宽度的 bug
- fix(slider): 修复组件 slider 基础用法中设置值不生效的问题
- fix(grid): 修复 grid-column 组件 ts 类型声明报错问题
- fix(anchor): 修复线上环境产生的锚点监听偏移量不准引起的 bug
- fix(icon): 修复 IconEyeopen 颜色不可设置问题
- fix(datepick): 修改月份的计算范围的 bug 和无禁用色的 bug
- fix(datepick): 修复 DatePicker 组件部分选中日期颜色不正确的问题
- fix(ipAddress): 修复 ipAddress 组件 input 事件不生效
- fix(input): 修复 Input 组件 type=textarea 时文本框不响应 drag/drop 事件

## v2.8.0/v3.8.0

`2023/05/18`

### Exciting New Features 🎉

- feat: add XDesign 🎊
- feat: 升级 echarts 版本为最优版本 5.4.1 🎊

### Bug Fixes 🐛

* fix: 修复windows下pnpm install rm rf not found by [@coderbaozi](https://github.com/coderbaozi) in [#149](https://github.com/opentiny/tiny-vue/pull/149)
* 修复build:ui打包出来的产物有问题bug，修复input组件本地开发报警告bug by [@zzcr](https://github.com/zzcr) in [#150](https://github.com/opentiny/tiny-vue/pull/150)
* fix(tabs): fix tab header bottom border line close [#154](https://github.com/opentiny/tiny-vue/issues/154) by [@kagol](https://github.com/kagol) in [#155](https://github.com/opentiny/tiny-vue/pull/155)
* chore: Compatible with windows users by [@ErKeLost](https://github.com/ErKeLost) in [#151](https://github.com/opentiny/tiny-vue/pull/151)
* fix(carousel-item): 合并重复属性 by [@linxiang07](https://github.com/linxiang07) in [#152](https://github.com/opentiny/tiny-vue/pull/152)
* fix(checkbox): icon position when checked by [@zuixinwang](https://github.com/zuixinwang) in [#164](https://github.com/opentiny/tiny-vue/pull/164)
* fix(build:runtime): 修复打包runtime产物的脚本 by [@shenjunjian](https://github.com/shenjunjian) in [#183](https://github.com/opentiny/tiny-vue/pull/183)
* fix(build runtime) 修复打包运行时报错问题 by [@zzcr](https://github.com/zzcr) in [#185](https://github.com/opentiny/tiny-vue/pull/185)
* fix(carousel) 走马灯手动轮播切换到此处数据会偶现与实际不符 by [@WXC-Spring](https://github.com/WXC-Spring) in [#188](https://github.com/opentiny/tiny-vue/pull/188)
* fix(runtime-build) 修复：运行时多入口打包会抽取公共依赖，导致加载报错 by [@zzcr](https://github.com/zzcr) in [#191](https://github.com/opentiny/tiny-vue/pull/191)
* fix(dialog-box): 修复对话框移动后动态style没更新的bug by [@Huangyilin19](https://github.com/Huangyilin19) in [#195](https://github.com/opentiny/tiny-vue/pull/195)
* fix(upload) 修复upload组件销毁时报错的bug by [@zzcr](https://github.com/zzcr) in [#196](https://github.com/opentiny/tiny-vue/pull/196)
* fix(fileupload): 上传组件增加用户不配置action属性产生的报错，告知用户需要配置 by [@chenxi-20](https://github.com/chenxi-20) in [#199](https://github.com/opentiny/tiny-vue/pull/199)
* fix(button): 修复无内容的情况下上下错位的问题([#194](https://github.com/opentiny/tiny-vue/issues/194)) by [@qinwencheng](https://github.com/qinwencheng) in [#203](https://github.com/opentiny/tiny-vue/pull/203)
* fix: 修复pullRefresh组件，数据类型不匹配，导致控制台告警日志超大量打印，导致页面渲染慢的问题 by [@MrWang2016](https://github.com/MrWang2016) in [#211](https://github.com/opentiny/tiny-vue/pull/211)
* fix: 修复Breadcrumb配置textField的demo不显示面包屑内容 [#207](https://github.com/opentiny/tiny-vue/issues/207) by [@yuanningning](https://github.com/yuanningning) in [#210](https://github.com/opentiny/tiny-vue/pull/210)
* fix(rate) 修复组件Rate半选加禁选后，2.5与3星实际不匹配的问题 by [@wwttff](https://github.com/wwttff) in [#200](https://github.com/opentiny/tiny-vue/pull/200)
* fix(build) 修复grid、pager组件bug by [@zzcr](https://github.com/zzcr) in [#240](https://github.com/opentiny/tiny-vue/pull/240)
* fix: fix npm publish 402 error by [@kagol](https://github.com/kagol) in [#241](https://github.com/opentiny/tiny-vue/pull/241)

### Other Changes

* chore: 添加文件后缀名 by [@CatsAndMice](https://github.com/CatsAndMice) in [#160](https://github.com/opentiny/tiny-vue/pull/160)
* refactor(button): 优化size属性校验 by [@LadyChatterleyLover](https://github.com/LadyChatterleyLover) in [#162](https://github.com/opentiny/tiny-vue/pull/162)
* docs：中英文README和贡献指南文档中端口号的修正，以及Issue模板中的小助手微信号修正 by [@heygsc](https://github.com/heygsc) in [#171](https://github.com/opentiny/tiny-vue/pull/171)
* docs: 增加 all-contributors 机器人🤖️用于自动添加贡献者 by [@kagol](https://github.com/kagol) in [#214](https://github.com/opentiny/tiny-vue/pull/214)
* docs: update README.zh-CN.md by [@kagol](https://github.com/kagol) in [#216](https://github.com/opentiny/tiny-vue/pull/216)
* doc: 修改文档示例 by [@GaoNeng-wWw](https://github.com/GaoNeng-wWw) in [#224](https://github.com/opentiny/tiny-vue/pull/224)

## v2.6.6/v3.6.6

`2023/04/19`

### Exciting New Features 🎉

* feat: 增加 vue-vite-import 插件 by [@kagol](https://github.com/kagol) in [#135](https://github.com/opentiny/tiny-vue/pull/135)
* feat: 当children为空数组是认为是叶子节点 by [@GaoNeng-wWw](https://github.com/GaoNeng-wWw) in [#143](https://github.com/opentiny/tiny-vue/pull/143)

### Bug Fixes 🐛

* fix(ipaddress): 切换tab键会从192跳过168到0 by [@rayhaoqin](https://github.com/rayhaoqin) in [#122](https://github.com/opentiny/tiny-vue/pull/122)
* fix: 修复 pnpm dev:docs 报错的问题。 by [@ygj6](https://github.com/ygj6) in [#123](https://github.com/opentiny/tiny-vue/pull/123)
* fix: fix vuepress-vite version error when execute pnpm i by [@kagol](https://github.com/kagol) in [#126](https://github.com/opentiny/tiny-vue/pull/126)
* fix(chart-line): fix line-chart tooltip.axisPointer.lineStyle does not take effect close [#130](https://github.com/opentiny/tiny-vue/issues/130) by [@kagol](https://github.com/kagol) in [#131](https://github.com/opentiny/tiny-vue/pull/131)
* fix(types): 修复vue3-example项目中的ts报错。 by [@ygj6](https://github.com/ygj6) in [#132](https://github.com/opentiny/tiny-vue/pull/132)
* fix(date-picker): fix date-picker style by [@kagol](https://github.com/kagol) in [#136](https://github.com/opentiny/tiny-vue/pull/136)
* Fix issue [#115](https://github.com/opentiny/tiny-vue/issues/115) by [@acyza](https://github.com/acyza) in [#116](https://github.com/opentiny/tiny-vue/pull/116)
* fix(table): table-misaligned when frozen columns by [@awspi](https://github.com/awspi) in [#140](https://github.com/opentiny/tiny-vue/pull/140)
* 修复tooltip`append-to-body="false"`时在表格中位置计算错误 by [@acyza](https://github.com/acyza) in [#146](https://github.com/opentiny/tiny-vue/pull/146)
* fix(pull-refresh): 修复下拉刷新组件频繁触发的问题 by [@TC-twwang](https://github.com/TC-twwang) in [#145](https://github.com/opentiny/tiny-vue/pull/145)

### Other Changes

* refactor(tabs): optimize new tab button postion close [#127](https://github.com/opentiny/tiny-vue/issues/127) by [@kagol](https://github.com/kagol) in [#128](https://github.com/opentiny/tiny-vue/pull/128)

## v2.6.1/v3.6.1

`2023/04/08`

### Exciting New Features 🎉

* feat(timeline): 增加箭头点击区域 by [@MNZhu](https://github.com/MNZhu) in [#103](https://github.com/opentiny/tiny-vue/pull/103)

### Bug Fixes 🐛

* fix(radio): 修复主题配置radio-button无法继承属性的bug，打开可继承属性 by [@chenxi-20](https://github.com/chenxi-20) in [#82](https://github.com/opentiny/tiny-vue/pull/82)
* fix: fix monorepo by [@kagol](https://github.com/kagol) in [#91](https://github.com/opentiny/tiny-vue/pull/91)
* fix(anchor): 修复父锚点指示异常的问题 by [@chenxi-20](https://github.com/chenxi-20) in [#93](https://github.com/opentiny/tiny-vue/pull/93)
* fix: Failed to resolve entry for package "@opentiny/vue" close [#99](https://github.com/opentiny/tiny-vue/issues/99) by [@kagol](https://github.com/kagol) in [#100](https://github.com/opentiny/tiny-vue/pull/100)
* fix(upload): 取消fileupload组件的自动隐藏和提示功能，修改成用户可自定义配置 by [@chenxi-20](https://github.com/chenxi-20) in [#95](https://github.com/opentiny/tiny-vue/pull/95)
* fix(exception): 优化定位布局样式 by [@MNZhu](https://github.com/MNZhu) in [#104](https://github.com/opentiny/tiny-vue/pull/104)
* fix(timeline): 修复单个节点数据显示线条问题 by [@MNZhu](https://github.com/MNZhu) in [#105](https://github.com/opentiny/tiny-vue/pull/105)
* fix: 修复打包，发布报错等问题，调整类型声明等问题 by [@zzcr](https://github.com/zzcr) in [#108](https://github.com/opentiny/tiny-vue/pull/108)
* fix(vue-common): 修复adapter中的mode的传值问题 by [@shenjunjian](https://github.com/shenjunjian) in [#110](https://github.com/opentiny/tiny-vue/pull/110)
* fix: 修复文档初始`pathname`错误 by [@acyza](https://github.com/acyza) in [#107](https://github.com/opentiny/tiny-vue/pull/107)
* fix: 修复国际化键值的问题 by [@shenjunjian](https://github.com/shenjunjian) in [#111](https://github.com/opentiny/tiny-vue/pull/111)
* fix: 添加打包前置脚本 by [@zzcr](https://github.com/zzcr) in [#112](https://github.com/opentiny/tiny-vue/pull/112)
* fix(vue-panel): 修复panel 的问题 by [@shenjunjian](https://github.com/shenjunjian) in [#113](https://github.com/opentiny/tiny-vue/pull/113)
* fix: Removing the invalid resource path enables `pnpm dev` to succeed. by [@ygj6](https://github.com/ygj6) in [#109](https://github.com/opentiny/tiny-vue/pull/109)
* fix: fix build error by [@kagol](https://github.com/kagol) in [#119](https://github.com/opentiny/tiny-vue/pull/119)
* fix(grid): 使用gpu加速优化虚拟滚动性能，修复筛选面板单选框无法选中问题 by [@zzcr](https://github.com/zzcr) in [#121](https://github.com/opentiny/tiny-vue/pull/121)

### Other Changes

* refactor: Refactor project to Monorepo and TypeScript by [@kagol](https://github.com/kagol) in [#90](https://github.com/opentiny/tiny-vue/pull/90)
* refactor: remove useless files by [@kagol](https://github.com/kagol) in [#92](https://github.com/opentiny/tiny-vue/pull/92)
* docs: update README by [@kagol](https://github.com/kagol) in [#98](https://github.com/opentiny/tiny-vue/pull/98)

## v2.6.0/v3.6.0

`2023/03/22`

### Exciting New Features 🎉

* feat(anchor): 新增anchor组件第一个功能：基本使用 by [@chenxi-20](https://github.com/chenxi-20) in [#30](https://github.com/opentiny/tiny-vue/pull/30)
* feat(modal): 增加反馈弹窗modal组件 by [@MNZhu](https://github.com/MNZhu) in [#19](https://github.com/opentiny/tiny-vue/pull/19)
* feat(button): 按钮组件样式修改 by [@MNZhu](https://github.com/MNZhu) in [#21](https://github.com/opentiny/tiny-vue/pull/21)
* feat(multi-select): 增加下拉选择器multi-select组件 by [@TC-twwang](https://github.com/TC-twwang) in [#22](https://github.com/opentiny/tiny-vue/pull/22)
* feat(search): 搜索组件样式修改 by [@MNZhu](https://github.com/MNZhu) in [#33](https://github.com/opentiny/tiny-vue/pull/33)
* feat(anchor): 添加锚点anchor组件onchange事件 by [@chenxi-20](https://github.com/chenxi-20) in [#35](https://github.com/opentiny/tiny-vue/pull/35)
* feat(timeline): 时间线插槽作用域增加index属性 by [@chenxi-20](https://github.com/chenxi-20) in [#39](https://github.com/opentiny/tiny-vue/pull/39)
* feat(timeline): timeline样式修改 by [@MNZhu](https://github.com/MNZhu) in [#38](https://github.com/opentiny/tiny-vue/pull/38)
* feat(form): form组件增加自动换行 by [@TC-twwang](https://github.com/TC-twwang) in [#40](https://github.com/opentiny/tiny-vue/pull/40)
* feat(indexbar): 增加索引组件 by [@MNZhu](https://github.com/MNZhu) in [#47](https://github.com/opentiny/tiny-vue/pull/47)
* feat(form): form组件增加自动换行-检视意见修改 by [@TC-twwang](https://github.com/TC-twwang) in [#54](https://github.com/opentiny/tiny-vue/pull/54)
* feat(anchor): 锚点组件增加固定模式，修复示例文档bug问题 by [@chenxi-20](https://github.com/chenxi-20) in [#49](https://github.com/opentiny/tiny-vue/pull/49)
* feat(anchor): 修复检视意见，同步远程代码 by [@chenxi-20](https://github.com/chenxi-20) in [#55](https://github.com/opentiny/tiny-vue/pull/55)
* feat(anchor): 调整anchor组件，让其可以适配主题配置 by [@chenxi-20](https://github.com/chenxi-20) in [#57](https://github.com/opentiny/tiny-vue/pull/57)
* feat(badge): add badge-class close [#50](https://github.com/opentiny/tiny-vue/issues/50) by [@kagol](https://github.com/kagol) in [#51](https://github.com/opentiny/tiny-vue/pull/51)
* feat(tag): add beforeDelete props by [@kagol](https://github.com/kagol) in [#52](https://github.com/opentiny/tiny-vue/pull/52)
* feat(form): form组件增加自动换行-增加移动端条件校验 by [@TC-twwang](https://github.com/TC-twwang) in [#58](https://github.com/opentiny/tiny-vue/pull/58)
* feat(switch): add beforeChange props by [@kagol](https://github.com/kagol) in [#59](https://github.com/opentiny/tiny-vue/pull/59)
* feat(fullscreen): add beforeChange props by [@kagol](https://github.com/kagol) in [#61](https://github.com/opentiny/tiny-vue/pull/61)
* feat(badge): add offset props by [@kagol](https://github.com/kagol) in [#63](https://github.com/opentiny/tiny-vue/pull/63)
* feat(tabs): tabs组件支持展开 by [@TC-twwang](https://github.com/TC-twwang) in [#60](https://github.com/opentiny/tiny-vue/pull/60)
* feat(split): add collapsible props by [@kagol](https://github.com/kagol) in [#64](https://github.com/opentiny/tiny-vue/pull/64)
* feat(pull-refresh): pull-refresh组件支持上拉刷新 by [@TC-twwang](https://github.com/TC-twwang) in [#67](https://github.com/opentiny/tiny-vue/pull/67)
* feat(tabs): 增加tabs组件超出隐藏提示tip配置 by [@chenxi-20](https://github.com/chenxi-20) in [#68](https://github.com/opentiny/tiny-vue/pull/68)
* feat(action-menu): 修复 ActionMenu 下拉后箭头旋转向上 by [@MomoPoppy](https://github.com/MomoPoppy) in [#70](https://github.com/opentiny/tiny-vue/pull/70)
* feat(transfer): add beforeTransfer props by [@kagol](https://github.com/kagol) in [#75](https://github.com/opentiny/tiny-vue/pull/75)
* feat(search): add prefix/suffix slots by [@kagol](https://github.com/kagol) in [#77](https://github.com/opentiny/tiny-vue/pull/77)

### Bug Fixes 🐛

* fix(ipaddress): form的示例增加numeric,ipaddress的校验示例 by [@shenjunjian](https://github.com/shenjunjian) in [#29](https://github.com/opentiny/tiny-vue/pull/29)
* fix: 修复构建错误 by [@kagol](https://github.com/kagol) in [#25](https://github.com/opentiny/tiny-vue/pull/25)
* fix: 修复echarts和cropperjs依赖版本落后问题 by [@yuanningning](https://github.com/yuanningning) in [#27](https://github.com/opentiny/tiny-vue/pull/27)
* fix(grid): 修复表格再虚拟滚动模式下，始终有横向滚动条问题 by [@zzcr](https://github.com/zzcr) in [#32](https://github.com/opentiny/tiny-vue/pull/32)
* fix(checkbox): 修复vue3模式下，checkbox-group的change事件触发2次的问题 by [@shenjunjian](https://github.com/shenjunjian) in [#31](https://github.com/opentiny/tiny-vue/pull/31)
* fix(anchor): 修复anchor组件MD文档说明 by [@chenxi-20](https://github.com/chenxi-20) in [#34](https://github.com/opentiny/tiny-vue/pull/34)
* fix(milestone): 修复里程碑图标不对齐bug by [@chenxi-20](https://github.com/chenxi-20) in [#37](https://github.com/opentiny/tiny-vue/pull/37)
* fix: 修复存在2个高度不一样的notify时，新增的notify高度错误 by [@rayhaoqin](https://github.com/rayhaoqin) in [#26](https://github.com/opentiny/tiny-vue/pull/26)
* fix(switch): switch组件提示文字只在首次显示，切换开关状态后提示文字消失 by [@yuanningning](https://github.com/yuanningning) in [#42](https://github.com/opentiny/tiny-vue/pull/42)
* fix(tiny-loading): 修复loading组件在vue2.0版本报错bug by [@zzcr](https://github.com/zzcr) in [#46](https://github.com/opentiny/tiny-vue/pull/46)
* fix(indexbar): 类命名整改 by [@MNZhu](https://github.com/MNZhu) in [#56](https://github.com/opentiny/tiny-vue/pull/56)
* fix(dropdown): 修复 dropdown 下拉后箭头旋转向上 by [@MomoPoppy](https://github.com/MomoPoppy) in [#45](https://github.com/opentiny/tiny-vue/pull/45)
* fix(cascader): 修复级联组件属性无法透传问题 by [@rayhaoqin](https://github.com/rayhaoqin) in [#66](https://github.com/opentiny/tiny-vue/pull/66)
* fix(dropdown-mobile): 修复移动端组件dropdownMenu无法正常渲染的问题，顺带修复pc端dropDown组件的警告 by [@chenxi-20](https://github.com/chenxi-20) in [#80](https://github.com/opentiny/tiny-vue/pull/80)
* fix: 修复tabs组件展开内容被遮盖，multi-slect返回值增加value by [@TC-twwang](https://github.com/TC-twwang) in [#81](https://github.com/opentiny/tiny-vue/pull/81)

### Other Changes

* docs: update CONTRIBUTING.md by [@kagol](https://github.com/kagol) in [#62](https://github.com/opentiny/tiny-vue/pull/62)
* docs: add english README and CONTRIBUTING by [@kagol](https://github.com/kagol) in [#79](https://github.com/opentiny/tiny-vue/pull/79)

## v2.5.0/v3.5.0

`2023/02/27`

### 📢 破坏性变更

- 【Chart 组件】图表组件的谷歌地图和百度地图的数据接口改为由用户自行配置
- 【主题变量】如果升级版本，引用的主题变量会失效；因为此次升级，主题变量进行了规范化整改，如果老项目中有使用到主题变量，请参考主题替换文档，完成项目主题变量新旧替换。

### ✨ 新特性

- Grid
  - 增加行拖拽添加设置拖拽范围功能
  - 增加工具栏提供下拉筛选列的功能
- 【Loading 组件】新增移动端 Loading 组件
- 【Popover 组件】增加移动端 Popover 组件
- 【Select 组件】增加触发源插槽 reference
- 【全局的滚动开关】增加 PopupManager.globalScroll 属性，可以解决某些场景中，弹出层不跟随滚动的问题

### 🐞 缺陷修复

- 【ActionMenu 组件】修复 ActionMenu 组件的弹出无法选中等问题
- 【Checkbox 组件】移动端复选框组件样式修改
- 【Crop 组件】修复 crop 主题变量挂载，优先级被挂载在 dev.tiny-crop 的内部变量覆盖问题
- 【Dialog 组件】修复 dialog 低代码样式覆盖问题，并适配主题配置
- DialogBox
  - 修复右侧弹窗关闭按钮报错的问题
  - 修改 dialogBox 在控制台提示找不到 broadcast 的问题
- 【Dropdown 组件】修复 Dropdown 的禁用时，vnode 的 disable 没有传递进去的 bug
- 【Form 组件】修复 FormItem 组件的 required 不在第一项时，无法对齐的问题
- Grid
  - 修复表格-树表-键盘操作：Backspace 关闭节点操作无效问题
  - 修复 grid 组件配置主题变量 token 不生效
- 【Numeric 组件】修复 Numeric 组件的输入过长值时，组件报错的问题
- 【Pager 组件】修复分页 simple 模式 bug
- 【Slider 组件】修复 slider 滑块部分 token 不生效的问题
- Select
  - 修复 多选默认选中且禁用的选项，允许禁止删除
  - 修复 searchable 在 vue2 下失效的问题
  - 优化搜索框交互，在输入时可以直接触发过滤
- 主题配置
  - 修复主题化配置 token 不生效问题，组件类名统一放到最外层 div
  - 修复 CascaderPanel/Milestone/NavMenu/SliderBar/组件配置无法挂载的问题
  - 修复用户之前使用类名覆盖样式导致更新后样式失效 bug，并兼容主题配置
  - 修复 crop 组件， grid 组件配置主题变量 token 不生效问题
- 【构建】修复低代码页面预览组件国际化无法正常切换问题

### 🚀 优化

- 【ActionMenu 组件】优化`more-click`/`item-click`事件命名
- 【FileUpload 组件】增加上传文件达到 limit 时，隐藏按钮功能
- 【Icon 组件】补充 tiny-vue-icon 的 unknown 图标
- 【Input 组件】完善 input 组件类型声明
- 【Milestone 组件】优化`flag-click`事件命名
- 【Pager 组件】新增“前往”按钮置灰和 hover 高亮样式;优化 simple 模式;优化分页列表数字上下左右居中显示
- 【PopEditor 组件】去掉 popeditor 的 height 属性
- 【Popover 组件】优化 Popover 组件加载
- 【Select 组件】Select 面板搜索，支持国际化
- 【Tree 组件】优化 Tree 节点的拖动时，目标元素的高亮效果
- 官网
  - 新增新旧主题变量映射表，增加新旧主题变量替换教程
  - 补充 PopEditor 组件 的 width 属性描述
  - 补充 DropDown 组件 的 api 小标题
  - 修复 Upload 组件锚点跳转
  - 修复 里程碑标题
  - fileupload 图片上传优化功能
  - 优化 pager 组件‘只有一页按钮时隐藏分页’示例；优化上下页按钮样式
- 主题配置
  - 更新基础主题变量
  - 整改移动端主题，增加移动端主题变量保持 pc 端文件结构统一，以增加主题配置灵活度
  - 移动端主题增加常用色值

## v2.4.0/v3.4.0

`2023/01/13`

### 📢 破坏性变更

- 无

### ✨ 新特性

- 【ActionMenu 组件】新增 ActionMenu 组件

### 🐞 缺陷修复

- 【BulletinBoard 组件】修复 BulletinBoard 组件的更多链接的功能
- 【CreditCardForm 信用卡表单】修复 Card number 显示状态下编辑 number，无法在最近一次值上修改的问题
- 【Dropdown 组件】修复 Dropdown 组件 visible-change 事件没触发
- Grid
  - 修复 grid 组件个性化面板分页设置失效和样式失效问题
  - 修复树表执行 setAllTreeExpansion 方法，展开所有行之后大数据虚拟滚动滚动条计算错误问题
- 【Popover 组件】popover 的 modelValue 为 true 时，默认触发 popover 的显示
- 【Select 组件】修复 Select 组件多选默认选中且禁用的选项，需禁止删除
- ToggleMemu
  - 修复 togglememu 组件只能拿到 label 字段的 bug
  - 废弃 getMenuDataSync 改为异步名称 getMenuDataAsync

### 🚀 优化

- Grid
  - 添加表格默认分页示例，优化表格刷新示例
  - 表格编辑态校验交互与样式靠齐华为云规范
  - 优化表格内置分页，在用户不引入分页组件的情况下，也可以展示分页组件
- 【Pager 组件】分页组件跳转按钮文案国际化
- 【TreeMenu 组件】展开状态下，展开箭头从一直蓝色， 修改为 hover 时才变蓝色，移开为灰色
- 官网
  - 首页添加智能客服
  - upload 跳转锚点修复
  - 完善 upload 代码示例
  - 响应式布局调整

---

## v2.3.0/v3.3.0

`2022/12/16`

### 📢 破坏性变更

- 无

### ✨ 新特性

- 【FormItem 组件】为 FormItem 添加 validate-icon 属性
- 【Notify 组件】增加 verticalOffset 属性
- 【Select 组件】新增 searchable 属性，可以在下面面板搜索
- 官网
  - 增加英文文档，并实现中英文切换
  - 增加国际化自定义配置文档

### 🐞 缺陷修复

- Grid
  - 修复表格组件在多层树表结构下，滚动条的位置计算错误的问题
  - 修复表格组件多字段排序功能失效的问题
  - 修复表格组件调用清除筛选方法，但是 fetchData 参数中的筛选参数还存在的问题
- 【Notify 组件，解决连续点击弹出，如果有组件消失，新弹出组件会与现有组件重合的问题
- 【RadioGroup 组件】解决给 class 赋值未渲染到 dom 上的问题
- 【Search 组件】修复 v-model 无法实时更新值的问题，如果需要监听输入值的实时变化，可以使用事件：@update:modelValue
- 【Slider 组件】修改 slider 的文字位置
- 【TreeMenu 组件】修复 treemenu 在 hover 时的背景色
- 【官网】修复国际化功能中，左侧组件锚点跳转问题

### 🚀 优化

- 【Icon 组件】为图标添加相应的 class
- 【FileUpload 组件】去除 size 属性说明
- 【Message 组件】修改 message 的高度
- 【Notify 组件】样式优化
- 【Popover 组件】增加 height 属性的文档更新
- 官网
  - vue 文档中的较大示例图片的压缩
  - 开源官网增加下划线，原生滚动条 hover 显示
  - 开源网站放开更新日志菜单
  - 移除路由切换时的顶部进度条
  - 优化网站主题色

---

## v2.2.0/v3.2.0

`2022/12/2`

### 📢 破坏性变更

- 无

### ✨ 新特性

- 【Breadcrumb 组件】新增 options、textField、select 事件，面包屑组件支持配置式
- 【BreadcrumbItem 组件】组件新增 label 属性和 select 事件
- 【Dropdown 组件】新增 menuOptions，title 属性，下拉菜单组件支持配置式
- 【DropdownItem 组件】新增 label 属性
- 【DropdownMenu 组件】新增 options， textField 属性
- 【Notify 组件】新增 debounceDelay 属性，支持启用防抖功能
- 【Tooltip 组件】增加 visible 属性

### 🐞 缺陷修复

- 【Chart 组件】修复 extend 配置部分失效问题
- Form
  - 修复表单校验在 webcomponents 环境下报错的问题
  - 修复 align-lable 的样式问题
- 【Pager 组件】修复在 webcomponents 环境下显示异常的问题
- 【Popover 组件】修复在 webcomponents 环境下显示异常的问题
- 【Search 组件】修复修改布局导致高度不对的问题。默认主题 30px,无限主题 32px

---

## v2.1.0/v3.1.0

`2022/10/31`

### 📢 破坏性变更

- 移除 rich-text 组件，因为该组件引入的第三方插件 quill 属于超期高危依赖，如需继续使用，可以使用老版本： @opentiny/vue-rich-text@3.0.0

### ✨ 新特性

- 【Dropdown 组件】新增 Dropdown 下拉菜单组件
- 【Notify 组件】新增 Notify 通知组件
- 【工程优化】 组件库支持类型声明，可以在 typescript 工程中正常使用
- 【主题配置】 组件库已完成多有组件的主题配置化改造，目前提供默认两套主题：默认主题、无限主题

### 🐞 缺陷修复

- 【DatePicker 组件】修复时区选择下拉框出不来的 bug
- Grid
  - 修复合并单元格，表格列加了 overflow，导致样式异常的 bug
  - 修复绑定静态数据源（数组），push、splice 等操作后，表格数据无变化的 bug
- 【Numeric 组件】修复鼠标滚轮滚动改变值时，页面的滚动条也会跟着滚动的 bug
- 【Select 组件】修复创建条目，创建一个条目选中后，再重新创建选中，还是选中的上一次选中数据的 bug
- 【Slider 组件】解决无法拖动的 bug
- 【Tabs 组件】解决标题下划线对不齐的 bug

---

## v2.0.0/v3.0.0

`2022/09/19`

### 📢 破坏性变更

无

### ✨ 新特性

- 【Select 组件】增加 scroll 事件

### 🐞 缺陷修复

- 【Cascader 组件】解决点击已选中选项无法关闭选择器的问题
- 【PopEditor 组件】解决弹出框里的查询条件不能输入的问题
- 【RichText 组件】解决通过 v-model 绑定变量时快速删除时控制台报错的问题
- 【Search 组件】修复 change 事件触发 2 次的问题
- 【Tabs 组件】修复 tab 组件套 tab 组件，内部的 tab 项会显示在外部 tab 上的 bug

用Node.js实现的企业信息化开发框架，并增加了工作流的设计和实现，其中采用的开源框架主要有：UI端采用BJUI，后端采用ThinkJS，数据库采用MySql和MSSQL，手机端采用MUI。

本框架通过配置模块的显示列、编辑列、查询列、按钮等，可以从数据库的表或者视图取数据，生成页面，通过Url: /cmpage/page/list?modulename=Customer 可以访问Customer模块，实现了常用的分页列表、新增、编辑、查看、删除、条件查询等功能, 手机端页面功能类似，框架也实现了轻量级的工作流引擎，方便于实现流程多而经常变化的业务场景，待本框架基本稳定后，会基于此框架做一些通用的OA、CRM、库存管理等开源系统。


运行步骤简述如下（具体参照 thinkjs.org）：
1、Mysql导出文件（/db/cmpage_workbench.sql）,MSSQL备份文件(/db/cmpage_mssql.zip)
2、在/src/xxxx/config/db.js 中配置数据库连接参数，可以配置不同数据库类型的连接
3、运行：npm install --registry=https://registry.npm.taobao.org --verbose
4、运行：npm start
5、访问：http://localhost:8300
6、手机端项目的目录：/mob，独立项目，请用HBuider打开，然后用USB连上手机就可以调试了，具体参见 http://www.dcloud.io/runtime.html, 也可以用手机扫描二维码(http://139.129.48.131:8300/static/mob/cmpage_demo.png ),安装Andriod版本的DEMO(http://139.129.48.131:8300/static/mob/cmpage_demo.apk)。

演示地址： http://139.129.48.131:8300/admin
更新日志： http://139.129.48.131:8300/home/index/log

![输入图片说明](http://git.oschina.net/uploads/images/2016/1031/091546_c59755a4_389947.png "流程图")
-------------------------------------------------------------------------------------------------
![输入图片说明](http://git.oschina.net/uploads/images/2016/0407/171611_18aa7d89_389947.png "模块的显示列设置")
-------------------------------------------------------------------------------------------------
![输入图片说明](http://git.oschina.net/uploads/images/2016/0407/171717_a3be3142_389947.png "模块预览页面")

-------------------------------------------------------------------------------------------------

![输入图片说明](http://git.oschina.net/uploads/images/2016/0829/092044_88f3bf65_389947.png "手机端列表和编辑")
-------------------------------------------------------------------------------------------------
![输入图片说明](http://git.oschina.net/uploads/images/2016/0829/092112_4b930ea8_389947.png "手机端菜单和搜索")

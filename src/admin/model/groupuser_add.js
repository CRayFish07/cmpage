'use strict';
// +----------------------------------------------------------------------
// | CmPage [ 通用页面框架 ]
// +----------------------------------------------------------------------
// | Licensed under the Apache License, Version 2.0
// +----------------------------------------------------------------------
// | Author: defans <defans@sina.cn>
// +----------------------------------------------------------------------

/**
 @module admin.model
 */

/**
 * 加入账套的待选择列表
 * @class admin.model.groupuser_add
 */
import CMPage from '../../cmpage/model/page.js';

export default class extends CMPage {
    /**
     * 重写父类的 getQueryWhere 方法，增加页面模块的条件设置，剔除已经加入该账套的用户，组合成新的Where子句
     * @method  getQueryWhere
     * @return {string}  where条件子句
     * @param {Object} page  页面设置主信息
     */
    async getQueryWhere(){
      let where =await super.getQueryWhere();
      return where +` and id not in(select c_user from t_group_user where c_group=${this.mod.parmsUrl.c_group}) `;
    }
    /**
     * 重写父类的 htmlGetOther 方法，输出额外的按钮和js函数，
     * @method  htmlGetOther
     * @return {string}  html片段
     * @param {Object} page  页面设置主信息
     */
    async htmlGetOther() {
        return `<a class="btn btn-green" href="#" onclick="return GroupUserAddIds(${this.mod.parmsUrl.c_group});" data-icon="plus">加入</a>
            <script type="text/javascript">
                function GroupUserAddIds( groupID) {
                    //alert($('[name="ids"]').length);
                    var ids = [];
                    $('[name="ids"]').each(function () {
                        if($(this).parent().hasClass("checked")){
                            ids.push($(this).val());
                        }
                    });

                    if (ids.length == 0) {
                        $(this).alertmsg("warn", "请选择要加入的用户。");
                        return false;
                    }
                    BJUI.ajax('doajax', {
                        url: "/admin/code/group_user_add?groupID=" + groupID + "&userIds=" + ids.join(','),
                        loadingmask: true,
                        okCallback: function(json, options) {
                            $('#btnSearchGroupUser').click();
                            $('#btnSearchGroupUserAdd').click();
                        }
                    });

                    return false;
                }
                function GroupUserAdd(id, obj) {

                    $(this).alertmsg("confirm", "是否确定要加入？",{
                        okCall:function(){
                            BJUI.ajax('doajax', {
                                url: "/admin/code/group_user_add?groupID=" + groupID + "&userIds=" + id,
                                loadingmask: true,
                                okCallback: function(json, options) {
                                     $('#btnSearchGroupUser').click();
                                    $('#btnSearchGroupUserAdd').click();
                                }
                            });
                        }
                    });

                    return false;
                }
            </script>`
    }
}

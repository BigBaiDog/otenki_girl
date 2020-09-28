<?php
namespace App\Api;
use PhalApi\Api\DataApi as Api;

class Prayer extends Api{

    protected function userCheck() {
        // TODO 记得要进行验证
    }

    protected function getDataModel() {
        return new \App\Model\Prayer();
    }

    // 必须提供的字段
    protected function createDataRequireKeys() {
        return array('name','date','address','reason');
    }

    // 不允许客户端写入的字段
    protected function createDataExcludeKeys() {
        return array('id','time');
    }

    // 创建时更多初始化的数据
    protected function beforeCreateData($newData) {
        $newData['time'] = date('Y-m-d H:i:s');
        $newData['id'] = md5($newData['time']);
        return $newData;
    }
}
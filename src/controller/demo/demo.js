import Base from '../base.js';
import DemoDto from '../../dto/demo/demoDto';

export default class extends Base {

    //列表
    async indexAction() {
        let data = await this.model('demo').select();
        return this.success(data);
        // return this.display();
    }

    //添加
    async addDemoAction() {
        const param = this.ctx.post();
        let demoEntity = new DemoDto(param);
        let insertId = await this.model('demo').add(demoEntity);
        return this.success(insertId);
    }

    //删除
    async deleteDemoAction() {
        const param = this.ctx.post();
        let deleteRow = await this.model('demo').where({id: ['=', param.id]}).delete();
        let error = {code:1,message:"删除失败"}
        if(deleteRow>0){
            error.code = 0;
            error.message = "删除成功";
        }
        return this.success(error);
    }


}
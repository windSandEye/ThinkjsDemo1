exports.__esModule = true;

var _base = require('../base.js');

var _base2 = _interopRequireDefault(_base);

var _demoDto = require('../../dto/demo/demoDto');

var _demoDto2 = _interopRequireDefault(_demoDto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = class extends _base2.default {

    //列表
    indexAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            let data = yield _this.model('demo').select();
            return _this.success(data);
            // return this.display();
        })();
    }

    //添加
    addDemoAction() {
        var _this2 = this;

        return _asyncToGenerator(function* () {
            const param = _this2.ctx.post();
            let demoEntity = new _demoDto2.default(param);
            let insertId = yield _this2.model('demo').add(demoEntity);
            return _this2.success(insertId);
        })();
    }

    //删除
    deleteDemoAction() {
        var _this3 = this;

        return _asyncToGenerator(function* () {
            const param = _this3.ctx.post();
            let deleteRow = yield _this3.model('demo').where({ id: ['=', param.id] }).delete();
            let error = { code: 1, message: "删除失败" };
            if (deleteRow > 0) {
                error.code = 0;
                error.message = "删除成功";
            }
            return _this3.success(error);
        })();
    }

};
//# sourceMappingURL=demo.js.map
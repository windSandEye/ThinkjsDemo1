exports.__esModule = true;

var _commonDto = require("../common/commonDto");

var _commonDto2 = _interopRequireDefault(_commonDto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateDemoDto {
    constructor(demoEntity) {
        let obj = {
            id: null,
            title: null,
            content: null
        };
        if (demoEntity.hasOwnProperty("id")) {
            obj.id = _commonDto2.default.convertToType(demoEntity.id, "Integer");
        }
        if (demoEntity.hasOwnProperty("title")) {
            obj.title = _commonDto2.default.convertToType(demoEntity.title, "String");
        }
        if (demoEntity.hasOwnProperty("content")) {
            obj.content = _commonDto2.default.convertToType(demoEntity.content, "String");
        }
        return obj;
    }
}
exports.default = CreateDemoDto;
//# sourceMappingURL=demoDto.js.map
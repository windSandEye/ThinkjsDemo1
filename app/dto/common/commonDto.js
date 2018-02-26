exports.__esModule = true;

const commonDto = {};

//根据配置的类型转换数据类型
commonDto.convertToType = function (data, type) {
  switch (type) {
    case 'Boolean':
      return Boolean(data);
    case 'Integer':
      if (data == null) {
        return data;
      }
      return parseInt(data, 10);
    case 'Number':
      if (data == null) {
        return data;
      }
      return parseFloat(data);
    case 'String':
      return data ? String(data) : data;
    case 'Date':
      if (data == null) {
        return data;
      }
      return this.parseDate(String(data));
    default:
      if (type === Object) {
        return data;
      } else if (typeof type === 'function') {
        return data;
      } else if (Array.isArray(type)) {
        var itemType = type[0];
        if (!data) {
          data = [];
        }
        return data.map(function (item) {
          return commonDto.convertToType(item, itemType);
        });
      } else if (typeof type === 'object') {
        var keyType, valueType;
        for (var k in type) {
          if (type.hasOwnProperty(k)) {
            keyType = k;
            valueType = type[k];
            break;
          }
        }
        var result = {};
        for (var k in data) {
          if (data.hasOwnProperty(k)) {
            var key = commonDto.convertToType(k, keyType);
            var value = commonDto.convertToType(data[k], valueType);
            result[key] = value;
          }
        }
        return result;
      } else {
        return data;
      }
  }
};

commonDto.constructFromObject = function (data, obj, itemType) {
  if (Array.isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      if (data.hasOwnProperty(i)) obj[i] = commonDto.convertToType(data[i], itemType);
    }
  } else {
    for (var k in data) {
      if (data.hasOwnProperty(k)) obj[k] = commonDto.convertToType(data[k], itemType);
    }
  }
};

exports.default = commonDto;
//# sourceMappingURL=commonDto.js.map
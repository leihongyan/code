function deepCopy(originObj, map = new WeakMap()) {
  // 判断是否为基本数据类型
  if(isObject(originObj)) {
      // 判断是否为循环引用
      if(map.get(originObj)) {
          return map.get(originObj);
      }
     
      // 判断是否为几种特殊需要处理的类型
      let type = [Date, RegExp, Set, Map, WeakMap, WeakSet];
      if(type.includes(originObj.constructor)) {
          return new originObj.constructor(originObj);
      }
      // 其他类型
      let allDesc = Object.getOwnPropertyDescriptors(originObj);
      let cloneObj = Object.create(Object.getPrototypeOf(originObj), allDesc);

      // Reflect.ownKeys 可以获取到
      for(const prop of Reflect.ownKeys(originObj)) {
          cloneObj[prop] = isObject(originObj[prop]) && typeof originObj[prop] !== 'function' ? deepCopy(originObj[prop], map) : originObj[prop];
      }
      return cloneObj;
  } else {
      return originObj;
  }
}
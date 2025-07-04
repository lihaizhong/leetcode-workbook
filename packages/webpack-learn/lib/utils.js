const fs = require("fs-extra");

module.exports = {
  tryExtensions: (modulePath, extensions, originModulePath, moduleContext) => {
    // 优先尝试不需要扩展名选项（用户如果已经传入了后缀，那就使用用户填入的，无需再应用 extensions）
    extensions.unshift("");

    for (const extension of extensions) {
      const fullModulePath = modulePath + extension;

      if (fs.existsSync(fullModulePath)) {
        return fullModulePath;
      }
    }

    throw new Error(
      `No module, Error: Can't resolve ${originModulePath} in ${moduleContext}`
    );
  },

  // lib/utils.js
  getSourceCode(chunk) {
    const { entryModule, modules } = chunk;
    return `(() => {
      var __webpack_modules__ = {${modules.map((module) => {
        return `'${module.id}': (module) => {${module._source}}`;
      }).join(",")}};

      var __webpack_module_cache__ = {};
      
      function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        
        if (cachedModule !== undefined) {
          return cachedModule.exports;
        }

        var module = (__webpack_module_cache__[moduleId] = { exports: {}, });
        
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

        return module.exports;
      }

      (() => {${entryModule._source}})();
    })();`;
  },
};

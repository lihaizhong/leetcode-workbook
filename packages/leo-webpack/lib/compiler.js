const fs = require("fs-extra");
const { SyncHook } = require("tapable");
const Compilation = require("./compilation");

module.exports = class Compiler {
  constructor(options) {
    this.options = options;
    this.context = this.options.context || process.cwd().replace(/\\/g, "/");
    this.hooks = {
      // 开始编译时执行
      run: new SyncHook(),
      // 模块解析完成，在向磁盘写入输出文件时执行
      emit: new SyncHook(),
      // 在输出文件写入完成后执行
      done: new SyncHook(),
    };
  }

  run(callback) {
    // 触发 run hook
    this.hooks.run.call();
    // 创建 compilation 编译对象
    const compilation = new Compilation(this);
    // 编译模块
    compilation.build();
    // 生成产物
    compilation.seal();
    // 输出产物
    this.emitAssets(compilation, callback);
  }

  emitAssets(compilation, callback) {
    const { entries, modules, chunks, assets } = compilation;
    const { output } = this.options;

    // 调用插件 emit勾子
    this.hooks.emit.call();

    // 若 output.path 不存在，进行创建
    if (fs.existsSync(output.path)) {
      fs.mkdirSync(output.path);
    }

    // 将 assets 中的内容写入文件系统中
    Object.keys(assets).forEach((fileName) => {
      const filePath = path.join(output.path, fileName);

      fs.writeFileSync(filePath, assets[fileName]);
    });

    this.hooks.done.call();

    callback(null, {
      toJSON: () => ({
        entries,
        modules,
        chunks,
        assets,
      }),
    });
  }
};

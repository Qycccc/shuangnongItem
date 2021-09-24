module.exports = {
  plugins: {
    autoprefixer: { // 插件可以实现自动添加浏览器相关的声明前缀
      // browsers:['Android >= 4.0','IOS >= 8']
    },
    // flexible配置
    'postcss-pxtorem': { // 实现将px转换为rem

      // rootValue可以是固定值也可以是一个函数

      // "rootValue": 75, // 设计稿宽度的1/10
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
      // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
    }
  }
}

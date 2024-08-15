/*
  @dest: 使用配置文件
 */
module.exports = {
  npmUrl: "https://registry.npmjs.org/create-lyr-cli/latest",
  projectList: [
    {
      type: "list",
      message: "请选择拉取的模版类型:",
      name: "type",
      choices: [
        {
          name: "react-temp-web",
          value: {
            url: "https://github.com/yunliang-ding/react-temp-web.git",
            gitName: "react-temp-web",
            val: "全栈开发模版",
          },
        },
        {
          name: "react-temp-docs",
          value: {
            url: "https://github.com/yunliang-ding/react-temp-docs.git",
            gitName: "react-temp-docs",
            val: "组件库开发模版",
          },
        },
      ],
    },
  ],
};

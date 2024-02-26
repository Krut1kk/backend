module.exports = (plugin) => {
  plugin.controllers.user.testRoute = (ctx) => {
    ctx.body = {
      message: "Hello World!",
    };
  };

  plugin.routes["content-api"].routes.push({
    method: "GET",
    path: "/user/test-route",
    handler: "user.testRoute",
    config: {
      prefix: "",
    },
  });

  return plugin;
};

const demos = require.context("../demos", true, /\.vue$/);

export default demos.keys().map(key => {
  const componentName = key.slice(2, -4);
  const label = componentName.split(/(?=[A-Z])/).join(" ");
  const name = label.replace(/ /g, "-").toLowerCase();
  const context = demos(key);

  return {
    // component: () =>
    //   import(/* webpackChunkName: "view-[request]" */ `@/demos/${componentName}.vue`),
    component: context.default,
    name,
    componentName,
    label
  };
});

const demos = require.context("@/demos", true, /\.vue$/);

export default demos.keys().map(key => {
  const componentName = key.slice(2, -4);
  const label = componentName.split(/(?=[A-Z])/).join(" ");
  const name = label.replace(/ /g, "-").toLowerCase();

  return {
    name,
    componentName,
    label
  };
});

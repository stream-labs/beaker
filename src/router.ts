import demos from './demos';

export default [
  ...demos.map(({ name, component }) => ({
    path: `/${name}`,
    name,
    component,
  })),
  // {
  //   path: '/:pathMatch(.*)*',
  //   redirect: '/installation',
  // },
];

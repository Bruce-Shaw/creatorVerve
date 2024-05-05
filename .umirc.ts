import { defineConfig } from '@umijs/max';
import routes from './src/config/route';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {},
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      layout: false,
      routes,
    },
  ],
  npmClient: 'npm',
});


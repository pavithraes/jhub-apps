import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), eslint(), EnvironmentPlugin('all')],
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        // Bypass any JuptyerHub API calls and mock with static data
        bypass(req, res, options) {
          res.end(
            JSON.stringify({
              JuypterLab: {
                display: true,
                info: {
                  name: 'JupyterLab',
                  url: '/user/[USER]/lab',
                  external: true,
                },
              },
              Argo: {
                display: true,
                info: {
                  name: 'Argo Workflows',
                  url: '/hub/argo',
                  external: true,
                },
              },
              Users: {
                display: true,
                info: {
                  name: 'User Management',
                  url: '/auth/admin/nebari/console/',
                  external: true,
                },
              },
              Environments: {
                display: true,
                info: {
                  name: 'Environments',
                  url: '/hub/conda-store',
                  external: true,
                },
              },
              Monitoring: {
                display: true,
                info: {
                  name: 'Monitoring',
                  url: '/hub/monitoring',
                  external: true,
                },
              },
            }),
          );
        },
      },
      '/services/japps/server/test-app': {
        target: 'http://localhost:8080',
        // Bypass any JuptyerHub API calls and mock with static data
        bypass(req, res, options) {
          res.end(
            JSON.stringify({
              name: 'test-app',
              last_activity: '',
              started: null,
              pending: null,
              ready: true,
              stopped: false,
              url: 'http://',
              user_options: {
                jhub_app: true,
                display_name: 'App 1',
                description: 'App Description',
                thumbnail: '',
                filepath: '',
                framework: 'panel',
                custom_command: '',
                conda_env: '',
                profile: '',
              },
              progress_url: '',
              state: {},
            }),
          );
        },
      },
      '/services/japps/server/': {
        target: 'http://localhost:8080',
        // Bypass any JuptyerHub API calls and mock with static data
        bypass(req, res, options) {
          res.end(
            JSON.stringify({
              'test-app': {
                name: 'test-app',
                url: '/user/test/test-app/',
                user_options: {
                  name: 'test-app',
                  jhub_app: true,
                  display_name: 'Test App',
                  description:
                    'Lorem ipsum dolor sit amet consectetur. Sit vestibulum facilisis auctor pulvinar ac. Cras.',
                  imgUrl:
                    'https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg',
                  framework: 'Panel',
                  ready: true,
                },
              },
              'test-app-2': {
                name: 'test-app-2',
                url: '/user/test/test-app-2/',
                user_options: {
                  name: 'test-app-2',
                  jhub_app: true,
                  display_name: 'Test App 2',
                  description:
                    'Lorem ipsum dolor sit amet consectetur. Sit vestibulum facilisis auctor pulvinar ac. Bras.',
                  imgUrl:
                    'https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg',
                  framework: 'Streamlit',
                  ready: false,
                },
              },
              'test-app-3': {
                name: 'test-app-3',
                url: '/user/test/test-app-3/',
                user_options: {
                  name: 'test-app-3',
                  jhub_app: true,
                  display_name: 'Test App 3',
                  description:
                    'Lorem ipsum dolor sit amet consectetur. Sit vestibulum facilisis auctor pulvinar ac. Dras.',
                  imgUrl: null,
                  framework: 'JupyterLab',
                  ready: false,
                },
              },
              'test-app-4': {
                name: 'test-app-4',
                url: '/user/test/test-app-4/',
                user_options: {
                  name: 'test-app-4',
                  jhub_app: true,
                  display_name: 'Test App 4',
                  description: 'Cras.',
                  imgUrl: null,
                  framework: 'Streamlit',
                  ready: false,
                },
              },
            }),
          );
        },
      },
      '/services/japps/frameworks': {
        target: 'http://localhost:8080',
        // Bypass any JuptyerHub API calls and mock with static data
        bypass(req, res, options) {
          res.end(
            JSON.stringify([
              { name: 'panel', display_name: 'Panel', logo: '' },
              { name: 'bokeh', display_name: 'Bokeh', logo: '' },
              { name: 'jupyterlab', display_name: 'JupyterLab', logo: '' },
            ]),
          );
        },
      },
    },
  },
});

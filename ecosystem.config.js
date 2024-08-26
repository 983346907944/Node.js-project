module.exports = {

  apps: [
    {
      name: 'Bundler',
      script: 'build/index.js',
      env: {
        COMMON_VARIABLE: 'true',
      },
      env_production: {
        NODE_ENV: 'production',
        REDIS_HOST: 'localhost',
      },
    },
  ],

 
  deploy: {
    production: {
      user: 'bundler',
      host: 'ssh.code.io',
      ref: 'origin/master',
      path: '/home/bundler',
      'post-deploy': 'yarn && npm run build && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
};

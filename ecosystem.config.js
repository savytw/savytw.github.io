module.exports = {
  apps : [
    {
      name      : 'SAVY',
      script    : '/home/victor/.nvm/versions/node/v8.10.0/bin/serve',
      args      : '-s /home/victor/savy-web',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ]
};

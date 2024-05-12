module.exports = {
  apps: [
    {
      name: 'vue3-admin',
      script: 'vue3-admin-server.js'
    },
  ],
  deploy: {
    production: {
      user: 'root',
      host: '39.107.112.108',
      ref: 'origin/main',
      repo: 'git@github.com:js0205/newbeemall-vue3-admin.git',
      path: '/workspace/vue3-admin',
      'post-deploy': 'git reset --hard && git checkout main && git pull && npm i --production=false && pm2 startOrReload ecosystem.config.js', // -production=false 下载全量包
      env: {
        NODE_ENV: 'production'
      }
    }
  }
}
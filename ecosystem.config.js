module.exports = {
  apps: [
    {
      name: "beveromatic",
      script: "npm",
      args: "run start",
      cwd: "/root/beveromatic",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
                                                                                                                    
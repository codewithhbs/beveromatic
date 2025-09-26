module.exports = {
    apps: [
        {
            name: "beveromatic",
            script: "npm",
            args: "start",
            cwd: "/root/beveromatic",
            env: {
                NODE_ENV: "production",
            },
        },
    ],
}

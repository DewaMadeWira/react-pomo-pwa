module.exports=    {
    mode            : 'production',
    base            : '/',
    srcDir          : 'app/src',
    injectRegister: 'auto',
    selfDestroying  : true,
    registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
        workbox: {
        globPatterns: ["**/*"],
    },
    includeAssets: [
        "**/*",
    ],
    manifest:{
      icons: [
          {
              src: "/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
              // purpose:"any maskable"
          },
          {
              src: "/icon-256x256.png",
              sizes: "256x256",
              type: "image/png",
              // purpose:"any maskable"
          },
          {
              src: "/icon-384x384.png",
              sizes: "384x384",
              type: "image/png",
              // purpose:"any maskable"
          },
          {
              src: "/icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose:"any maskable"
          }
      ]
  }
  
  }
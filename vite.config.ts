import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";


// https://vitejs.dev/config/
export default defineConfig({
  // base    : './',
  // build   : {
  //     sourcemap   : process.env.SOURCE_MAP === 'true',
  //     outDir      : '../dist'
  // },
  plugins: [react(),VitePWA({
    // mode            : 'production',
    // base            : '/',
    // srcDir          : '/src',
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
              src: "/icons/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose:"any maskable"
          },
		  {
                src: "/icon-256x256.png",
                sizes: "256x256",
                type: "image/png",
                purpose:"any maskable"
            },
            {
                src: "/icon-384x384.png",
                sizes: "384x384",
                type: "image/png",
                purpose:"any maskable"
            },
            {
                src: "/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose:"any maskable"
            },
      ]
  }
  
  })
  
  ],
})

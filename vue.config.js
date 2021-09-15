module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
          @import "@/scss/_variables.scss";
          `
            }
        }
    },
    pwa: {
        name: '4thYear',
        themeColor: '#7b7b7b',
        msTileColor: '#7b7b7b',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: 'dev/sw.js'
        }
    }
};

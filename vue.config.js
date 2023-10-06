module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    pluginOptions: {
        googleMaps: {
            apiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
        },
    },
};

'use strict'
const utils = require('./utils')
const path = require('path')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap

const loaders = {
    kt: [
        {
            loader: 'chain-loader-tester',
        },
    ],
}

module.exports = {
    loaders: Object.assign(utils.cssLoaders({
        sourceMap: sourceMapEnabled,
        extract: isProduction,
    }), loaders),
    cssSourceMap: sourceMapEnabled,
    cacheBusting: config.dev.cacheBusting,
    transformToRequire: {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    },
}

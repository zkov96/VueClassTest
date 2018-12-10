'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap

const loaders = {
    ts: ['babel-loader', 'chain-loader-tester', 'ts-loader'],
    tsx: ['babel-loader', 'chain-loader-tester', 'ts-loader'],
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

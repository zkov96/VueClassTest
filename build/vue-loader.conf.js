'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap

const loaders = {
    ts: [
        {
            loader: 'babel-loader'
        },
        {
            loader: 'ts-loader'
        },
        {
            loader: 'inspect-loader',
            options: {
                callback (inspect) {
                    console.log(inspect.arguments)
                    console.log(inspect.context)
                    console.log(inspect.options)
                }
            }
        },
    ],
    tsx: [
        {
            loader: 'babel-loader'
        },
        {
            loader: 'ts-loader'
        },
        {
            loader: 'inspect-loader',
            options: {
                callback (inspect) {
                    console.log(inspect.arguments)
                    console.log(inspect.context)
                    console.log(inspect.options)
                }
            }
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

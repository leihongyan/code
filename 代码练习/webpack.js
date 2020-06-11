module:{
  loaders:[
    {
      test:/\.js$/,
      include:[resolve('src')],
      exclude:/node_modules/,
      loader:'happypack/loader?id=happybabel1'
    }
  ]
}
plugins:[
  new HappyPack({
    id:'happybabel1',
    loaders:['babel-loader?cacheDirectory'],
    threads:4
  })
]
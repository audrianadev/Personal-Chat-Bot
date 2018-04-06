var webpack = require('webpack');
var path = require('path');

module.exports ={
  entry: [
    "./app/app.jsx"
  ],
  output: {
    path:__dirname,
    filename: './public/bundle.js'
  },
  resolve:{
    modules: [
      __dirname,
      './node_modules',
      './app/',
      './app/components',
      './app/components/conversation',
      './app/api',

    ],
    alias:{
      ChatBox: 'app/components/ChatBox.jsx',
      ConversationPiece: 'app/components/conversation/ConversationPiece.jsx',
      AskQuestion: 'app/components/conversation/AskQuestion.jsx',
      ConversationList: 'app/components/conversation/ConversationList.jsx',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      configureStore: 'app/store/configureStore.jsx'
    },
    extensions: ['.*','.js', '.jsx', '.json'],
    symlinks: false
  },
  module:{
    rules:[
        {
            use:{
              loader: 'babel-loader',
              options:{
              presets:['react', 'es2015']
              }
            },
            test: /\.js(x)$/,
            exclude:/(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'inline-source-map',
  watch: true
};

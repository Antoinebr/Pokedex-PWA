# pokedex-pwa

> A Vue.js project

This project is a fork from [Louisti](https://github.com/Louistiti) [Pokedex](https://github.com/Louistiti/3WP1M/tree/master/projects/pok%C3%A9dex) rewritten with Vue.js as a PWA 


## Live project 

[pokedex.antoinebrossault.com](https://pokedex.antoinebrossault.com)


## caching 

```JavaScript 

   // service worker caching
    new SWPrecacheWebpackPlugin({
      cacheId: 'pokedex-pwa',
      filename: 'service-worker.js',
      staticFileGlobs: [
        'dist/**/*.{js,html,css}',
        'dist/static/img/*/*.png'
      ],
      minify: true,
      stripPrefix: 'dist/',
      runtimeCaching: [
        {
          urlPattern:  new RegExp('^https://pokedex.antoinebrossault.com/api/'),
          handler: "networkFirst"
        },
        {
          urlPattern:  new RegExp('^http://localhost:7878/pokedex-pwa/api/'),
          handler: "networkFirst"
        },

      ],
    }),

```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Serve 

 Use docker 

 ```bash

docker-compose up -d 

 ```
# simple-browserSyncer
Inline command tool for browserSync.

## Installation

```
npm i -g simple-syncer
```

## usage

```
$ simpleSyncer
```

Just run `simpleSyncer` and your `*.html *.css *.js *.{gif,jpg,png,svg}` files in current folder will be reload(inject for css) when you change these files

## options

| option        | description           | example  |
| ------------- |:-------------:| -----:|
| -p      | set the port you want to use (default: 3000) | `$ simpleSyncer -p 3333 ` |
| -d      | set the directory you want to watch (default: `./`) |  `$ simpleSyncer -d /Users/xxxx/Project/my-project ` |

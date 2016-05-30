# react-mvi
Minimal framework for react + rxjs mvi architecture

inspired by  
[react-combinators](https://github.com/milankinen/react-combinators)  
[react-reactive-toolkit](https://github.com/milankinen/react-reactive-toolkit)

## Requirements

- jspm > 0.17.0-beta.16

## Installations

```jspm install @react-mvi/core```

### For typescript user.

Please install type definitions below.

* ```typings install dt~react --save --global```
* ```typings install dt~react-dom --save --global```
* ```typings install immutable --save```
* ```typings install lodash --save```

Typescript version < 0.19

* ```npm install rxjs --save```
* ```npm install @react-mvi/core```

tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES5",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "moduleResolution": "node",
    "jsx": "React",
    "module": "system",
    "noImplicitAny": false
  }
}
```

Typescript version >= 0.19

tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES5",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "moduleResolution": "node",
    "jsx": "React",
    "module": "system",
    "noImplicitAny": false
    "baseDir": ".",
    "baseURL": ".",
    "paths": {
      "@react-mvi/core": [
        "jspm_packages/npm/@react-mvi/core*"
      ],
      "rxjs": [
        "jspm_packages/npm/rxjs/*"
      ]
    }
  }
}
```

## Simple Usage

```typescript
import * as React from 'react';
import {
  createModule,
  component,
  Tags as T,
  run
} from '@react-mvi/core'
import {
  EventDispatcher
} from '@react-mvi/event'
import {
  HttpRequest
} from '@react-mvi/http'

const Service = ({http, event}) => {
  return {
    counter: event.for('user::click').scan((_, acc) => acc + 1, 0).publish();
  }
}

const module = createModule(config => {
  config.bind('http').to(HttpRequest);
  config.bind('event').to(EventDispatcher);
  config.bind('aService').toInstance(Service);
});

const View = component((props, context) => {
  return (
    <T.Div onClick={context.io.event.asc('user::click')}>conter value is {props.counter}</T.Div>
  )
});

run({component: View, modules: [module]}, document.querySelector('#app'));
```

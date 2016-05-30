// -*- mode: typescript -*-
/**
 * The MIT License (MIT)
 * Copyright (c) Taketoshi Aono
 *  
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *  
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *  
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * @fileoverview 
 * @author Taketoshi Aono
 */


import * as React from 'react';
import {
  render
} from 'react-dom';
import {
  Module
} from './di/module';
import {
  Context,
  ContextType,
  ContextReactTypes
} from './component/context';


export interface RunnerArgs {
  component: new(props: any, context: any) => React.Component<any, any>;
  modules: Module[]
}


export function runner({component, modules}: RunnerArgs) {
  class Renderer extends React.Component<any, {}> {
    private model;

    public context: ContextType;


    public constructor(p, c: ContextType) {
      super(p, c);
      this.model = c.createProps(p);
    }


    public render() {
      const C = component;
      return <C {...this.model}/>
    }


    public componentDidMount() {
      this.context.connect(this.model);
    }


    public static contextTypes = ContextReactTypes;
  }


  return class extends React.Component<any, {}> {
    public render() {
      return (
        <Context modules={modules}><Renderer {...this.props}/></Context>
      );
    }


    static displayName = 'MVIRoot'
  } as any
}


export function run(opt: RunnerArgs, el: Node) {
  const Root = runner(opt);
  render(<Root/>, el as Element);
}

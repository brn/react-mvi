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
import { ContextType } from './context';
import * as React from 'react';
/**
 * Render function type.
 */
export declare type Render<Props> = (props: Props, context?: any) => React.ReactElement<any>;
/**
 * component function args type.
 */
export declare type StatelessComponentConfig<Props> = {
    render: Render<Props>;
    componentWillMount?(): void;
    componentDidMount?(): void;
    componentWillUnmount?(): void;
    componentDidUpdate?(): void;
    shouldComponentUpdate?(props: Props): boolean;
};
/**
 * Create stateless CompositeComponent with context that type is `ContextReactType`.
 * @param render Render function or object that implements each lifecycle methods.
 */
export declare function component<Props>(render: (StatelessComponentConfig<Props> | Render<Props>), componentName?: string): new (props: Props, context: ContextType) => React.Component<Props, {}>;

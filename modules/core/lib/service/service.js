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
System.register(['../shims/symbol'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var symbol_1;
    var SERVICE_MARK;
    function service(target) {
        target[SERVICE_MARK] = true;
        return target;
    }
    exports_1("service", service);
    return {
        setters:[
            function (symbol_1_1) {
                symbol_1 = symbol_1_1;
            }],
        execute: function() {
            exports_1("SERVICE_MARK", SERVICE_MARK = symbol_1.Symbol('__react_mvi_service__'));
        }
    }
});

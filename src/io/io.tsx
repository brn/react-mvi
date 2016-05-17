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

/// <reference path="../_references.d.ts"/>


import * as _ from 'lodash';
import {
  Subject,
  Observable
}             from 'rx';
import {
  Map
}             from 'immutable';


/**
 * Represent IO response.
 */
export class IOResponse {
  public constructor(private subjectStore: SubjectStore) {};


  /**
   * Get a subject by specify key.
   * @param key Subject name.
   * @returns Registered Subject.
   */
  public for<T>(key: string): Observable<T> {
    if (!this.subjectStore.hasWithoutGlobal(key)) {
      return this.subjectStore.add<T>(key);
    }
    return this.subjectStore.getWithoutGlobal(key);
  }
}


/**
 * Hold Subject cache.
 */
export class SubjectStore {

  constructor(private subjectMap: Map<string, Subject<any>> = Map<string, Subject<any>>()) {}


  public hasWithoutGlobal(key: string) {
    return this.subjectMap.has(key);
  }


  /**
   * Check whether Subject was defined with specific key or not.
   * @param key Subject name.
   * @return True if Subject was defined.
   */
  public has(key: string) {
    const splited = key.split('::');
    const globalKey = splited.length > 1? `*::${splited[1]}`: null;
    return this.subjectMap.has(key) || (globalKey? this.subjectMap.has(globalKey): false);
  }


  public getWithoutGlobal(key: string): Subject<any> {
    if (this.subjectMap.has(key)) {
      return this.subjectMap.get(key);
    }
    return null;
  }


  /**
   * Get Subject by specific key.
   * @param key Subject name.
   * @returns Registered Subject.
   */
  public get(key: string): Subject<any>[] {
    const ret = [];
    const splited = key.split('::');
    const globalKey = splited.length > 1? `*::${splited[1]}`: null;
    const globalBus = globalKey && this.subjectMap.has(globalKey)? this.subjectMap.get(globalKey): null;
    if (this.subjectMap.has(key)) {
      ret.push(this.subjectMap.get(key));
    }
    if (globalBus) {
      ret.push(globalBus);
    }
    return ret;
  }


  /**
   * Append new Subject.
   * @param key Subject name.
   * @returns Registered Subject.
   */
  public add<T>(key: string): Subject<T> {
    this.subjectMap = this.subjectMap.set(key, new Subject<T>());
    return this.subjectMap.get(key);
  }


  /**
   * Dispose all subscriptions.
   */
  public end() {
    this.subjectMap.valueSeq().forEach(v => v.onCompleted());
  }
}


/**
 * Interface for IO processor.
 */
export interface IO {
  response: IOResponse;
}


/**
 * The methods of the Http request.
 */
export enum HttpMethod {
  GET = 1,
  POST,
  PUT
}


/**
 * Response type of the Http request.
 */
export enum ResponseType {
  JSON = 1,
  BLOB,
  ARRAY_BUFFER,
  FORM_DATA,
  TEXT
}


/**
 * Type for Http request options.
 */
export type HttpConfig = {
  url: string;
  key: string;
  method?: HttpMethod;
  headers: any;
  mode?: 'cors'|'same-origin'|'no-cors';
  json?: boolean;
  data?: string|Blob|FormData,
  responseType?: ResponseType
  sendToken?: boolean
};


/**
 * Interface for Http IO.
 */
export interface Http extends IO {
  /**
   * Wait Http request observable.
   * @param request Disposable.
   */
  wait(request: Observable<HttpConfig>): Rx.IDisposable;


  /**
   * Dispose all subscriptions.
   */
  end(): void;
}


/**
 * Interface for Event IO
 */
export interface Event extends IO {
  /**
   * Publish specified key event.
   * @param key Event name.
   * @param args Event args.
   */
  fire(key: string, args?: any): void;


  /**
   * Get callback function that publish specified key event.
   * @param key Event name.
   * @param v Event args that override event args.
   * @returns Function that publish event.
   */
  asCallback(key: string, v?: any): (args?: any) => void;


  /**
   * Same as asCallback
   * @param key Event name.
   * @param v Event args that override event args.
   * @returns Function that publish event.
   */
  asc(key: string, v?: any): (args?: any) => void;


  /**
   * Fire event after specified time.
   * @param time Time to delay.
   * @param key Event name.
   * @param args Event args
   */
  throttle(time: number, key: string, args: any): void;


  /**
   * Dispose all subscriptions.
   */
  end(): void;
}


/**
 * The methods of the StorageIO.
 */
export enum StorageMethod {
  PUT = 1,
  GET,
  DEL
}


/**
 * The type of the Storage.
 */
export enum StorageType {
  LOCAL_STORAGE = 1,
  SESSION_STORAGE,
  COOKIE
}


/**
 * Option interface of the Storage.
 */
export interface StorageOptions {
  type: StorageType;
  key: string;
  name: string;
  value: any;
  method: StorageMethod;
  options: {
    expires?: number;
    path?: string;
    domain?: string;
    secure?: boolean;
  }
}


/**
 * Interface for Storages.
 */
export interface DOMStorage {
  put<T>(key: string, value: T, opt: StorageOptions);
  get<T>(key: string): T;
  del(key: string): any;
}


/**
 * Interface for storage io processor.
 */
export interface StorageIO extends IO {
  wait(ob: Observable<StorageOptions>): void;
}

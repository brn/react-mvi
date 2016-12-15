/// <reference types="react" />
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
/**
 * Attributes of the Subscriber that passed through html tag.
 */
export interface Attr<T> extends React.HTMLAttributes<T>, React.DOMAttributes<T>, React.ClassAttributes<Element> {
    ignoreSubtree?: boolean;
}
export declare type ElementConstructor<T> = new (p: Attr<T>, c: any) => React.Component<Attr<T>, {}>;
/**
 * All suppoertd subscriberified tag list.
 */
export interface Tags {
    A: ElementConstructor<HTMLAnchorElement>;
    Abbr: ElementConstructor<HTMLElement>;
    Address: ElementConstructor<HTMLElement>;
    Area: ElementConstructor<HTMLAreaElement>;
    Article: ElementConstructor<HTMLElement>;
    Aside: ElementConstructor<HTMLElement>;
    Audio: ElementConstructor<HTMLAudioElement>;
    Base: ElementConstructor<HTMLElement>;
    Bdi: ElementConstructor<HTMLElement>;
    Bdo: ElementConstructor<HTMLElement>;
    Big: ElementConstructor<HTMLElement>;
    Blockquote: ElementConstructor<HTMLElement>;
    Body: ElementConstructor<HTMLBodyElement>;
    Br: ElementConstructor<HTMLBRElement>;
    Button: ElementConstructor<HTMLButtonElement>;
    Canvas: ElementConstructor<HTMLCanvasElement>;
    Caption: ElementConstructor<HTMLElement>;
    Cite: ElementConstructor<HTMLElement>;
    Code: ElementConstructor<HTMLElement>;
    Col: ElementConstructor<HTMLTableColElement>;
    Colgroup: ElementConstructor<HTMLTableColElement>;
    Data: ElementConstructor<HTMLElement>;
    Datalist: ElementConstructor<HTMLDataListElement>;
    Dd: ElementConstructor<HTMLElement>;
    Del: ElementConstructor<HTMLElement>;
    Details: ElementConstructor<HTMLElement>;
    Dfn: ElementConstructor<HTMLElement>;
    Dialog: ElementConstructor<HTMLElement>;
    Div: ElementConstructor<HTMLDivElement>;
    Dl: ElementConstructor<HTMLDListElement>;
    Dt: ElementConstructor<HTMLElement>;
    Em: ElementConstructor<HTMLElement>;
    Embed: ElementConstructor<HTMLEmbedElement>;
    Fieldset: ElementConstructor<HTMLFieldSetElement>;
    Figcaption: ElementConstructor<HTMLElement>;
    Figure: ElementConstructor<HTMLElement>;
    Footer: ElementConstructor<HTMLElement>;
    Form: ElementConstructor<HTMLFormElement>;
    H1: ElementConstructor<HTMLHeadingElement>;
    H2: ElementConstructor<HTMLHeadingElement>;
    H3: ElementConstructor<HTMLHeadingElement>;
    H4: ElementConstructor<HTMLHeadingElement>;
    H5: ElementConstructor<HTMLHeadingElement>;
    H6: ElementConstructor<HTMLHeadingElement>;
    Head: ElementConstructor<HTMLHeadElement>;
    Header: ElementConstructor<HTMLElement>;
    Hgroup: ElementConstructor<HTMLElement>;
    Hr: ElementConstructor<HTMLElement>;
    Html: ElementConstructor<HTMLHtmlElement>;
    I: ElementConstructor<HTMLElement>;
    Iframe: ElementConstructor<HTMLIFrameElement>;
    Img: ElementConstructor<HTMLImageElement>;
    Input: ElementConstructor<HTMLInputElement>;
    Ins: ElementConstructor<HTMLElement>;
    Kbd: ElementConstructor<HTMLElement>;
    Keygen: ElementConstructor<HTMLElement>;
    Label: ElementConstructor<HTMLLabelElement>;
    Legend: ElementConstructor<HTMLLegendElement>;
    Li: ElementConstructor<HTMLLIElement>;
    Link: ElementConstructor<HTMLLinkElement>;
    Main: ElementConstructor<HTMLElement>;
    Map: ElementConstructor<HTMLMapElement>;
    Mark: ElementConstructor<HTMLElement>;
    Menu: ElementConstructor<HTMLElement>;
    Menuitem: ElementConstructor<HTMLElement>;
    Meta: ElementConstructor<HTMLMetaElement>;
    Meter: ElementConstructor<HTMLElement>;
    Nav: ElementConstructor<HTMLElement>;
    Noscript: ElementConstructor<HTMLElement>;
    Object: ElementConstructor<HTMLObjectElement>;
    Ol: ElementConstructor<HTMLOListElement>;
    Optgroup: ElementConstructor<HTMLOptGroupElement>;
    Option: ElementConstructor<HTMLOptionElement>;
    Output: ElementConstructor<HTMLElement>;
    P: ElementConstructor<HTMLParagraphElement>;
    Param: ElementConstructor<HTMLParamElement>;
    Picture: ElementConstructor<HTMLElement>;
    Pre: ElementConstructor<HTMLPreElement>;
    Progress: ElementConstructor<HTMLProgressElement>;
    Q: ElementConstructor<HTMLQuoteElement>;
    Rp: ElementConstructor<HTMLElement>;
    Rt: ElementConstructor<HTMLElement>;
    Ruby: ElementConstructor<HTMLElement>;
    S: ElementConstructor<HTMLElement>;
    Samp: ElementConstructor<HTMLElement>;
    Script: ElementConstructor<HTMLScriptElement>;
    Section: ElementConstructor<HTMLElement>;
    Select: ElementConstructor<HTMLSelectElement>;
    Small: ElementConstructor<HTMLElement>;
    Source: ElementConstructor<HTMLSourceElement>;
    Span: ElementConstructor<HTMLSpanElement>;
    Strong: ElementConstructor<HTMLElement>;
    Style: ElementConstructor<HTMLStyleElement>;
    Sub: ElementConstructor<HTMLElement>;
    Summary: ElementConstructor<HTMLElement>;
    Sup: ElementConstructor<HTMLElement>;
    Table: ElementConstructor<HTMLTableElement>;
    Tbody: ElementConstructor<HTMLTableSectionElement>;
    Td: ElementConstructor<HTMLTableDataCellElement>;
    Textarea: ElementConstructor<HTMLTextAreaElement>;
    Tfoot: ElementConstructor<HTMLTableSectionElement>;
    Th: ElementConstructor<HTMLTableHeaderCellElement>;
    Thead: ElementConstructor<HTMLTableSectionElement>;
    Time: ElementConstructor<HTMLElement>;
    Title: ElementConstructor<HTMLTitleElement>;
    Tr: ElementConstructor<HTMLTableRowElement>;
    Track: ElementConstructor<HTMLTrackElement>;
    U: ElementConstructor<HTMLElement>;
    Ul: ElementConstructor<HTMLUListElement>;
    Var: ElementConstructor<HTMLElement>;
    Video: ElementConstructor<HTMLVideoElement>;
    Wbr: ElementConstructor<HTMLElement>;
}
export declare const Tags: Tags;

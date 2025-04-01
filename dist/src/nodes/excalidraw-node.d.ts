/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { DOMConversionMap, DOMExportOutput, EditorConfig, LexicalEditor, LexicalNode, NodeKey, SerializedLexicalNode, Spread } from "lexical";
import type { JSX } from "react";
import { DecoratorNode } from "lexical";
type Dimension = number | "inherit";
export type SerializedExcalidrawNode = Spread<{
    data: string;
    width?: Dimension;
    height?: Dimension;
}, SerializedLexicalNode>;
export declare class ExcalidrawNode extends DecoratorNode<JSX.Element> {
    __data: string;
    __width: Dimension;
    __height: Dimension;
    static getType(): string;
    static clone(node: ExcalidrawNode): ExcalidrawNode;
    static importJSON(serializedNode: SerializedExcalidrawNode): ExcalidrawNode;
    exportJSON(): SerializedExcalidrawNode;
    constructor(data?: string, width?: Dimension, height?: Dimension, key?: NodeKey);
    createDOM(config: EditorConfig): HTMLElement;
    updateDOM(): false;
    static importDOM(): DOMConversionMap<HTMLSpanElement> | null;
    exportDOM(editor: LexicalEditor): DOMExportOutput;
    setData(data: string): void;
    getWidth(): Dimension;
    setWidth(width: Dimension): void;
    getHeight(): Dimension;
    setHeight(height: Dimension): void;
    decorate(): JSX.Element;
}
export declare function $createExcalidrawNode(data?: string, width?: Dimension, height?: Dimension): ExcalidrawNode;
export declare function $isExcalidrawNode(node: LexicalNode | null | undefined): node is ExcalidrawNode;
export {};
//# sourceMappingURL=excalidraw-node.d.ts.map
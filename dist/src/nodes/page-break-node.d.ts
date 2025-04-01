/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { DOMConversionMap, LexicalNode, SerializedLexicalNode } from "lexical";
import React from "react";
import { DecoratorNode } from "lexical";
export type SerializedPageBreakNode = SerializedLexicalNode;
export declare class PageBreakNode extends DecoratorNode<React.JSX.Element> {
    static getType(): string;
    static clone(node: PageBreakNode): PageBreakNode;
    static importJSON(): PageBreakNode;
    static importDOM(): DOMConversionMap | null;
    exportJSON(): SerializedLexicalNode;
    createDOM(): HTMLElement;
    getTextContent(): string;
    isInline(): false;
    updateDOM(): boolean;
    decorate(): React.JSX.Element;
}
export declare function $createPageBreakNode(): PageBreakNode;
export declare function $isPageBreakNode(node: LexicalNode | null | undefined): node is PageBreakNode;
//# sourceMappingURL=page-break-node.d.ts.map
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { LexicalEditor, NodeKey } from "lexical";
import type { JSX } from "react";
import type { Position } from "../nodes/inline-image-node";
export declare function UpdateInlineImageDialog({ activeEditor, nodeKey, onClose, }: {
    activeEditor: LexicalEditor;
    nodeKey: NodeKey;
    onClose: () => void;
}): JSX.Element;
export default function InlineImageComponent({ src, altText, nodeKey, width, height, showCaption, caption, position, }: {
    altText: string;
    caption: LexicalEditor;
    height: "inherit" | number;
    nodeKey: NodeKey;
    showCaption: boolean;
    src: string;
    width: "inherit" | number;
    position: Position;
}): JSX.Element;
//# sourceMappingURL=inline-image-component.d.ts.map
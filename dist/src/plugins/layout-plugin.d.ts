/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { LexicalCommand, NodeKey } from "lexical";
import { JSX } from "react";
import { LexicalEditor } from "lexical";
export declare function InsertLayoutDialog({ activeEditor, onClose, }: {
    activeEditor: LexicalEditor;
    onClose: () => void;
}): JSX.Element;
export declare const INSERT_LAYOUT_COMMAND: LexicalCommand<string>;
export declare const UPDATE_LAYOUT_COMMAND: LexicalCommand<{
    template: string;
    nodeKey: NodeKey;
}>;
export declare function LayoutPlugin(): null;
//# sourceMappingURL=layout-plugin.d.ts.map
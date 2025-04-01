/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { LexicalNode } from "lexical";
import type { JSX } from "react";
import { MenuOption } from "@lexical/react/LexicalContextMenuPlugin";
export declare class ContextMenuOption extends MenuOption {
    title: string;
    onSelect: (targetNode: LexicalNode | null) => void;
    constructor(title: string, options: {
        onSelect: (targetNode: LexicalNode | null) => void;
    });
}
export declare function ContextMenuPlugin(): JSX.Element;
//# sourceMappingURL=context-menu-plugin.d.ts.map
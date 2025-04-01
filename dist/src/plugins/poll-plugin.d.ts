/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { JSX } from "react";
import { LexicalCommand, LexicalEditor } from "lexical";
export declare const INSERT_POLL_COMMAND: LexicalCommand<string>;
export declare function InsertPollDialog({ activeEditor, onClose, }: {
    activeEditor: LexicalEditor;
    onClose: () => void;
}): JSX.Element;
export declare function PollPlugin(): JSX.Element | null;
//# sourceMappingURL=poll-plugin.d.ts.map
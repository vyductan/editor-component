/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import * as React from 'react';
import { LexicalEditor } from 'lexical';
interface Props {
    editor: LexicalEditor;
    getCodeDOMNode: () => HTMLElement | null;
}
export declare function CopyButton({ editor, getCodeDOMNode }: Props): React.JSX.Element;
export {};
//# sourceMappingURL=code-button.d.ts.map
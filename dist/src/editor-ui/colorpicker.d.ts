/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import * as React from "react";
type Props = {
    disabled?: boolean;
    icon?: React.ReactNode;
    label?: string;
    title?: string;
    stopCloseOnClickSelf?: boolean;
    color: string;
    onChange?: (color: string, skipHistoryStack: boolean) => void;
};
export default function ColorPicker({ disabled, color, onChange, icon, ...rest }: Props): React.JSX.Element;
export {};
//# sourceMappingURL=colorpicker.d.ts.map
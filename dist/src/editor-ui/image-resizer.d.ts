import { JSX } from 'react';
import type { LexicalEditor } from 'lexical';
export declare function ImageResizer({ onResizeStart, onResizeEnd, buttonRef, imageRef, maxWidth, editor, showCaption, setShowCaption, captionsEnabled, }: {
    editor: LexicalEditor;
    buttonRef: {
        current: null | HTMLButtonElement;
    };
    imageRef: {
        current: null | HTMLElement;
    };
    maxWidth?: number;
    onResizeEnd: (width: 'inherit' | number, height: 'inherit' | number) => void;
    onResizeStart: () => void;
    setShowCaption: (show: boolean) => void;
    showCaption: boolean;
    captionsEnabled: boolean;
}): JSX.Element;
//# sourceMappingURL=image-resizer.d.ts.map
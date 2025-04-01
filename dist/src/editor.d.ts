import type { EditorState, SerializedEditorState } from "lexical";
export declare function Editor({ editorState, editorSerializedState, onChange, onSerializedChange, forFormItem, value, }: {
    editorState?: EditorState;
    editorSerializedState?: SerializedEditorState;
    onChange?: (editorState: EditorState) => void;
    onSerializedChange?: (editorSerializedState: SerializedEditorState) => void;
    forFormItem?: boolean;
    value?: string;
}): import("react").JSX.Element;
//# sourceMappingURL=editor.d.ts.map
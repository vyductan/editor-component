/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { AppState, BinaryFiles, ExcalidrawImperativeAPI, ExcalidrawInitialDataState } from "@excalidraw/excalidraw/types/types";
import type { ReactElement } from "react";
export type ExcalidrawInitialElements = ExcalidrawInitialDataState["elements"];
type Props = {
    closeOnClickOutside?: boolean;
    /**
     * The initial set of elements to draw into the scene
     */
    initialElements: ExcalidrawInitialElements;
    /**
     * The initial set of elements to draw into the scene
     */
    initialAppState: AppState;
    /**
     * The initial set of elements to draw into the scene
     */
    initialFiles: BinaryFiles;
    /**
     * Controls the visibility of the modal
     */
    isShown?: boolean;
    /**
     * Callback when closing and discarding the new changes
     */
    onClose: () => void;
    /**
     * Completely remove Excalidraw component
     */
    onDelete: () => void;
    /**
     * Callback when the save button is clicked
     */
    onSave: (elements: ExcalidrawInitialElements, appState: Partial<AppState>, files: BinaryFiles) => void;
};
export declare const useCallbackRefState: () => readonly [ExcalidrawImperativeAPI | null, (value: ExcalidrawImperativeAPI | null) => void];
/**
 * @explorer-desc
 * A component which renders a modal with Excalidraw (a painting app)
 * which can be used to export an editable image
 */
export declare function ExcalidrawModal({ closeOnClickOutside, onSave, initialElements, initialAppState, initialFiles, isShown, onDelete, onClose, }: Props): ReactElement | null;
export {};
//# sourceMappingURL=excalidraw-modal.d.ts.map
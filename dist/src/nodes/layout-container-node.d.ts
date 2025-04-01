import type { DOMConversionMap, DOMExportOutput, EditorConfig, LexicalNode, NodeKey, SerializedElementNode, Spread } from 'lexical';
import { ElementNode } from 'lexical';
export type SerializedLayoutContainerNode = Spread<{
    templateColumns: string;
}, SerializedElementNode>;
export declare class LayoutContainerNode extends ElementNode {
    __templateColumns: string;
    constructor(templateColumns: string, key?: NodeKey);
    static getType(): string;
    static clone(node: LayoutContainerNode): LayoutContainerNode;
    createDOM(config: EditorConfig): HTMLElement;
    exportDOM(): DOMExportOutput;
    updateDOM(prevNode: LayoutContainerNode, dom: HTMLElement): boolean;
    static importDOM(): DOMConversionMap | null;
    static importJSON(json: SerializedLayoutContainerNode): LayoutContainerNode;
    isShadowRoot(): boolean;
    canBeEmpty(): boolean;
    exportJSON(): SerializedLayoutContainerNode;
    getTemplateColumns(): string;
    setTemplateColumns(templateColumns: string): void;
}
export declare function $createLayoutContainerNode(templateColumns: string): LayoutContainerNode;
export declare function $isLayoutContainerNode(node: LexicalNode | null | undefined): node is LayoutContainerNode;
//# sourceMappingURL=layout-container-node.d.ts.map
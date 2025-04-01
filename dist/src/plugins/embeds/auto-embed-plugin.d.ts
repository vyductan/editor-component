/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { EmbedConfig } from "@lexical/react/LexicalAutoEmbedPlugin";
import type { JSX } from "react";
interface PlaygroundEmbedConfig extends EmbedConfig {
    contentName: string;
    icon?: JSX.Element;
    exampleUrl: string;
    keywords: Array<string>;
    description?: string;
}
export declare const YoutubeEmbedConfig: PlaygroundEmbedConfig;
export declare const TwitterEmbedConfig: PlaygroundEmbedConfig;
export declare const FigmaEmbedConfig: PlaygroundEmbedConfig;
export declare const EmbedConfigs: PlaygroundEmbedConfig[];
export declare function AutoEmbedDialog({ embedConfig, onClose, }: {
    embedConfig: PlaygroundEmbedConfig;
    onClose: () => void;
}): JSX.Element;
export declare function AutoEmbedPlugin(): JSX.Element;
export {};
//# sourceMappingURL=auto-embed-plugin.d.ts.map
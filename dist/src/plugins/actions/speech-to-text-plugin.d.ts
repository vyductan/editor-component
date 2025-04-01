/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { LexicalCommand } from "lexical";
export declare const SPEECH_TO_TEXT_COMMAND: LexicalCommand<boolean>;
export declare const SUPPORT_SPEECH_RECOGNITION: boolean;
declare function SpeechToTextPluginImpl(): import("react").JSX.Element;
export declare const SpeechToTextPlugin: typeof SpeechToTextPluginImpl | (() => null);
export {};
//# sourceMappingURL=speech-to-text-plugin.d.ts.map
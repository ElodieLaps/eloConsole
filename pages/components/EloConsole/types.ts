import { Dispatch, LegacyRef, RefObject } from "react";

type EloConsoleStateType = {
   consoleDisplay: boolean;
   textLines: TextLineType[];
   newLine: string;
   baseLine: string;
}

export type TextLineType = {
   baseLine: string;
   contentLine: string;
}

export type TextLinesProps = {
   textLines: TextLineType[];
   scrollBottomRef?: LegacyRef<HTMLDivElement>;
}

export type TextLineProps = {
   line: TextLineType,
   scrollBottomRef: LegacyRef<HTMLDivElement> | undefined;
}

export type ToogleButtonProps = {
   label: string;
   dispatch: Dispatch<any>;
   consoleDisplay: boolean;
}

export type ClearButtonProps = {
   newLine: string,
   textLines: TextLineType[];
   dispatch: Dispatch<any>;
}

export type AddLineProps = {
   baseLine: string;
   textLines: TextLineType[];
   inputFocusRef: RefObject<HTMLInputElement>;
   newLine: string;
   dispatch: Dispatch<any>;
}


export default EloConsoleStateType

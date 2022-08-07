import { ChangeEvent, Dispatch } from "react";
import getCommandResponses from "./commandResponses";
import { CommandLineEnum, ConsoleActionTypeEnum } from "./enums";
import EloConsoleStateType, { TextLineType } from "./types";

export const initialState = {
   consoleDisplay: false,
   textLines: [{
      baseLine: "elo - ",
      contentLine: 'Tapez "help" pour voir les lignes de commandes.'
   }],
   newLine: "",
   baseLine: "elo - "
};

const init = (initialState: EloConsoleStateType) => {
   return initialState
}

export const eloConsoleReducer = (state: EloConsoleStateType, action: any) => {
   switch (action.type) {
      case ConsoleActionTypeEnum.toggle:
         return { ...state, consoleDisplay: action.payload };
      case ConsoleActionTypeEnum.open:
         return { ...state, consoleDisplay: true };
      case ConsoleActionTypeEnum.close:
         return { ...state, consoleDisplay: false };
      case ConsoleActionTypeEnum.write:
         return { ...state, newLine: action.payload };
      case ConsoleActionTypeEnum.addLine:
         return {
            ...state,
            textLines: action.payload,
            newLine: ""
         };
      case ConsoleActionTypeEnum.clear:
         return {
            ...state,
            textLines: [],
            newLine: ""
         }
      case ConsoleActionTypeEnum.reset:
         return init(initialState)
      default:
         throw new Error();
   }
}

export const toogleConsole = (dispatch: Dispatch<any>, payload: boolean) => {
   dispatch({ type: ConsoleActionTypeEnum.toggle, payload: payload })
}

export const openConsole = (dispatch: Dispatch<any>) => {
   dispatch({ type: ConsoleActionTypeEnum.open })
}

export const closeConsole = (dispatch: Dispatch<any>) => {
   dispatch({ type: ConsoleActionTypeEnum.close })
}

export const handleWritting = (dispatch: Dispatch<any>, event: ChangeEvent<HTMLInputElement>) => {
   dispatch({ type: ConsoleActionTypeEnum.write, payload: event?.target.value })
}

export const addLine = (dispatch: Dispatch<any>, textLines: TextLineType[], baseLine: string, contentLine: keyof typeof CommandLineEnum) => {
   if (!!contentLine.length) {
      let newTextLines
      newTextLines = textLines.concat([
         { baseLine, contentLine },
         { baseLine: "", contentLine: getCommandResponses(contentLine) }
      ])
      return dispatch({ type: ConsoleActionTypeEnum.addLine, payload: newTextLines })
   }
}

export const clear = (dispatch: Dispatch<any>) => {
   dispatch({ type: ConsoleActionTypeEnum.clear })
}

export const reset = (dispatch: Dispatch<any>) => {
   dispatch({ type: ConsoleActionTypeEnum.reset })
}

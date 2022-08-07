import { CommandLineEnum } from "./enums"
import eloConsoleData from '../../data/eloConsole.json'

const getCommandResponses = (command: keyof typeof CommandLineEnum) => {
   const line = eloConsoleData.find(line => line.type === CommandLineEnum[command])
   if (line) {
      return line.content
   }
   return `erreur -> Désolée je ne connais pas la commande "${command}". <br> Tapez "help" pour voir la liste des commandes.`
}

export default getCommandResponses;
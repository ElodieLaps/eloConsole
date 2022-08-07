import type { NextApiRequest, NextApiResponse } from 'next'
import eloConsoleData from "../data/eloConsole.json";


type EloConsoleDataLineType = {
   type: string;
   content: string;
}
type EloConsoleDataType = {
   data: EloConsoleDataLineType[]
}

const getEloConsoleData = (
   req: NextApiRequest,
   res: NextApiResponse<EloConsoleDataType>
) => {
   res.status(200).json({ data: eloConsoleData })
}

export default getEloConsoleData;
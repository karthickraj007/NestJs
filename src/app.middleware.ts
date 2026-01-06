
import { NextFunction } from "express"


export const appMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, "req url")
    console.log(req.method, "req method")
    console.log(new Date(), "req time")
    next()

}
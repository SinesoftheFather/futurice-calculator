import express from "express";
import CalculatorService from "../service/calculator.service";

export default class CalculatorController {
  public path = '/calculate';
  public router = express.Router();
  private service = new CalculatorService();

  constructor(app: express.Application) {
    this.router.use(function (req, res: express.Response, next) {
      console.log('Calculator controller :', req.originalUrl);
      next()
    });
    this.initializeRoutes();
    app.use("/", this.router);
  }

  public initializeRoutes() {
    this.router.get(`${this.path}`, this.calculate);
  }

  calculate = async (req: express.Request, res: express.Response) => {
    try {
      let query: string = req.query.query.toString();
      console.log(req.query)
      const result: any = await this.service.calculate(query);
      res.status(200).send(result);
    } catch (e) {
      res.status(500).send(e);
    }
  }
}

import express from "express";
import CalculatorService from "../service/calculator.service";

export default class CalculatorController {
  public path = '/calculate';
  public router = express.Router();
  private service = new CalculatorService();

  constructor(app: express.Application) {
    // middleware for controller
    this.router.use(function (req, next) {
      console.log('Calculator controller :', req.originalUrl)
      next
    });
    this.initializeRoutes();
    app.use("/", this.router);
  }

  public initializeRoutes() {
    this.router.get(`${this.path}`, this.calculate);
  }

  calculate = async (req: express.Request, res: express.Response) => {
    try {
      //const query = req.params.query;
      let query: string = req.query.query.toString();
      console.log(req.query)
      const result: any = await this.service.calculate(query);
      res.status(200).send(result);
    } catch (e) {
      res.status(500).send(e);
    }
  }
}

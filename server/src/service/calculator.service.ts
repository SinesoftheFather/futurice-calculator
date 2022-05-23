import calculationSetupAlgo from "../serverHelpers/algoCalc";
import resultCalc from "../serverHelpers/resultCalc";

export default class CalculatorService {

    public async calculate(expression: string): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            try {
                console.log(expression);
                let result = undefined;

                let b64EncodedMath = expression.startsWith('[') ? expression.substring(1 , expression.length - 1) : expression;
                let bufferedMath = Buffer.from(b64EncodedMath, 'base64');
                let decodedMath = bufferedMath.toString('ascii');



                let output = calculationSetupAlgo(decodedMath);
                console.log(output);
                result = resultCalc(output)

                let response = {
                    error: false,
                    result: result
                }

                resolve(response)
            } catch (error) {
                console.log(error)
                let responseError = {
                    error: true,
                    message: error.message
                }
                reject(responseError)
            }
        });
    }
}

import Queue from "../queueAndStack/queue";
import Stack from "../queueAndStack/stack";

export default function calculationSetupAlgo(expression: any) {

    const operatorSet: Array<string> = ["+", "-", "*", "/", "%", "^" ];
    const leftOperationSet: Array<string> = [ "*", "/", "^", "%", "+", "-" ];
    const rightOperationSet: Array<string> = [ "=", "!" ];
    const precedenceOfOperators: any = {
        "!": 4,

        "*": 3,
        "/": 3,
        "^": 3,
        "%": 3,

        "+": 2,
        "-": 2,

        "=": 1
    };


    let stack = new Stack<string>();
    let queue = new Queue<string>();

    for (let i = 0; i < expression.length; i++) {
        const character = expression[i];

        if (character === " ") {
            continue;
        }

        if (/\d/.test(character)) {
            let j = i + 1;
            console.log(j, i);
            while (/\d/.test(expression[j]) || expression[j] === ".") {
                j++;
            }
            let num = expression.substr(i, j - i)
            console.log(num);
            i = j - 1;
            console.log(i);
            queue.enqueue(num);
        }

        else if (operatorSet.includes(character)) {
            const operator1 = character;

            while (stack.length() > 0) {
                const operator2: string = stack.top();

                if (operatorSet.includes(operator2) && (
                    
                    (leftOperationSet.includes(operator1) && (precedenceOfOperators[operator1] <= precedenceOfOperators[operator2])) ||
                    
                    (rightOperationSet.includes(operator1) && (precedenceOfOperators[operator1] < precedenceOfOperators[operator2]))
                )) {

                    queue.enqueue(stack.pop());

                } else {
                    break;
                }

            }

            stack.push(operator1);

        }
        else if (character === "(") {

            stack.push(character);
        }

        else if (character === ")") {
            let isLeftParenthesis = false;

            while (stack.length() > 0) {
                const c = stack.pop();
                if (c === "(") {
                    isLeftParenthesis = true;
                    break;
                } else {
                    queue.enqueue(c);
                }
            }

            if (!isLeftParenthesis) {
                throw new Error("Mismatched or missing parentheses");
            }

        }

        else {
            throw new Error(`Unknown token in query`);
        }

    }

    while (stack.length() > 0) {
        const c = stack.pop();

        if (c === "(" || c === ")") {
            throw new Error("Parentheses mismatched");
        }

        queue.enqueue(c);

    }

    return queue;
}

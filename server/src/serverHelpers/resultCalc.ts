import Queue from "../queueAndStack/queue";

export default function resultCalc(tokens: Queue<string>) {

    let stack = [];

    while (tokens.length() > 0) {

        const a = tokens.dequeue();

        if (/[^+\-/*^%]/g.test(a)) {
            stack.push(a);
        } else {
            if (stack.length < 2) {
                throw new Error("Invalid expression");
            } else {
                const c = Number(stack.pop());
                const b = Number(stack.pop());
                let d = 0;
                // calculation w.r.t operator 
                switch (a) {
                    case '+':
                        d = b + c;
                        break;

                    case '-':
                        d = b - c;
                        break;

                    case '*':
                        d = b * c;
                        break;

                    case '/':
                        d = b / c;
                        break;

                    case '^':
                        d = Math.pow(b, c);
                        break;
                    case '%':
                        d = b % c;
                        break;
                }
                stack.push(d);
            }
        }
    }

    if (stack.length === 1) {
        return Number(stack.pop());
    }
    else throw new Error("Invalid expression detected. Check encoding or math");
}

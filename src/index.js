function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    expr = expr.replace(/ /g,'')
    let brackets = 0
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === ')') brackets++
        if (expr[i] === '(') brackets--
    }
    // expr.split('').forEach(el=>{
    //     if (el === ')') brackets++
    //     if (el === '(') brackets--
    // })
    if (expr.includes('/0')) throw Error('TypeError: Division by zero.')
    if (brackets) throw Error('ExpressionError: Brackets must be paired')
    return new Function(`return ${expr}`)()
}

module.exports = {
    expressionCalculator
}
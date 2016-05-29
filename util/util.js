const slice = [].slice
const toString = Object.prototype.toString

const util = {
    extend(target) {
        let args = slice.call(arguments)
        let i = 1;

        while((source = args[i++])) {
            for (key in source) {
                target[key] = source[key]
            }
        }

        return target
    },
}

export default util

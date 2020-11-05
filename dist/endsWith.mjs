/**
 * @function endsWith
 * @description Checks if a string ends with the provided substring
 * @param {String} str
 * @param {String} substring
 * @param {Number} [pos=0] Position to start checking. Defaults to 0
 * @return {Boolean} True / False
 * @example
 * endsWith('test', 'st')
 * // true
 * @example
 * str('test').endsWith('st')
 * // true
 */
const endsWith = (str, sub, pos) => {
    str = String(str);
    if (!pos || !isFinite(pos) || Math.floor(pos) !== pos || pos > str.length) {
        pos = str.length;
    }
    pos -= sub.length;
    const index = str.indexOf(sub, (pos - 1));
    return index !== -1 && index === pos;
};

export default endsWith;

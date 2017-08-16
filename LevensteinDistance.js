/**
* Creates object for finding the Levenstein Distance of 2 strings
* @param {string, string} Two strings whose Levenstein Distance you want
* @return {int}
* @public
*/
function LevensteinDistance() { }

LevensteinDistance.prototype.FindLevensteinDistance = function (str1, str2) {
    if (str1.length === 0)
        return str2.length;
    if (str2.length === 0)
        return str1.length;

    var d = [];
    for (var i = 0; i <= str2.length; i++) {
        d[i] = [i];
    }
    for (var k = 0; k <= str1.length; k++) {
        d[0][k] = k;
    }

    for (var i = 1; i <= str2.length; i++) {
        for (var k = 1; k <= str1.length; k++) {
            if (str2.charAt(i - 1) != str1.charAt(k - 1))
                d[i][k] = Math.min(d[i - 1][k - 1] + 1, Math.min(d[i][k - 1] + 1, d[i - 1][k] + 1));
            else
                d[i][k] = d[i - 1][k - 1];
        }
    }
    return parseInt(d[str2.length][str1.length],10);
};
(function () {
    const sget = function (instance, path) {
        return path.split('.').reduce((p, c) => p ? p[c] : undefined, instance);
    }
    if (module) {
        module.exports = sget;
    }
    return sget;
})();

exports.rand = function(max) {
    return Math.floor(Math.random() * max);
}

exports.shuffle = function(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

exports.getSizeWindow = function ({viewWidth,viewHeight}){
    let width=100, height=100;
    if (viewHeight < viewWidth) {
        width = viewHeight - viewHeight / 100;
        height = viewHeight - viewHeight / 100;
    } else {
        width = viewWidth - viewWidth / 100;
        height = viewWidth - viewWidth / 100;
    }
    return {width,height};
}

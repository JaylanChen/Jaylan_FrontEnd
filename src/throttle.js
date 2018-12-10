/**
 * 节流函数
 * @method 方法
 * @delay 延迟时间 
 * @duration 最长延迟执行时间
 * @return Success
 */
function throttle(method, delay = 200, duration = 500) {
    var timer = null;
    var begin = new Date();
    return function () {
        var context = this,
            args = arguments;
        var current = new Date();
        clearTimeout(timer);
        if (current - begin >= duration) {
            method.apply(context, args);
            begin = current;
        } else {
            timer = setTimeout(function () {
                method.apply(context, args);
            }, delay);
        }
    }
}
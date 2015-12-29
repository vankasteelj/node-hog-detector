var hogD = {};

function exit() {
    clearInterval(hogD.fn);
    console.debug(hogD.t_count > 0 ? 'HogDetector - ' + hogD.t_count + ' hog' + (hogD.t_count > 1 ? 's':'') +  ' longer than ' + hogD.ms_min + 'ms ' + (hogD.t_count > 1 ? 'were':'was') + ' detected in ' + hogD.i_count + ' iteration' + (hogD.i_count > 1 ? 's':'') : 'HogDetector - ended');
};

var HogDetect = module.exports = {
    start: function (ms, i, t) {
        console.debug('HogDetector - started');

        hogD = {
            ms_min: ms > -1 ? ms : 30,
            ms_prev: Date.now(),
            i_max: i > -1 ? i : 3000,
            i_count: 0,
            t_max: t > -1 ? t : 10,
            t_count: 0,
            inf: [ms, i, t].indexOf(-1) !== -1
        };

        hogD.fn = setInterval(function () {
            if ((hogD.i_count >= hogD.i_max || hogD.t_count >= hogD.t_max) && !hogD.inf) {
                exit();
            } else {
                hogD.i_count++;

                if (Date.now() - hogD.ms_min - 100 > hogD.ms_prev) {
                    hogD.t_count++;
                    console.warn('HogDetector - %sms of hog at iteration %s', Date.now() - hogD.ms_prev - 100, hogD.i_count);
                }

                hogD.ms_prev = Date.now();
            }

        }, 100);
    },

    stop: function () {
        exit();
    }
};
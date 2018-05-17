function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1))
        x1 = x1.replace(rgx, '$1' + ',' + '$2');

    return x1 + x2;
}

var updateVitals = function () {
    $.ajax({
        url: 'https://services.terracoin.io/api/v1/datadump',
        dataType: 'json'
    }).done(function(data) {
        $('.trcusd').text('$' + addCommas(parseFloat(data.trcusd).toFixed(6)));
        $('.trcbtc').text(addCommas(parseFloat(data.trcbtc).toFixed(8)));

        $('.rank').text(parseInt(data.rank));
        $('.capusd').text('$' + addCommas(parseInt(data.capusd)));
        $('.volusd').text('$' + addCommas(parseInt(data.volusd)));
        $('.supply').text(addCommas(parseInt(parseInt(data.supply))) + ' TRC');

        $('.cryptopia_vol').text('$' + addCommas(parseInt(data.cryptopia.volusd)));
        $('.cryptopia_usd').text('$' + addCommas(parseFloat(data.cryptopia.trcusd).toFixed(4)));
        $('.cryptopia_per').text(parseFloat(data.cryptopia.volper).toFixed(2) + '%');

        $('.coinexchange_vol').text('$' + addCommas(parseInt(data.coinexchange.volusd)));
        $('.coinexchange_usd').text('$' + addCommas(parseFloat(data.coinexchange.trcusd).toFixed(4)));
        $('.coinexchange_per').text(parseFloat(data.coinexchange.volper).toFixed(2) + '%');
        $('.ccex_vol').text('$' + addCommas(parseInt(data.ccex.volusd)));
        $('.ccex_usd').text('$' + addCommas(parseFloat(data.ccex.trcusd).toFixed(4)));
        $('.ccex_per').text(parseFloat(data.ccex.volper).toFixed(2) + '%');

        $('.totalmns').text(parseInt(data.totalmns));
        $('.enabledmns').text(parseInt(data.enabledmns));
        var sbms = parseInt(data.nextsb) - parseInt(data.height) * 2.1 * 60 * 1000;
        var nextsbstamp = new Date($.now() + sbms);
        $('.sbdate').text(nextsbstamp.toLocaleDateString());
        $('.sbtime').text(nextsbstamp.toLocaleTimeString());
        $('.mnroi').text(((365.25 / parseFloat(data.roi)) * 100).toFixed(2) + '%');

        setTimeout(updateVitals, 120000);
    });
}

var getTimezoneOffset = (function() {
    var offset = new Date().getTimezoneOffset();
    return function() {
        return offset;
    };
})();

function formatTimezoneOffset() {
    var offset = getTimezoneOffset();
    if (offset === 0) {
        return '';
    }
    var padZero = function(value) {
        return String('0' + value).slice(-2);
    };
    var sign = offset > 0 ? '-' : '+';
    var absoluteValue = Math.abs(offset);
    var hours = Math.floor(absoluteValue / 60);
    var minutes = absoluteValue - (hours * 60);
    return sign + padZero(hours) + ':' + padZero(minutes);
}

var updateGraph = function () {
    $.ajax({
        url: 'https://services.terracoin.io/api/v1/history',
        dataType: 'json'
    }).done(function(data) {
Highcharts.chart('highcharts-graph', {
    chart: {
        backgroundColor: '#fff',
        type: 'line',
        zoomType: 'x',
        ignoreHiddenSeries: true,
    },
    tooltip: {
        shared: true,
        split: false,
        hideDelay: 50,
        xDateFormat: "%A, %b %d %Y, %H:%M:%S UTC" + formatTimezoneOffset()
     },
     legend: {
        enabled: true,
        align: 'center',
        backgroundColor: 'transparent',
        borderColor: 'black',
        borderWidth: 0,
        layout: 'horizontal',
        verticalAlign: 'bottom',
        y: 0,
        shadow: false,
        floating: false,
        itemStyle: {
            color: '#428bca'
        },
        itemHoverStyle: {
            color: '#2a6496'
        },
        itemHiddenStyle: {
            color: '#757575'
        }
    },
    navigator: {
        adaptToUpdatedData: false,
        series: [{
            data: data.market_cap_by_available_supply
        }]
    },
    scrollbar: {
        liveRedraw: false
    },
    credits: {
        href: "https://coinmarketcap.com/currencies/terracoin/",
        text: "coinmarketcap.com",
    },
    rangeSelector: {
        allButtonsEnabled: true,
        buttons: [{
            type: 'day',
            count: 1,
            text: '1d'
        }, {
            type: 'week',
            count: 1,
            text: '7d'
        }, {
            type: 'month',
            count: 1,
            text: '1m'
        }, {
            type: 'month',
            count: 3,
            text: '3m'
        }, {
            type: 'year',
            count: 1,
            text: '1y'
        }, {
            type: 'ytd',
            count: 1,
            text: 'ytd'
        }, {
            type: 'all',
            text: 'ALL'
        }],
        selected: 6,
        inputEnabled: true,
        enabled: true,
        inputStyle: {
            color: '#757575'
        },
        labelStyle: {
            color: '#757575'
        },
        x: 0,
        y: 0
    },
    title: {
        text: '',
    },
    navigation: {
        buttonOptions: {
            height: 25,
            y: 0
        }
    },
    xAxis: [{
        type: 'datetime',
        minRange: 24 * 3600 * 1000
    }],
    yAxis: [{
        labels: {
            formatter: function() {
                return '$' + this.axis.defaultLabelFormatter.call(this);
            },
            align: 'right',
            style: {
                color: '#56b4e9'
            }
        },
        title: {
            text: 'Market Cap',
            style: {
                color: '#56b4e9',
                'font-weight': 'bold'
            }
        },
        showEmpty: false,
        height: '80%',
        opposite: false,
        floor: 0
    }, {
        labels: {
            formatter: function() {
                return '$' + this.axis.defaultLabelFormatter.call(this);
            },
            style: {
                color: '#009e73'
            },
            align: 'left',
            x: 15
        },
        title: {
            text: 'Price USD',
            style: {
                color: '#009e73',
                'font-weight': 'bold'
            }
        },
        showEmpty: false,
        height: '80%',
        opposite: true,
        floor: 0
    }, {
        labels: {
            formatter: function() {
                return this.axis.defaultLabelFormatter.call(this) + ' BTC';
            },
            style: {
                color: '#ff9f00'
            },
            align: 'left',
            x: 15
        },
        title: {
            text: 'Price BTC',
            style: {
                color: '#ff9f00',
                'font-weight': 'bold'
            }
        },
        showEmpty: false,
        height: '80%',
        opposite: true,
        floor: 0
    }, {
        labels: {
            align: 'right',
            style: {
                color: '#777'
            }
        },
        title: {
            text: '24h Vol',
            style: {
                color: '#777',
                'font-weight': 'bold'
            }
        },
        showEmpty: false,
        top: '80%',
        height: '20%',
        offset: 2,
        lineWidth: 1,
        opposite: false,
    }],
    series: [{
        name: 'Market Cap',
        color: '#56b4e9',
        tooltip: {
            valueSuffix: ' USD'
        },
        data: data.market_cap_by_available_supply,
        visible: true,
        dataGrouping: {
            enabled: false
        }
    }, {
        name: 'Price (USD)',
        yAxis: 1,
        color: '#009e73',
        data: data.price_usd,
        visible: true,
        dataGrouping: {
            enabled: false
        }
    }, {
        name: 'Price (BTC)',
        color: '#ff9f00',
        yAxis: 2,
        data: data.price_btc,
        visible: true,
        dataGrouping: {
            enabled: false
        }
    }, {
        type: 'column',
        name: '24h Vol',
        color: '#777',
        yAxis: 3,
        tooltip: {
            valueSuffix: ' USD' 
        },
        data: data.volume_usd,
        visible: true,
        dataGrouping: {
            approximation: "average",
            enabled: false
        }
    }],
});

        setTimeout(updateGraph, 6000000);
    });
}

$(document).ready(function() {
    setTimeout(updateVitals, 250);
    setTimeout(updateGraph, 250);
});

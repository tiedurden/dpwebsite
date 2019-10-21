$(function () {
    $('#container').highcharts({
        legend: {
            enabled: false
        },
        title: {
            text: 'Injured players per team and matchday season 18/19'
        },
        yAxis: {
            type: 'category',
            title: {
                text: 'Injured players'
            },
            min: 0,
            max: 10
        },

        xAxis: {
            title: {
                text: 'Matchday'
            },
            accessibility: {
                description: 'Matchday 1 to 34'
            },
            categories: [],
            labels: {
                steps: 1
            },
            min: 1,
            max: 34
        },
        series: [
            {
                name: 'Bayern München',
                id: 'Bayern München',
                marker: {
                    symbol: 'url(https://tmssl.akamaized.net//images/wappen/tiny/27.png?lm=1498251238)'
                },
                color: '#DB042C',
                data: ["", 1, 1, 2, 3, 3, 4, 4, 2, 2, 3, 5, 7, 4, 3, 3, 4, 6, 3, 3, 5, 4, 2, 3, 6, 3, 4, 4, 3, 3, 5, 4, 3, 3, 3],

},

            {
                name: 'Borussia Dortmund',
                id: 'Borussia Dortmund',
                marker: {
                    symbol: 'url(https://tmssl.akamaized.net//images/wappen/tiny/16.png?lm=1396275280)'
                },
                color: 'black',
                data: ["", 2, 4, 3, 2, 2, 1, 8, 6, 4, 4, 3, 2, 4, 5, 3, 2, 4, 5, 3, 3, 3, 4, 5, 4, 5, 4, 4, 3, 6, 3, 3, 2, 6, 4],
},

            {
                name: 'RasenBallsport Leipzig',
                id: 'RasenBallsport Leipzig',
                marker: {
                    symbol: 'url(https://tmssl.akamaized.net//images/wappen/tiny/23826.png?lm=1504871315)'
                },
                color: 'red',
                data: ["", 1, 1, 1, 3, 3, 2, 1, 3, 2, 2, 3, 4, 2, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 3, 3, 3, 4, 3, 4, 3, 3, 2, 2, 0],
                visible: false

},

            {
                name: 'Bayer 04 Leverkusen',
                id: 'Bayer 04 Leverkusen',

                marker: {
                    symbol: 'url(https://tmssl.akamaized.net//images/wappen/tiny/15.png?lm=1403163785)'
                },
                color: 'red',
                data: ["", 5, 3, 4, 4, 4, 4, 4, 3, 2, 2, 1, 1, 3, 2, 3, 3, 3, 2, 2, 3, 3, 3, 4, 4, 3, 2, 1, 3, 2, 4, 4, 4, 3, 3],
                visible: false
},

            {
                name: 'Borussia Mönchengladbach',
                id: 'Borussia Mönchengladbach',
                marker: {
                    symbol: 'url(https://tmssl.akamaized.net//images/wappen/tiny/18.png?lm=1483890536)'
                },
                data: ["", 8, 6, 4, 4, 4, 3, 3, 1, 2, 2, 1, 2, 4, 5, 6, 8, 5, 3, 4, 3, 4, 5, 4, 4, 6, 6, 3, 4, 3, 5, 5, 3, 5, 4],
                visible: false
},

            {
                name: 'VfL Wolfsburg',
                id: 'VfL Wolfsburg',
                marker: {
                    symbol: 'url(https://tmssl.akamaized.net//images/wappen/tiny/82.png?lm=1503060755)'
                },
                data: ["", 4, 5, 5, 4, 4, 6, 7, 5, 5, 5, 3, 4, 3, 2, 3, 3, 4, 3, 3, 4, 3, 2, 2, 2, 2, 2, 2, 4, 7, 6, 7, 6, 6, 5],
                visible: false
},

            {
                name: 'Eintracht Frankfurt',
                id: 'Eintracht Frankfurt',
                marker: {
                    symbol: 'url(https://tmssl.akamaized.net//images/wappen/tiny/24.png?lm=1403806187)'
                },
                data: ["", 3, 2, 4, 4, 5, 5, 3, 3, 3, 6, 4, 5, 4, 4, 5, 5, 5, 4, 2, 3, 4, 3, 3, 4, 3, 5, 5, 5, 4, 2, 3, 1, 1, 1],
                visible: false
},

            {
                name: 'SV Werder Bremen',
                id: 'SV Werder Bremen',
                marker: {
                    symbol: 'url(https://tmssl.akamaized.net//images/wappen/tiny/86.png?lm=1403082298)'
                },
                color: 'green',
                data: ["", 7, 6, 6, 7, 5, 5, 6, 7, 7, 5, 5, 6, 6, 8, 8, 7, 7, 4, 4, 2, 4, 4, 5, 3, 4, 5, 5, 3, 4, 3, 3, 3, 4, 4],
                visible: false
},

            {
                name: 'TSG 1899 Hoffenheim',
                id: 'TSG 1899 Hoffenheim',
                marker: {
                    symbol: 'url(https://tmssl.akamaized.net//images/wappen/tiny/533.png?lm=1458907862)'
                },
                data: ["", 6, 5, 8, 6, 6, 8, 6, 4, 4, 2, 3, 3, 2, 2, 2, 2, 2, 3, 3, 2, 3, 4, 7, 8, 4, 3, 3, 3, 3, 4, 6, 7, 8, 8],
                color: 'blue',
                visible: false
},

            {
                name: 'Fortuna Düsseldorf',
                id: 'Fortuna Düsseldorf',
                marker: {
                    symbol: 'url(https://tmssl.akamaized.net//images/wappen/tiny/38.png?lm=1405514004)'
                },
                color: 'red',
                data: ["", 5, 4, 4, 6, 6, 6, 6, 6, 7, 6, 5, 5, 5, 6, 6, 5, 4, 5, 5, 7, 4, 6, 7, 6, 5, 7, 5, 5, 7, 10, 7, 6, 6, 4],
                visible: false
},

            {
                name: 'Hertha BSC',
                id: 'Hertha BSC',
                marker: {
                    symbol: 'url(https://tmssl.akamaized.net//images/wappen/tiny/44_1502534268.png?lm=1502534269)'
                },
                color: 'blue',
                data: ["", 7, 7, 8, 5, 5, 6, 3, 7, 4, 3, 5, 7, 7, 7, 10, 7, 8, 5, 2, 4, 5, 5, 5, 4, 3, 2, 3, 5, 6, 4, 3, 5, 5, 5],
                visible: false
},

            {
                name: '1.FSV Mainz 05',
                id: '1.FSV Mainz 05',
                marker: {
                    symbol: 'url(https://tmssl.akamaized.net//images/wappen/tiny/39_1566637084.png?lm=1566637084)'
                },
                color: 'red',
                data: ["", 5, 6, 7, 6, 5, 6, 8, 5, 5, 6, 5, 6, 6, 6, 7, 6, 6, 3, 3, 4, 4, 4, 3, 3, 3, 4, 4, 4, 6, 6, 4, 3, 3, 3],
                visible: false
},

            {
                name: 'SC Freiburg',
                id: 'SC Freiburg',
                marker: {
                    symbol: 'url(https://tmssl.akamaized.net//images/wappen/tiny/60.png?lm=1517249279)'
                },
                color: 'black',
                data: ["", 3, 4, 4, 5, 5, 3, 4, 4, 6, 6, 5, 3, 5, 3, 3, 3, 3, 4, 4, 3, 4, 5, 5, 4, 4, 6, 6, 7, 7, 8, 8, 7, 6, 5],
                visible: false
},

            {
                name: 'FC Schalke 04',
                id: 'FC Schalke 04',
                marker: {
                    symbol: 'url(https://tmssl.akamaized.net//images/wappen/tiny/33.png?lm=1433588238)'
                },
                color: '#0060A9',

                data: ["", 3, 2, 3, 3, 4, 3, 4, 4, 2, 2, 2, 4, 3, 3, 4, 4, 5, 3, 3, 6, 5, 4, 5, 2, 2, 5, 6, 5, 3, 3, 5, 7, 6, 5],
                visible: false
},

            {
                name: 'FC Augsburg',
                id: 'FC Augsburg',
                marker: {
                    symbol: 'url(https://tmssl.akamaized.net//images/wappen/tiny/167.png?lm=1403085893)'
                },
                data: ["", 3, 3, 4, 4, 3, 3, 1, 1, 2, 2, 2, 3, 2, 2, 1, 2, 5, 1, 2, 3, 3, 2, 3, 3, 5, 5, 5, 6, 5, 5, 6, 4, 4, 6],
                visible: false
},

            {
                name: 'VfB Stuttgart',
                id: 'VfB Stuttgart',
                marker: {
                    symbol: 'url(https://tmssl.akamaized.net//images/wappen/tiny/79.png?lm=1487024087)'
                },
                data: ["", 1, 1, 4, 4, 4, 2, 4, 6, 5, 5, 5, 7, 5, 6, 6, 6, 5, 5, 3, 2, 2, 2, 2, 4, 0, 0, 2, 4, 4, 2, 1, 0, 3, 3],
                visible: false,
                color: '#FEED00'
},
            {
                name: 'Hannover 96',
                id: 'Hannover 96',
                marker: {
                    symbol: 'url(https://tmssl.akamaized.net//images/wappen/tiny/42.png?lm=1396275305)'
                },
                data: ["", 3, 4, 2, 2, 2, 3, 3, 3, 3, 7, 6, 7, 5, 5, 4, 6, 6, 8, 6, 6, 7, 5, 6, 7, 8, 7, 8, 8, 8, 8, 5, 4, 4, 4],
                visible: false,
                color: '#169C33'
},
            {
                name: '1.FC Nürnberg',
                id: '1.FC Nürnberg',
                marker: {
                    symbol: 'url(https://tmssl.akamaized.net//images/wappen/tiny/4.png?lm=1525459914)'
                },
                data: ["", 2, 2, 3, 2, 2, 2, 2, 2, 5, 5, 5, 4, 4, 5, 5, 5, 4, 3, 3, 3, 2, 2, 2, 3, 3, 4, 4, 5, 5, 4, 3, 3, 4, 3],
                visible: false,
                color: '#AD1731'
},

]
    }, function (chart) {

        var $customLegend = $('#customLegend').append('<select class="custom-select" ></select>').find('select'),
            $option,
            serie;

        $customLegend.append('<option>Select team(s)</option>');

        $.each(chart.series, function (i, serie) {
            $customLegend.append('<option>' + serie.name + '</option>');
        });

        $customLegend.change(function () {

            $option = $(this).val();

            serie = chart.get($option);

            if (serie.visible) {
                serie.hide();
            } else {
                serie.show();
            }
        });

    });
});

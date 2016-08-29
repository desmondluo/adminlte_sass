/**
 * Auther: Desmond
 * Email:  desmondjie@gmail.com
 * Date:   16/8/23.
 */

"use strict";

adminlte.controller('index1Controller', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.setLayouts(true);
    $scope.sales = {
        donut: true,
        area: false
    };

    $scope.showSales = function(type) {
        $scope.sales.donut  = false;
        $scope.sales.area   = false;
        $scope.sales[type]  = true;
        // must after angular render, echarts could resize
        setTimeout(function(){$scope.resize()}, 0);
        //$scope.resize();
    };


    $scope.revenueEchart = echarts.init(document.getElementById('revenue-echart'));
    $scope.revenueInit = function() {
        var labelRight = {
            normal: {
                position: 'right'
            }
        };
        $scope.revenueOption = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'邮件营销',
                    type:'bar',
                    stack: '广告',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'联盟广告',
                    type:'bar',
                    stack: '广告',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'视频广告',
                    type:'bar',
                    stack: '广告',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'搜索引擎',
                    type:'bar',
                    data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                    markLine : {
                        lineStyle: {
                            normal: {
                                type: 'dashed'
                            }
                        },
                        data : [
                            [{type : 'min'}, {type : 'max'}]
                        ]
                    }
                },
                {
                    name:'百度',
                    type:'bar',
                    barWidth : 5,
                    stack: '搜索引擎',
                    data:[620, 732, 701, 734, 1090, 1130, 1120]
                },
                {
                    name:'谷歌',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[120, 132, 101, 134, 290, 230, 220]
                },
                {
                    name:'必应',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[60, 72, 71, 74, 190, 130, 110]
                },
                {
                    name:'其他',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[62, 82, 91, 84, 109, 110, 120]
                }
            ]
        };

        $scope.revenueEchart.setOption($scope.revenueOption, true);
    };
    $scope.areaEchart = echarts.init(document.getElementById('sales-echart'));
    $scope.areaInit = function () {
        $scope.areaOption = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
                }
            ]
        };
        $scope.areaEchart.setOption($scope.areaOption, true);
    };
    $scope.revenueInit();
    $scope.areaInit();

    $scope.resize = function() {
        $scope.revenueEchart.resize();
        $scope.areaEchart.resize();
    };
    window.onresize = function () {
        $scope.resize();
    }

    // chat
    $scope.myword = "";
    $scope.chats = [];
    $scope.chats.push({
        status: "online",
        time: "2:15",
        name: "Mike Doe",
        content: "I would like to meet you to discuss the latest news about the arrival of the new theme. They say it is going to be one the best themes on the market",
        image: "dist/img/user4-128x128.jpg"
    });
    $scope.chats.push({
        status: "offline",
        time: "5:15",
        name: "Alexander Pierce",
        content: "I would like to meet you to discuss the latest news about the arrival of the new theme. They say it is going to be one the best themes on the market",
        image: "dist/img/user3-128x128.jpg"
    });
    $scope.chats.push({
        status: "offline",
        time: "5:50",
        name: "Susan Doe",
        content: "I would like to meet you to discuss the latest news about the arrival of the new theme. They say it is going to be one the best themes on the market",
        image: "dist/img/user2-160x160.jpg"
    });

    $scope.addChat = function() {
        $scope.chats.push({
            status: "offline",
            time: "5:50",
            name: "Susan Doe",
            content: $scope.myword,
            image: "dist/img/user2-160x160.jpg"
        });
        $scope.myword = "";
    };
}]);
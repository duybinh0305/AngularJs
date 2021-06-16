module app{
    'use strict';

    angularModule.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        let mainpage={
            name: 'mainpage',
            url:'/mainpage',
            templateUrl: '/client/views/mainPage.html',
            controller:'MainPageController',
            controllerAs:'vm'
        }
        $stateProvider.state(mainpage);
        $urlRouterProvider.otherwise('mainpage');
    }]);

    angularModule.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        let home={
            name: 'home',
            url:'/home',
            templateUrl: '/client/views/page/home/home.html',
            controller:'HomeController',
            controllerAs:'vm'
        }
        $stateProvider.state(home);
        $urlRouterProvider.otherwise('home');
    }]);
}

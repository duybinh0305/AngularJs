var app;
(function (app) {
    'use strict';
    function Controller(name) {
        return function (clazz) {
            clazz.$name = name;
            app.angularModule.controller(name, clazz);
        };
    }
    app.Controller = Controller;
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    app.angularModule = angular.module('app', ['ui.router']);
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    app.angularModule.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            var mainpage = {
                name: 'mainpage',
                url: '/mainpage',
                templateUrl: '/client/views/mainPage.html',
                controller: 'MainPageController',
                controllerAs: 'vm'
            };
            $stateProvider.state(mainpage);
            $urlRouterProvider.otherwise('mainpage');
        }]);
    app.angularModule.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            var home = {
                name: 'home',
                url: '/home',
                templateUrl: '/client/views/page/taskbar/taskbar.html',
                controller: 'TaskBarController',
                controllerAs: 'vm'
            };
            $stateProvider.state(home);
            $urlRouterProvider.otherwise('home');
        }]);
})(app || (app = {}));
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app;
(function (app) {
    'use strict';
    var MainPageCtrl = (function () {
        function MainPageCtrl() {
        }
        MainPageCtrl = __decorate([
            app.Controller('MainPageController')
        ], MainPageCtrl);
        return MainPageCtrl;
    }());
    app.MainPageCtrl = MainPageCtrl;
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    var TaskBarCtrl = (function () {
        function TaskBarCtrl() {
        }
        TaskBarCtrl = __decorate([
            app.Controller('TaskBarController')
        ], TaskBarCtrl);
        return TaskBarCtrl;
    }());
    app.TaskBarCtrl = TaskBarCtrl;
})(app || (app = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9jb21tb24vYW5ub3RhdGlvbi50cyIsImNsaWVudC9jb21tb24vYXBwLm1vZHVsZS50cyIsImNsaWVudC9jb21tb24vYXBwLnJvdXRlLnRzIiwiY2xpZW50L2NvbnRyb2xsZXIvbWFpblBhZ2UuY29udHJvbGxlci50cyIsImNsaWVudC92aWV3cy9wYWdlL3Rhc2tiYXIvdGFza0Jhci5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQU8sR0FBRyxDQVNUO0FBVEQsV0FBTyxHQUFHO0lBQ04sWUFBWSxDQUFDO0lBRWIsU0FBZ0IsVUFBVSxDQUFDLElBQVc7UUFDbEMsT0FBTyxVQUFTLEtBQVM7WUFDckIsS0FBSyxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUM7WUFDakIsSUFBQSxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBTGUsY0FBVSxhQUt6QixDQUFBO0FBQ0wsQ0FBQyxFQVRNLEdBQUcsS0FBSCxHQUFHLFFBU1Q7QUNURCxJQUFPLEdBQUcsQ0FJVDtBQUpELFdBQU8sR0FBRztJQUNOLFlBQVksQ0FBQztJQUVGLGlCQUFhLEdBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQ25FLENBQUMsRUFKTSxHQUFHLEtBQUgsR0FBRyxRQUlUO0FDSkQsSUFBTyxHQUFHLENBMEJUO0FBMUJELFdBQU8sR0FBRztJQUNOLFlBQVksQ0FBQztJQUViLElBQUEsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixFQUFDLG9CQUFvQixFQUFDLFVBQVMsY0FBYyxFQUFDLGtCQUFrQjtZQUNsRyxJQUFJLFFBQVEsR0FBQztnQkFDVCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsR0FBRyxFQUFDLFdBQVc7Z0JBQ2YsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsVUFBVSxFQUFDLG9CQUFvQjtnQkFDL0IsWUFBWSxFQUFDLElBQUk7YUFDcEIsQ0FBQTtZQUNELGNBQWMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0Isa0JBQWtCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSixJQUFBLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsRUFBQyxvQkFBb0IsRUFBQyxVQUFTLGNBQWMsRUFBQyxrQkFBa0I7WUFDbEcsSUFBSSxJQUFJLEdBQUM7Z0JBQ0wsSUFBSSxFQUFFLE1BQU07Z0JBQ1osR0FBRyxFQUFDLE9BQU87Z0JBQ1gsV0FBVyxFQUFFLHlDQUF5QztnQkFDdEQsVUFBVSxFQUFDLG1CQUFtQjtnQkFDOUIsWUFBWSxFQUFDLElBQUk7YUFDcEIsQ0FBQTtZQUNELGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0Isa0JBQWtCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDUixDQUFDLEVBMUJNLEdBQUcsS0FBSCxHQUFHLFFBMEJUOzs7Ozs7O0FDMUJELElBQU8sR0FBRyxDQU9UO0FBUEQsV0FBTyxHQUFHO0lBQ04sWUFBWSxDQUFDO0lBR2I7UUFBQTtRQUVBLENBQUM7UUFGWSxZQUFZO1lBRHhCLElBQUEsVUFBVSxDQUFDLG9CQUFvQixDQUFDO1dBQ3BCLFlBQVksQ0FFeEI7UUFBRCxtQkFBQztLQUZELEFBRUMsSUFBQTtJQUZZLGdCQUFZLGVBRXhCLENBQUE7QUFDTCxDQUFDLEVBUE0sR0FBRyxLQUFILEdBQUcsUUFPVDtBQ1BELElBQU8sR0FBRyxDQU9UO0FBUEQsV0FBTyxHQUFHO0lBQ04sWUFBWSxDQUFDO0lBR2I7UUFBQTtRQUVBLENBQUM7UUFGWSxXQUFXO1lBRHZCLElBQUEsVUFBVSxDQUFDLG1CQUFtQixDQUFDO1dBQ25CLFdBQVcsQ0FFdkI7UUFBRCxrQkFBQztLQUZELEFBRUMsSUFBQTtJQUZZLGVBQVcsY0FFdkIsQ0FBQTtBQUNMLENBQUMsRUFQTSxHQUFHLEtBQUgsR0FBRyxRQU9UIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZSBhcHB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIENvbnRyb2xsZXIobmFtZTpzdHJpbmcpe1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihjbGF6ejphbnkpe1xyXG4gICAgICAgICAgICBjbGF6ei4kbmFtZT1uYW1lO1xyXG4gICAgICAgICAgICBhbmd1bGFyTW9kdWxlLmNvbnRyb2xsZXIobmFtZSwgY2xhenopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm1vZHVsZSBhcHB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgZXhwb3J0IGxldCBhbmd1bGFyTW9kdWxlPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyd1aS5yb3V0ZXInXSk7XHJcbn0iLCJtb2R1bGUgYXBwe1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXJNb2R1bGUuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCckdXJsUm91dGVyUHJvdmlkZXInLGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCR1cmxSb3V0ZXJQcm92aWRlcil7XHJcbiAgICAgICAgbGV0IG1haW5wYWdlPXtcclxuICAgICAgICAgICAgbmFtZTogJ21haW5wYWdlJyxcclxuICAgICAgICAgICAgdXJsOicvbWFpbnBhZ2UnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9jbGllbnQvdmlld3MvbWFpblBhZ2UuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6J01haW5QYWdlQ29udHJvbGxlcicsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczondm0nXHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKG1haW5wYWdlKTtcclxuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCdtYWlucGFnZScpO1xyXG4gICAgfV0pO1xyXG5cclxuICAgIGFuZ3VsYXJNb2R1bGUuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCckdXJsUm91dGVyUHJvdmlkZXInLGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCR1cmxSb3V0ZXJQcm92aWRlcil7XHJcbiAgICAgICAgbGV0IGhvbWU9e1xyXG4gICAgICAgICAgICBuYW1lOiAnaG9tZScsXHJcbiAgICAgICAgICAgIHVybDonL2hvbWUnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9jbGllbnQvdmlld3MvcGFnZS90YXNrYmFyL3Rhc2tiYXIuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6J1Rhc2tCYXJDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgY29udHJvbGxlckFzOid2bSdcclxuICAgICAgICB9XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoaG9tZSk7XHJcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnaG9tZScpO1xyXG4gICAgfV0pO1xyXG59XHJcbiIsIm1vZHVsZSBhcHB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgQENvbnRyb2xsZXIoJ01haW5QYWdlQ29udHJvbGxlcicpXHJcbiAgICBleHBvcnQgY2xhc3MgTWFpblBhZ2VDdHJse1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwibW9kdWxlIGFwcHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBAQ29udHJvbGxlcignVGFza0JhckNvbnRyb2xsZXInKVxyXG4gICAgZXhwb3J0IGNsYXNzIFRhc2tCYXJDdHJse1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59Il19

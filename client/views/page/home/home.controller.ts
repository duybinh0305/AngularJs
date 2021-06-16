module app {
    'use strict';

    @Controller('HomeController')
    export class HomeCtrl {
        // app.controller('mainCrl', function($scope: { users: any;check_login:any; login:any;internshipId:any ; password:any;profile:any},$http: { get: (arg0: string) => Promise<any>; }){
        //     $scope.check_login=false;
        //     $http.get('../data/user.json').then(function(res){
        //         $scope.users=res.data;
        //         //funtion login account

        //         $scope.login=function(){
        //             var check=get_login($scope.internshipId, $scope.password);
        //             if(check){
        //                 alert("Dang nhap thanh cong");
        //                 $scope.check_login=true;
        //                 $scope.profile=check;
        //                 console.log($scope.profile);
                        
        //             }
        //             else{
        //                 alert("Thong tin tai khoan k hop le");
        //             }
        //         }
        //         function get_login(user: any,pass: any){
        //             for(var i=0; i<$scope.users.length; i++){
        //                 if($scope.users[i].internshipId==user && $scope.users[i].password==pass){
        //                     return $scope.users[i];
        //                 }
        //             }
        //             return false;
        //         }
        //     });
            
        // });
    }
}
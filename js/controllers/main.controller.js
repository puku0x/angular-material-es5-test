(function () {
    'use strict';

    // コントローラ登録
    angular
        .module('app')
        .controller('MainController', Controller);

    // DI
    Controller.$inject = ['$log', '$timeout', '$mdSidenav'];

    // コントローラ
    function Controller($log, $timeout, $mdSidenav) {
        // ビューモデル
        var vm = this;
        vm.init = init;
        vm.toggleList = toggleUsersList;

        function toggleUsersList() {
            $mdSidenav('left').toggle();
        }

        // 初期化
        function init() {
        }
    }
})();

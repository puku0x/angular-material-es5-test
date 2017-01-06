(function() {
    'use strict';

    // コンフィグ登録
    angular
        .module('app')
        .config(Config);

    // DI
    Config.$inject = ['$logProvider', '$mdIconProvider'];

    // 設定
    function Config($logProvider, $mdIconProvider) {
        // デバッグ
        $logProvider.debugEnabled(true);

        // アイコン
        $mdIconProvider
            .defaultFontSet('fa');
    }
    
})();
Ext.define('TutorialApp.view.home.HomeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.home',

    onLogoutClick: function (button) {
        location.reload();
        localStorage.setItem("TutorialLoggedIn", '');
        localStorage.setItem("x_access_token", '');
        this.getView().destroy();
        // Ext.create({
        //     xtype: 'login'
        // });
    }
});
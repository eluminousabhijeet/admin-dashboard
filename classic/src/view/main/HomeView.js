Ext.define('TutorialApp.view.home.Home', {
    extend: 'Ext.panel.Panel',
    xtype: 'home',
    title: 'Home',
    controller: 'home',
    html: "<h1>Welcome to Dashboard</h1>",
    buttons: [
        {
            text: 'Logout',
            iconCls: 'x-fa fa-sign-out',
            handler: 'onLogoutClick'
        }
    ],
});
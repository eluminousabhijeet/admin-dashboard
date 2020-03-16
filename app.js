/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'Admin.dashboard',

    extend: 'Admin.dashboard.Application',

    requires: [
        'Admin.dashboard.*',
    ],
    launch: function () {
        // viewport = Ext.getCmp('viewport');
        // target = viewport.down('#viewport-target');
        // view = Ext.create('Admin.dashboard.view.main.Main');
        // target.add(view);
    },

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: 'Admin.dashboard.view.Login',
    // autoCreateViewport: true

    //-------------------------------------------------------------------------
    // Most customizations should be made to Admin.dashboard.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});

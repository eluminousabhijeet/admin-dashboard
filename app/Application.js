/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Admin.dashboard.Application', {
    extend: 'Ext.app.Application',

    name: 'Admin.dashboard',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        // TODO: add global / shared stores here
    ],

    init: function () {
        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        var loggedIn;

        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem("TutorialLoggedIn");
        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
        });

        var formPanel = Ext.create('Ext.form.Panel', {
            width: 500,
            height: 500,
            title: 'Add User',
            id: 'addUserModal',
            region: 'center',
            floating: true,
            closable: true,
            controller: 'user',
            defaultType: 'textfield',
            items: [{
                xtype: 'container',
                layout: 'hbox',
                margin: '0 0 5 0',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'First Name',
                        name: 'firstname',
                        allowBlank: false
                    }
                ]
            }, {
                xtype: 'container',
                layout: 'hbox',
                margin: '0 0 5 0',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Last Name',
                        name: 'lastname',
                        allowBlank: false
                    }
                ]
            }, {
                xtype: 'container',
                layout: 'hbox',
                margin: '0 0 5 0',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Username',
                        name: 'username',
                        allowBlank: false
                    }
                ]
            }, {
                xtype: 'container',
                layout: 'hbox',
                margin: '0 0 5 0',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Email',
                        name: 'email',
                        inputType: 'email',
                        allowBlank: false
                    }
                ]
            }, {
                xtype: 'container',
                layout: 'hbox',
                margin: '0 0 5 0',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Contact',
                        name: 'contact',
                        allowBlank: false
                    }
                ]
            }, {
                xtype: 'container',
                layout: 'hbox',
                margin: '0 0 5 0',
                items: [
                    {
                        xtype: 'combo',
                        fieldLabel: 'Gender',
                        name: 'gender',
                        valueField: 'gender',
                        queryMode: 'local',
                        allowBlank: false,
                        store: ['male', 'female'],
                        displayField: 'gender',
                        onFocus: function () {
                            var me = this;

                            if (!me.isExpanded) {
                                me.expand()
                            }
                            me.getPicker().focus();
                        },
                        autoSelect: true,
                        forceSelection: true
                    }
                ]
            }, {
                xtype: 'container',
                layout: 'hbox',
                margin: '0 0 5 0',
                items: [
                    {
                        xtype: 'combo',
                        fieldLabel: 'Role',
                        name: 'role',
                        valueField: 'role',
                        queryMode: 'local',
                        allowBlank: false,
                        store: ['admin', 'buyer', 'seller'],
                        displayField: 'role',
                        onFocus: function () {
                            var me = this;

                            if (!me.isExpanded) {
                                me.expand()
                            }
                            me.getPicker().focus();
                        },
                        autoSelect: true,
                        forceSelection: true,
                        editable: false
                    }
                ]
            }, {
                xtype: 'container',
                layout: 'hbox',
                margin: '0 0 5 0',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Password',
                        inputType: 'password',
                        name: 'password',
                        allowBlank: false,
                    }
                ]
            }],
            buttons: [
                {
                    text: 'Submit',
                    handler: 'onAddBtnClick'
                },
                {
                    text: 'Close',
                    handler: 'onCancelBtnClick'
                }
            ]
        })
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

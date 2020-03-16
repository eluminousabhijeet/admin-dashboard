Ext.define('TutorialApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function (button) {
        const view = this.getView();
        var data = button.up('form');
        const username = data.getForm().findField("username").getValue();
        const password = data.getForm().findField("password").getValue();

        Ext.Ajax.request({
            url: 'http://localhost:5000/admin/signin/',
            method: 'POST',
            params: {
                username: username,
                password: password
            },
            success: function (response) {
                var result = Ext.decode(response.responseText);
                const token = result.token;
                if (result.success == "true") {
                    localStorage.setItem("TutorialLoggedIn", true);
                    localStorage.setItem("x_access_token", token);
                    view.destroy();
                    Ext.create({
                        xtype: 'app-main'
                    });
                } else {
                    alert('Authentication failed!');
                }
            },
            failure: function () { console.log('failure'); }
        });
        
        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true
        // localStorage.setItem("TutorialLoggedIn", true);

        // Remove Login Window
        // this.getView().destroy();

        // Add the main view to the viewport
        // Ext.create({
        //     xtype: 'app-main'
        // });

    }
});
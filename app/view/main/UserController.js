Ext.define('Admin.dashboard.view.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user',
    onDeleteClick: function (grid, rowIndex, colIndex) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this user!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    var rec = grid.getStore().getAt(rowIndex);
                    const recordId = rec.get('_id');
                    Ext.Ajax.request({
                        url: 'http://localhost:5000/admin/delete-user/' + recordId,
                        method: 'PATCH',
                        success: function () {
                            swal({
                                title: "Success",
                                text: "User deleted successfully..",
                                icon: "success",
                            });
                            grid.getStore().reload();
                        },
                        failure: function () { console.log('failure'); }
                    });
                } else {
                    console.log('Canceled');
                }
            });
    },

    onAddBtnClick: function (button, form) {
        var data = button.up('form');
        const firstname = data.getForm().findField("firstname").getValue();
        const lastname = data.getForm().findField("lastname").getValue();
        const username = data.getForm().findField("username").getValue();
        const email = data.getForm().findField("email").getValue();
        const contact = data.getForm().findField("contact").getValue();
        const gender = data.getForm().findField("gender").getValue();
        const role = data.getForm().findField("role").getValue();
        const password = data.getForm().findField("password").getValue();
        const submitType = data.getForm().findField("submitType").getValue();
        const userId = data.getForm().findField("userId").getValue();
        const status = 'active';

        const token = localStorage.getItem("x_access_token");

        if (submitType == "edit form") {
            if (Ext.getCmp('addUserModal').isValid()) {
                Ext.Ajax.request({
                    url: 'http://localhost:5000/admin/update-user/' + userId,
                    method: 'PATCH',
                    headers: {
                        'Authorization': token
                    },
                    params: {
                        firstname: firstname,
                        lastname: lastname,
                        username: username,
                        email: email,
                        contact: contact,
                        gender: gender,
                        role: role,
                        // password: password,
                        // status: status
                    },
                    success: function (response) {
                        var result = Ext.decode(response.responseText);
                        if (result.success == "true") {
                            Ext.getCmp('addUserModal').hide();
                            Ext.getCmp('addUserModal').reset();
                            swal({
                                title: "Success",
                                text: "User Updated successfully..",
                                icon: "success",
                            });
                            Ext.getStore('users').reload();
                        } else {
                            alert(result.message);
                        }
                    },
                    failure: function () { console.log('failure'); }
                });
            }
        } else {
            if (Ext.getCmp('addUserModal').isValid()) {
                Ext.Ajax.request({
                    url: 'http://localhost:5000/admin/add-user/',
                    method: 'POST',
                    headers: {
                        'Authorization': token
                    },
                    params: {
                        firstname: firstname,
                        lastname: lastname,
                        username: username,
                        email: email,
                        contact: contact,
                        gender: gender,
                        role: role,
                        password: password,
                        status: status
                    },
                    success: function (response) {
                        var result = Ext.decode(response.responseText);
                        if (result.success == "true") {
                            Ext.getCmp('addUserModal').hide();
                            Ext.getCmp('addUserModal').reset();
                            swal({
                                title: "Success",
                                text: "User Added successfully..",
                                icon: "success",
                            });
                            Ext.getStore('users').reload();
                        } else {
                            alert(result.message);
                        }
                    },
                    failure: function () { console.log('failure'); }
                });
            }
        }
    },

    onCancelBtnClick: function (button) {
        Ext.getCmp('addUserModal').hide();
        Ext.getCmp('addUserModal').reset();
    },

    onEditClick: function (grid, rowIndex) {
        Ext.getCmp('addUserModal').setTitle('Edit User');
        Ext.getCmp('addUserModal').show();
        var rec = grid.getStore().getAt(rowIndex);
        console.log(rec.get('_id'));
        Ext.getCmp('firstnameField').setValue(rec.get('firstname'));
        Ext.getCmp('lastnameField').setValue(rec.get('lastname'));
        Ext.getCmp('usernameField').setValue(rec.get('username'));
        Ext.getCmp('emailField').setValue(rec.get('email'));
        Ext.getCmp('contactField').setValue(rec.get('contact'));
        Ext.getCmp('genderField').setValue(rec.get('gender'));
        Ext.getCmp('roleField').setValue(rec.get('role'));
        Ext.getCmp('passwordField').setValue(rec.get('password'));
        Ext.getCmp('submitTypeField').setValue('edit form');
        Ext.getCmp('userIdField').setValue(rec.get('_id'));
    }
})
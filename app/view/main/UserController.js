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

    onAddBtnClick: function (button) {
        var data = button.up('form');
        const firstname = data.getForm().findField("firstname").getValue();
        const lastname = data.getForm().findField("lastname").getValue();
        const username = data.getForm().findField("username").getValue();
        const email = data.getForm().findField("email").getValue();
        const contact = data.getForm().findField("contact").getValue();
        const gender = data.getForm().findField("gender").getValue();
        const role = data.getForm().findField("role").getValue();
        const password = data.getForm().findField("password").getValue();
        const status = 'active';

        console.log(firstname, lastname, username, email, contact, gender, role, password, status);

        const token = localStorage.getItem("x_access_token");
        var successtype = "";
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
                    var grid = Ext.getCmp('userGrid');
                    grid.getStore().reload();
                    successtype = result.success;
                } else {
                    alert('failed');
                }
            },
            failure: function () { console.log('failure'); }
        });
    }
})
Ext.define('Admin.dashboard.view.ProductController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.product',
    onDeleteClick: function (grid, rowIndex, colIndex) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    var rec = grid.getStore().getAt(rowIndex);
                    const recordId = rec.get('_id');
                    Ext.Ajax.request({
                        url: 'http://localhost:5000/admin/delete-product/' + recordId,
                        method: 'PATCH',
                        success: function () {
                            swal({
                                title: "Success",
                                text: "Product deleted successfully..",
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
        var filesSelected = data.getForm().findField("image").getValue();
        if (filesSelected.length > 0) {
            var fileToLoad = filesSelected[0];
            var reader = new FileReader();
            reader.readAsDataURL(filesSelected);
        }
        const category = data.getForm().findField("category").getValue();
        const name = data.getForm().findField("name").getValue();
        const description = data.getForm().findField("description").getValue();
        const price = data.getForm().findField("price").getValue();
        const stock = data.getForm().findField("stock").getValue();
        const image = data.getForm().findField("image").getValue();
        const submitProductType = data.getForm().findField("submitProductType").getValue();
        const productId = data.getForm().findField("productId").getValue();
        const status = 'active';

        const token = localStorage.getItem("x_access_token");

        if (submitType == "edit form") {
            if (Ext.getCmp('addProductModal').isValid()) {
                Ext.Ajax.request({
                    url: 'http://localhost:5000/admin/update-user/' + productId,
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
                            Ext.getCmp('addProductModal').hide();
                            Ext.getCmp('addProductModal').reset();
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
            if (Ext.getCmp('addProductModal').isValid()) {
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
                            Ext.getCmp('addProductModal').hide();
                            Ext.getCmp('addProductModal').reset();
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
        Ext.getCmp('addProductModal').hide();
        Ext.getCmp('addProductModal').reset();
    },

    onEditClick: function (grid, rowIndex) {
        Ext.getCmp('addProductModal').setTitle('Edit User');
        Ext.getCmp('addProductModal').show();
        var rec = grid.getStore().getAt(rowIndex);
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
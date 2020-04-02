Ext.define('Admin.dashboard.view.OrderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.order',
    onChangefilefield: function (filefield, newData, oldData, eOpts) {
        var filesSelected = filefield.getEl().down('input[type=file]').dom.files[0];
        var reader = new FileReader();
        // create handler
        reader.onload = (function (theFile) {
            return function (e) {
                Ext.getCmp('imageDataField').setValue(e.target.result);
                Ext.getCmp('imagePreview').src = e.target.result;
                Ext.getCmp('imagePreview').hidden = false;
            };
        })(filesSelected);
        reader.readAsDataURL(filesSelected);
    },
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
                    const token = localStorage.getItem("x_access_token");
                    Ext.Ajax.request({
                        url: 'http://localhost:5000/admin/delete-product/' + recordId,
                        method: 'PATCH',
                        headers: {
                            'Authorization': token
                        },
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
        const category = data.getForm().findField("category").getValue();
        const name = data.getForm().findField("name").getValue();
        const description = data.getForm().findField("description").getValue();
        const price = data.getForm().findField("price").getValue();
        const stock = data.getForm().findField("stock").getValue();
        const image = data.getForm().findField("imageDataField").getValue();
        const submitProductType = data.getForm().findField("submitProductType").getValue();
        const productId = data.getForm().findField("productId").getValue();
        const status = 'active';

        const token = localStorage.getItem("x_access_token");

        if (submitProductType == "edit form") {
            if (Ext.getCmp('addProductModal').isValid()) {
                Ext.Ajax.request({
                    url: 'http://localhost:5000/admin/update-product/' + productId,
                    method: 'PATCH',
                    headers: {
                        'Authorization': token
                    },
                    params: {
                        category: category,
                        name: name,
                        description: description,
                        price: price,
                        stock: stock,
                        image: image,
                        status: status
                    },
                    success: function (response) {
                        var result = Ext.decode(response.responseText);
                        if (result.success == "true") {
                            Ext.getCmp('addProductModal').hide();
                            Ext.getCmp('addProductModal').reset();
                            swal({
                                title: "Success",
                                text: "Product Updated successfully..",
                                icon: "success",
                            });
                            Ext.getStore('products').reload();
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
                    url: 'http://localhost:5000/admin/add-product/',
                    method: 'POST',
                    headers: {
                        'Authorization': token
                    },
                    params: {
                        category: category,
                        name: name,
                        description: description,
                        price: price,
                        stock: stock,
                        image: image,
                        status: status
                    },
                    success: function (response) {
                        var result = Ext.decode(response.responseText);
                        if (result.success == "true") {
                            Ext.getCmp('addProductModal').hide();
                            Ext.getCmp('addProductModal').reset();
                            swal({
                                title: "Success",
                                text: "Product Added successfully..",
                                icon: "success",
                            });
                            Ext.getStore('products').reload();
                        } else {
                            alert(result.message);
                        }
                    },
                    failure: function () { console.log('failure'); }
                });
            }
        }
    },

    onCloseBtnClick: function (button) {
        Ext.getCmp('orderViewPanel').hide();
    },

    // onCategoryRender: function (value, metaData, record, rowIndex, colIndex, store) {
    //     var categoryName = "123";
    //     Ext.Ajax.request({
    //         url: 'http://localhost:5000/admin/get-category/' + value,
    //         method: 'GET',
    //         headers: {
    //             'Authorization': token
    //         },
    //         success: function (response) {
    //             var result = Ext.decode(response.responseText);
    //             if (result.success == "true") {
    //                 const categoryData = result.category;
    //                 categoryName = categoryData[0].name;
    //                 console.log(categoryName);
    //             } else {
    //                 alert(result.message);
    //             }
    //         },
    //         failure: function () { console.log('failure'); }
    //     });
    //     // console.log(categoryName);
    //     return categoryName;
    // },

    onViewClick: function(grid, rowIndex){
        Ext.getCmp('orderViewPanel').show();
        var rec = grid.getStore().getAt(rowIndex);
        var productData = rec.get('productId');
        var userData = rec.get('userId');
        // Ext.getCmp('panelProductImage').setSrc(rec.get('image'));
        Ext.getCmp('productIdValue').update(productData['_id']);
        Ext.getCmp('productNameValue').update(productData['name']);
        Ext.getCmp('productQuantityValue').update(rec.get('quantity'));
        Ext.getCmp('productCostValue').update(rec.get('totalCost'));
        Ext.getCmp('productShippingNameValue').update(rec.get('shippingName'));
        Ext.getCmp('productShippingAddressValue').update(rec.get('shippingAddress'));
        Ext.getCmp('productShippingPostcodeValue').update(rec.get('shippingPostcode'));
        Ext.getCmp('productShippingCountryValue').update(rec.get('shippingCountry'));
        Ext.getCmp('productShippingStateValue').update(rec.get('shippingState'));
        Ext.getCmp('productShippingCityValue').update(rec.get('shippingCity'));
        // Ext.getCmp('productDescription').update("<p>"+rec.get('description')+"</p>");
        // Ext.getCmp('productPrice').update("<p><strong>Price: </strong>"+parseFloat(rec.get('price')).toFixed('2')+" ₹</p>");
        // Ext.getCmp('productStock').update("<p><strong>Stock: </strong>"+rec.get('stock')+"</p>");
    },

    onEditClick: function (grid, rowIndex) {
        Ext.getCmp('addProductModal').setTitle('Edit Product');
        Ext.getCmp('addProductModal').show();
        Ext.getCmp('imageField').allowBlank = true;
        var rec = grid.getStore().getAt(rowIndex);
        Ext.getCmp('nameField').setValue(rec.get('name'));
        Ext.getCmp('categoryField').setValue(rec.get('categoryId'));
        Ext.getCmp('descriptionField').setValue(rec.get('description'));
        Ext.getCmp('priceField').setValue(rec.get('price'));
        Ext.getCmp('stockField').setValue(rec.get('stock'));
        Ext.getCmp('imageField').setValue(rec.get('image'));
        Ext.getCmp('submitProductTypeField').setValue('edit form');
        Ext.getCmp('productIdField').setValue(rec.get('_id'));
    }
})
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

        var UserFormPanel = Ext.create('Ext.form.Panel', {
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
                margin: '40 30 10 30',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'First Name',
                        name: 'firstname',
                        id: 'firstnameField',
                        allowBlank: false,
                        width: '100%',
                        blankText: 'This should not be blank!',
                        msgTarget: 'side',
                    }
                ]
            }, {
                xtype: 'container',
                layout: 'hbox',
                margin: '0 30 10 30',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Last Name',
                        id: 'lastnameField',
                        name: 'lastname',
                        allowBlank: false,
                        width: '100%',
                        blankText: 'This should not be blank!',
                        msgTarget: 'side',
                    }
                ]
            }, {
                xtype: 'container',
                layout: 'hbox',
                margin: '0 30 10 30',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Username',
                        id: 'usernameField',
                        name: 'username',
                        allowBlank: false,
                        width: '100%',
                        blankText: 'This should not be blank!',
                        msgTarget: 'side',
                    }
                ]
            }, {
                xtype: 'container',
                layout: 'hbox',
                margin: '0 30 10 30',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Email',
                        name: 'email',
                        id: 'emailField',
                        allowBlank: false,
                        width: '100%',
                        blankText: 'This should not be blank!',
                        msgTarget: 'side',
                        regex: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                        regexText: 'Please enter valid email!'
                    }
                ]
            }, {
                xtype: 'container',
                layout: 'hbox',
                margin: '0 30 10 30',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Contact',
                        id: 'contactField',
                        name: 'contact',
                        allowBlank: false,
                        width: '100%',
                        blankText: 'This should not be blank!',
                        msgTarget: 'side',
                        regex: /^[0]?[789]\d{9}$/,
                        regexText: 'Please enter valid contact number!'
                    }
                ]
            }, {
                xtype: 'container',
                layout: 'hbox',
                margin: '0 30 10 30',
                items: [
                    {
                        xtype: 'combo',
                        fieldLabel: 'Gender',
                        name: 'gender',
                        id: 'genderField',
                        valueField: 'gender',
                        queryMode: 'local',
                        allowBlank: false,
                        width: '100%',
                        blankText: 'This should not be blank!',
                        msgTarget: 'side',
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
                margin: '0 30 10 30',
                items: [
                    {
                        xtype: 'combo',
                        fieldLabel: 'Role',
                        name: 'role',
                        valueField: 'role',
                        id: 'roleField',
                        queryMode: 'local',
                        allowBlank: false,
                        width: '100%',
                        blankText: 'This should not be blank!',
                        msgTarget: 'side',
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
                margin: '0 30 10 30',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Password',
                        inputType: 'password',
                        id: 'passwordField',
                        name: 'password',
                        allowBlank: false,
                        width: '100%',
                        blankText: 'This should not be blank!',
                        msgTarget: 'side',
                    }
                ]
            }, {
                xtype: 'container',
                layout: 'hbox',
                margin: '0 30 10 30',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Submit Type',
                        id: 'submitTypeField',
                        name: 'submitType',
                        listeners: {
                            'render': function (p) {
                                // check certain conditions
                                this.hide()
                            }
                        },
                    }
                ]
            }, {
                xtype: 'container',
                layout: 'hbox',
                margin: '0 30 10 30',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'User ID',
                        id: 'userIdField',
                        name: 'userId',
                        listeners: {
                            'render': function (p) {
                                // check certain conditions
                                this.hide()
                            }
                        },
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
        });

        var productFormPanel = Ext.create('Ext.form.Panel', {
            width: 500,
            height: 500,
            title: 'Add Product',
            id: 'addProductModal',
            region: 'center',
            floating: true,
            closable: true,
            controller: 'product',
            defaultType: 'textfield',
            items: [, {
                xtype: 'container',
                layout: 'hbox',
                margin: '40 20 10 20',
                items: [
                    {
                        xtype: 'combo',
                        fieldLabel: 'Category',
                        name: 'category',
                        valueField: 'category',
                        id: 'categoryField',
                        width: '100%',
                        queryMode: 'local',
                        allowBlank: false,
                        blankText: 'This should not be blank!',
                        msgTarget: 'side',
                        store: {
                            type: 'categories'
                        },
                        queryMode: 'local',
                        displayField: 'name',
                        valueField: '_id',
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
                    margin: '0 20 10 20',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Name',
                            name: 'name',
                            width: '100%',
                            id: 'nameField',
                            allowBlank: false,
                            blankText: 'This should not be blank!',
                            msgTarget: 'side',
                        }
                    ]
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '0 20 10 20',
                    items: [
                        {
                            xtype: 'textarea',
                            fieldLabel: 'Description',
                            id: 'descriptionField',
                            name: 'description',
                            width: '100%',
                            allowBlank: false,
                            blankText: 'This should not be blank!',
                            msgTarget: 'side',
                        }
                    ]
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '0 20 10 20',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Price',
                            id: 'priceField',
                            name: 'price',
                            width: '100%',
                            allowBlank: false,
                            blankText: 'This should not be blank!',
                            msgTarget: 'side',
                            regex: /^[0-9]?[0-9 .]*$/,
                            regexText: 'Please enter valid price!'
                        }
                    ]
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '0 20 10 20',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Stock',
                            name: 'stock',
                            width: '100%',
                            id: 'stockField',
                            allowBlank: false,
                            blankText: 'This should not be blank!',
                            msgTarget: 'side',
                            regex: /^[0-9]?[0-9]*$/,
                            regexText: 'Please enter valid stock!'
                        }
                    ]
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '0 20 10 20',
                    items: [
                        {
                            xtype: 'filefield',
                            accept: 'image/*',
                            name: 'image-path[]',
                            fieldLabel: 'Image',
                            id: "imageField",
                            width: '100%',
                            msgTarget: 'side',
                            allowBlank: false,
                            blankText: 'Image is required!',
                            anchor: '100%',
                            buttonText: '',
                            buttonConfig: {
                                iconCls: 'x-fa fa-file'
                            },
                            emptyText: 'Only JPG or PNG allowed',
                            listeners: {
                                change: 'onChangefilefield'
                            }
                        }, {
                            xtype: 'image',
                            hidden: true,
                            id: 'imagePreview',
                            height: 158,
                            width: 158,
                            src: ''
                        }
                    ]
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '0 20 10 20',
                    items: [
                        {
                            xtype: 'textarea',
                            fieldLabel: 'imageData',
                            name: 'imageData',
                            id: 'imageDataField',
                            listeners: {
                                'render': function (p) {
                                    // check certain conditions
                                    this.hide()
                                }
                            },
                        }
                    ]
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '0 20 10 20',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Submit Type',
                            id: 'submitProductTypeField',
                            name: 'submitProductType',
                            listeners: {
                                'render': function (p) {
                                    // check certain conditions
                                    this.hide()
                                }
                            },
                        }
                    ]
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '0 20 10 20',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Product ID',
                            id: 'productIdField',
                            name: 'productId',
                            listeners: {
                                'render': function (p) {
                                    // check certain conditions
                                    this.hide()
                                }
                            },
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
            ],
        });

        var viewProductPanel = Ext.create('Ext.panel.Panel', {
            width: 500,
            height: 500,
            title: 'Details',
            region: 'center',
            floating: true,
            closable: true,
            autoScroll: true,
            controller: 'product',
            id: 'prodDetailPanel',
            items: [{
                xtype: 'image',
                id: 'panelProductImage',
                src: '',
                width: 300,
                height: 300,
            }, {
                id: 'productTitle',
            }, {
                id: 'productDescription',
            }, {
                id: 'productPrice',
            }, {
                id: 'productStock',
            }],
            buttons: [
                {
                    text: 'Close',
                    handler: 'onCancelBtnClick'
                }
            ],
        });

        var orderViewPanel = Ext.create('Ext.panel.Panel', {
            xtype: 'layout-table',
            width: 500,
            height: '90%',
            id: 'orderViewPanel',
            floating: true,
            closable: true,
            autoScroll: true,
            controller: 'order',

            layout: {
                type: 'table',
                columns: 2,
                tableAttrs: {
                    style: {
                        width: '100%'
                    }
                }
            },


            scrollable: true,


            defaults: {
                bodyPadding: '10 20',
            },

            items: [{
                html: '<strong>Product Id</strong>',
                rowspan: 1,
            }, {
                id: 'productIdValue',
                colspan: 2
            }, {
                html: '<strong>Product Name</strong>',
                cellCls: 'highlight'
            }, {
                id: 'productNameValue',
                colspan: 2
            }, {
                html: '<strong>Quantity</strong>',
                cellCls: 'highlight'
            }, {
                id: 'productQuantityValue',
                colspan: 2
            }, {
                html: '<strong>Total Cost</strong>',
                cellCls: 'highlight'
            }, {
                id: 'productCostValue',
                colspan: 2
            }, {
                html: '<strong>Shipping Name</strong>',
                cellCls: 'highlight'
            }, {
                id: 'productShippingNameValue',
                colspan: 2
            }, {
                html: '<strong>Shipping Address</strong>',
                cellCls: 'highlight'
            }, {
                id: 'productShippingAddressValue',
                colspan: 2
            }, {
                html: '<strong>Postcode</strong>',
                cellCls: 'highlight'
            }, {
                id: 'productShippingPostcodeValue',
                colspan: 2
            }, {
                html: '<strong>Country</strong>',
                cellCls: 'highlight'
            }, {
                id: 'productShippingCountryValue',
                colspan: 2
            }, {
                html: '<strong>State</strong>',
                cellCls: 'highlight'
            }, {
                id: 'productShippingStateValue',
                colspan: 2
            }, {
                html: '<strong>City</strong>',
                cellCls: 'highlight'
            }, {
                id: 'productShippingCityValue',
                colspan: 2
            }],
            buttons: [
                {
                    text: 'Close',
                    handler: 'onCloseBtnClick'
                }
            ],
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

Ext.define('Admin.dashboard.view.main.Users', {
    extend: 'Ext.grid.Panel',
    xtype: 'Users',
    title: 'Users',
    id: 'userGrid',
    controller: 'user',
    store: {
        type: 'users'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    actions: {
        delete: {
            handler: 'onDeleteClick',
            iconCls: 'x-fa fa-trash-o red',
            tooltip: 'Delete'
        },
        edit: {
            iconCls: 'x-fa fa-pencil-square blue',
            tooltip: 'Edit'
        }
    },
    columns: [
        { text: 'ID', dataIndex: '_id', hidden: true },
        { text: 'First Name', dataIndex: 'firstname' },
        { text: 'Last Name', dataIndex: 'lastname', flex: 1 },
        { text: 'Username', dataIndex: 'username', flex: 1 },
        { text: 'Email', dataIndex: 'email', width: 250 },
        { text: 'Contact', dataIndex: 'contact', flex: 1 },
        { text: 'Gender', dataIndex: 'gender', flex: 1 },
        { text: 'Role', dataIndex: 'role', flex: 1 },
        {
            xtype: 'actioncolumn',
            items: ['@edit', '@delete']
        }
    ],
    id: "testCheck",
    selModel: {
        injectCheckbox: 'first',
        checkOnly: true,
        model: 'SIMPLE',
        type: 'checkboxmodel'
    },
    buttons: [
        {
            text: 'Select All',
            handler: function () {
                Ext.getCmp('testCheck').getSelectionModel().selectAll();
            }
        }
    ],
    tbar: [{
        text: 'Add User',
        iconCls: 'x-fa fa-plus blue',
        // handler: 'onAddClick'
        listeners: {
            click: function () {
                var genderStore = Ext.create('Ext.data.Store', {
                    id : 'statesid',
                    fields: ['abbr', 'name'],
                    data : [
                       {"abbr":"HTML", "name":"HTML"},
                       {"abbr":"CSS", "name":"CSS"},
                       {"abbr":"JS", "name":"JavaScript"}
                    ]
                 });
                new Ext.form.Panel({
                    width: 500,
                    height: 500,
                    title: 'Add User',
                    floating: true,
                    closable: true,
                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'First Name',
                        name: 'firstname',
                    }, {
                        fieldLabel: 'Last Name',
                        name: 'lastname',
                    }, {
                        fieldLabel: 'Username',
                        name: 'username',
                    }, {
                        fieldLabel: 'Email',
                        name: 'email',
                    }, {
                        fieldLabel: 'Contact',
                        name: 'contact',
                    }, {
                        fieldLabel: 'Gender',
                        xtype: 'combobox',
                        store: genderStore,
                        valueField: 'name'
                    }, {
                        fieldLabel: 'Role',
                        name: 'role',
                    }, {
                        fieldLabel: 'Password',
                        name: 'password',
                    }],
                    buttons: [
                        {
                            text: 'Submit',
                            handler: function (btn) {
                                var data = this.up('form');
                                console.log(data.getForm().getValues());
                            }
                        }
                    ]
                }).show();
            }
        }
    }, {
        xtype: 'textfield',
        emptyText: 'Search...',
        width: 200
    }, {
        xtype: 'button',
        text: 'Search',
        iconCls: 'x-fa fa-search blue'
    }],
})
Ext.define('Admin.dashboard.view.Users', {
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
                new Ext.form.Panel({
                    width: 500,
                    height: 500,
                    title: 'Add User',
                    id: 'addUserModal',
                    floating: true,
                    closable: true,
                    controller: 'user',
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
                        inputType: 'email',
                        name: 'email',
                    }, {
                        fieldLabel: 'Contact',
                        name: 'contact',
                    }, {
                        xtype: 'combo',
                        fieldLabel: 'Gender',
                        name: 'gender',
                        valueField: 'gender',
                        queryMode: 'local',
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
                    }, {
                        xtype: 'combo',
                        fieldLabel: 'Role',
                        name: 'role',
                        valueField: 'role',
                        queryMode: 'local',
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
                        forceSelection: true
                    }, {
                        fieldLabel: 'Password',
                        inputType: 'password',
                        name: 'password',
                    }],
                    buttons: [
                        {
                            text: 'Add User',
                            handler: 'onAddBtnClick'
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
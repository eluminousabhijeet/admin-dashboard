Ext.define('Admin.dashboard.view.main.Users', {
    extend: 'Ext.grid.Panel',
    xtype: 'Users',
    title: 'Users',
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
        { text: 'First Name', dataIndex: 'firstname' },
        { text: 'Last Name', dataIndex: 'lastname', flex: 1 },
        { text: 'Username', dataIndex: 'username', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
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
        handler: 'onAddClick'
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
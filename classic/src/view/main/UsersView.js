Ext.define('Admin.dashboard.view.Users', {
    extend: 'Ext.grid.Panel',
    // requires: ['Sandbox.view.SearchTrigger'],
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
            tooltip: 'Edit',
            handler: 'onEditClick'
        }
    },
    columns: [
        new Ext.grid.RowNumberer(),
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
    // id: "testCheck",
    // selModel: {
    //     injectCheckbox: 'first',
    //     checkOnly: true,
    //     model: 'SIMPLE',
    //     type: 'checkboxmodel'
    // },
    // buttons: [
    //     {
    //         text: 'Select All',
    //         handler: function () {
    //             Ext.getCmp('testCheck').getSelectionModel().selectAll();
    //         }
    //     }
    // ],
    tbar: [{
        text: 'Add User',
        iconCls: 'x-fa fa-plus blue',
        // handler: 'onAddClick'
        listeners: {
            click: function () {
                Ext.getCmp('addUserModal').setTitle('Add User');
                Ext.getCmp('addUserModal').show();
            }
        }
    }, {
        xtype: 'textfield',
        emptyText: 'Search...',
        width: 200
    }, {
        xtype: 'button',
        text: 'Search',
        iconCls: 'x-fa fa-search blue',
        handler: function (filterId, value) {
            var store = this.up('grid').getStore();
            if (value) {
                store.removeFilter(filterId, false)
                var filter = { id: filterId, property: filterId, value: value };
                if (this.anyMatch) filter.anyMatch = this.anyMatch
                if (this.caseSensitive) filter.caseSensitive = this.caseSensitive
                if (this.exactMatch) filter.exactMatch = this.exactMatch
                if (this.operator) filter.operator = this.operator
                console.log(this.anyMatch, filter)
                store.addFilter(filter)
            } else {
                store.filters.removeAtKey(filterId)
                store.reload()
            }
        }
    }],
})
Ext.define('Admin.dashboard.view.Products', {
    extend: 'Ext.grid.Panel',
    // requires: ['Sandbox.view.SearchTrigger'],
    xtype: 'Products',
    title: 'Products',
    id: 'productGrid',
    controller: 'product',
    store: {
        type: 'products'
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
        { text: 'Name', dataIndex: 'name' },
        { text: 'Category', dataIndex: 'category', flex: 1 },
        { text: 'Price', dataIndex: 'price', flex: 1 },
        { text: 'Stock', dataIndex: 'stock', width: 250 },
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
        text: 'Add Product',
        iconCls: 'x-fa fa-plus blue',
        // handler: 'onAddClick'
        listeners: {
            click: function () {
                Ext.getCmp('addProductModal').setTitle('Add Product');
                Ext.getCmp('addProductModal').show();
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
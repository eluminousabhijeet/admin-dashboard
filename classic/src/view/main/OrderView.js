Ext.define('Admin.dashboard.view.Orders', {
    extend: 'Ext.grid.Panel',
    // requires: ['Sandbox.view.SearchTrigger'],
    xtype: 'Orders',
    title: 'Orders',
    id: 'orderGrid',
    controller: 'order',
    store: {
        type: 'orders'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    actions: {
        view: {
            handler: 'onViewClick',
            iconCls: 'x-fa fa-eye blue',
            tooltip: 'View'
        },
        delete: {
            handler: 'onDeleteClick',
            iconCls: 'x-fa fa-trash-o red',
            tooltip: 'Delete'
        },
        edit: {
            iconCls: 'x-fa fa-pencil-square green',
            tooltip: 'Edit',
            handler: 'onEditClick'
        }
    },
    columns: [
        new Ext.grid.RowNumberer(),
        { text: 'ID', dataIndex: '_id', hidden: true },
        {
            text: 'Product ID', dataIndex: 'productId', renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                return record.getData().productId._id;
            }, flex: 1, hidden: true
        },
        {
            text: 'Product Name', dataIndex: 'productName', renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                return record.getData().productId.name;
            }, flex: 1
        },
        { text: 'Quantity', dataIndex: 'quantity', flex: 1 },
        { text: 'Shipping Name', dataIndex: 'shippingName', flex: 1 },
        { text: 'Address', dataIndex: 'shippingAddress', flex: 1 },
        { text: 'Postcode', dataIndex: 'shippingPostcode', flex: 1 },
        { text: 'Country', dataIndex: 'shippingCountry', flex: 1 },
        { text: 'State', dataIndex: 'shippingState', flex: 1 },
        { text: 'City', dataIndex: 'shippingCity', flex: 1 },
        { text: 'Total Cost', dataIndex: 'totalCost', flex: 1 },
        { text: 'Date & Time', dataIndex: 'createdOn', flex: 1, renderer: Ext.util.Format.dateRenderer('d/m/Y, h:i:s A') },
        {
            xtype: 'actioncolumn',
            items: ['@view', '@edit', '@delete'],
            width: 100,
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
    // tbar: [{
    //     text: 'Add Product',
    //     iconCls: 'x-fa fa-plus blue',
    //     // handler: 'onAddClick'
    //     listeners: {
    //         click: function () {
    //             Ext.getCmp('addProductModal').setTitle('Add Product');
    //             Ext.getCmp('addProductModal').show();
    //         }
    //     }
    // }, {
    //     xtype: 'textfield',
    //     emptyText: 'Search...',
    //     width: 200
    // }, {
    //     xtype: 'button',
    //     text: 'Search',
    //     iconCls: 'x-fa fa-search blue',
    //     handler: function (filterId, value) {
    //         var store = this.up('grid').getStore();
    //         if (value) {
    //             store.removeFilter(filterId, false)
    //             var filter = { id: filterId, property: filterId, value: value };
    //             if (this.anyMatch) filter.anyMatch = this.anyMatch
    //             if (this.caseSensitive) filter.caseSensitive = this.caseSensitive
    //             if (this.exactMatch) filter.exactMatch = this.exactMatch
    //             if (this.operator) filter.operator = this.operator
    //             console.log(this.anyMatch, filter)
    //             store.addFilter(filter)
    //         } else {
    //             store.filters.removeAtKey(filterId)
    //             store.reload()
    //         }
    //     }
    // }],
})
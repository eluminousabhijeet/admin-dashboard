Ext.define('Admin.dashboard.store.Orders', {
    extend: 'Ext.data.Store',
    alias: 'store.orders',
    pageSize: 10,
    model: 'Admin.dashboard.model.Orders',
    itemId: 'orders',
    storeId: 'orders',
    proxy: {
        type: 'ajax',
        url: 'http://localhost:5000/admin/order-listing',
        reader: {
            type: 'json',
            rootProperty: 'orders.result',
            totalProperty: 'orders.total'
        }
    },
    autoLoad: true 
})
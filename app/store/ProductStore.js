Ext.define('Admin.dashboard.store.Products', {
    extend: 'Ext.data.Store',
    alias: 'store.products',
    pageSize: 10,
    model: 'Admin.dashboard.model.Products',
    itemId: 'products',
    storeId: 'products',
    proxy: {
        type: 'ajax',
        url: 'http://localhost:5000/admin/product-listing',
        reader: {
            type: 'json',
            rootProperty: 'products.result',
            totalProperty: 'products.total'
        }
    },
    autoLoad: true 
})
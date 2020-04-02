var token = localStorage.getItem('x_access_token');
Ext.define('Admin.dashboard.store.Categories', {
    extend: 'Ext.data.Store',
    alias: 'store.categories',
    pageSize: 10,
    model: 'Admin.dashboard.model.Categories',
    itemId: 'categories',
    storeId: 'categories',
    proxy: {
        type: 'ajax',
        method: 'GET',
        url: 'http://localhost:5000/admin/product-category',
        headers: {
            'Authorization': token
        },
        reader: {
            type: 'json',
            rootProperty: 'categories',
        }
    },
    autoLoad: true
})
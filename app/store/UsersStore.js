Ext.define('Admin.dashboard.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',
    pageSize: 10,
    model: 'Admin.dashboard.model.Users',
    itemId: 'users',
    storeId: 'users',
    proxy: {
        type: 'ajax',
        url: 'http://localhost:5000/admin/user-listing',
        reader: {
            type: 'json',
            rootProperty: 'users.result',
            totalProperty: 'users.total'
        }
    },
    autoLoad: true 
})
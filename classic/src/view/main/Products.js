Ext.define('Admin.dashboard.view.main.Products', {
    extend: 'Ext.grid.Panel',
    xtype: 'Products',
    title: 'Products',
    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],
})
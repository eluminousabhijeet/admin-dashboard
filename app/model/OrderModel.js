Ext.define('Admin.dashboard.model.Orders', {
    extend: 'Ext.data.Model',
    alias: 'model.Orders',
    fields: [
        { id: '_id' },
        { shippingName: 'shippingName' },
        { shippingAddress: 'shippingAddress' },
        { shippingPostcode: 'shippingPostcode' },
        { shippingCountry: 'shippingCountry' },
        { shippingState: 'shippingState' },
        { shippingCity: 'shippingCity' }
    ]
})
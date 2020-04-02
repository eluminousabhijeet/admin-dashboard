Ext.define('Admin.dashboard.model.Products', {
    extend: 'Ext.data.Model',
    alias: 'model.Products',
    fields: [
        { id: '_id' },
        { name: 'name' },
        { slug: 'slug' },
        { description: 'description' },
        { price: 'price' },
        { stock: 'stock' },
        { image: 'image' },
        { category: 'category' }
    ]
})
Ext.define('Admin.dashboard.model.Products', {
    extend: 'Ext.data.Model',
    alias: 'model.Products',
    fields: [
        { firstname: 'firstname', type: 'int' },
        { lastname: 'lastname' },
        { username: 'username' },
        { email: 'email' },
        { contact: 'contact' },
        { gender: 'gender' },
        { role: 'role' },
    ]
})
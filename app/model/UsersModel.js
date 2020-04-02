Ext.define('Admin.dashboard.model.Users', {
    extend: 'Ext.data.Model',
    alias: 'model.Users',
    fields: [
        { id: '_id' },
        { firstname: 'firstname' },
        { lastname: 'lastname' },
        { username: 'username' },
        { email: 'email' },
        { contact: 'contact' },
        { gender: 'gender' },
        { role: 'role' },
    ]
})
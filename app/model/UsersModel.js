Ext.define('Admin.dashboard.model.Users', {
    extend: 'Ext.data.Model',
    alias: 'model.Users',
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
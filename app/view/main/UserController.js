Ext.define('Admin.dashboard.view.main.UserController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.user',
    onDeleteClick: function() {
        Ext.MessageBox.confirm('Confirm', 'Are you sure to delete?', callbackFunction);
        function callbackFunction(btn) {
            if(btn == 'yes') {
                Ext.Ajax.request({
                    url: 'http://localhost:5000/admin/delete-user',
                    method: 'POST',          
                    params: {
                        rolename: rolename
                    },
                    success: received,                                    
                    failure: function(){console.log('failure');}
                });
            } else {
                console.log('canceled');
            //    Ext.Msg.alert ('Button Click', 'You clicked the No button');
            }
         };
    },
})
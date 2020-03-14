Ext.define('Admin.dashboard.view.main.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user',
    onDeleteClick: function (grid, rowIndex, colIndex) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this user!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    var rec = grid.getStore().getAt(rowIndex);
                    const recordId = rec.get('_id');
                    console.log(recordId);
                    Ext.Ajax.request({
                        url: 'http://localhost:5000/admin/delete-user/' + recordId,
                        method: 'PATCH',
                        success: function () {
                            swal({
                                title: "Success",
                                text: "User deleted successfully..",
                                icon: "success",
                            });
                            grid.getStore().reload();
                        },
                        failure: function () { console.log('failure'); }
                    });
                    swal("Success! User has been deleted..", {
                        icon: "success",
                    });
                } else {
                    console.log('Canceled');
                }
            });
    },
})
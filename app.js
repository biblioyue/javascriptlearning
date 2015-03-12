Ext.Loader.setPath('Homework/Mar08', 'app');

Ext.require(['Ext.container.Viewport', 
             'Homework.Mar08.layout1']);

Ext.onReady(function() {
    Ext.create('Ext.container.Viewport', {
        layout: 'fit',
        items: [{
            xtype: 'layout1'
        }]
    });
});
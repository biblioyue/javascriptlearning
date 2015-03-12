Ext.define('Homework.Mar08.layout1', {
    extend : 'Ext.form.Panel',
    requires: [ 'Ext.form.FieldContainer',
               'Ext.tab.Panel',
               'Ext.layout.container.Border',
               'Ext.layout.container.Column',
               'Ext.form.FieldSet'],
    alias : 'widget.layout1',

        layout: {
            type: 'border'
        },
        items: [
        {
            region: 'north',
            margins: '0 0 5 0',
            title:'Legal Entity Account',
            height: 100,
            split: true, 
            collapsible: true, 
            html:'Legal Entity Account information'
        }, {
            region: 'west',
            title: 'LEIA Information',
            width: 150,
            split: true, 
            collapsible: true, 
             
        }, {
            region: 'center',
            items:{  
               xtype: 'tabpanel',
               activeTab: 0,      
               items: [{
                 title: 'Panel 1',
                   items:{
                       columnWidth: 0.5,
                       layout: {
                       type: 'column',
                             },
                       autoHeight:true,
                       frame:true,
                       border: 5,
                       items:[{
                           width: 550,
                           bodyStyle: 'padding:5px 5px 0',
                           defaults: {
                             labelWidth: 40,
                             anchor: '50%',
                       
                           },
                           items:[{
                                xtype:'fieldset',
                                title:'fieldset left 1',  
                                items:[{
                                   xtype: 'displayfield',
                                   name: 'displayfield1',
                                   fieldLabel: 'Legal Entity',
                                },{
                                   xtype: 'textfield',
                                   name : 'textfield',
                                   fieldLabel:'Name',        

                                }
                               ]
                           },{
                                xtype:'fieldset',
                                title:'fieldset left 2',
                           },{
                                xtype:'fieldset',
                                title:'fieldset left 3',
                           },{
                                xtype:'fieldset',
                                title:'fieldset left 4',
                           }
                            ]
                    
                           },{
                              width: 550,
                              bodyStyle: 'padding:5px 5px 0',   
                              items:[{
                               xtype:'fieldset',
                                title:'fieldset right 1',
                              },{
                                xtype:'fieldset',
                                title:'fieldset right 2',
                              },   {
                                xtype:'fieldset',
                                title:'fieldset right 3',
                              }, {
                                xtype:'fieldset',
                                title:'fieldset right 4',
                              }

                             ]
                            }]
                      }
                  },{
                 title: 'Panel 2',
               },
             ]
          }
           },
        ]  
    });
            
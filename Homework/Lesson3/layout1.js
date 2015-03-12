Ext.define('Homework.Mar08.layout1', {
    extend : 'Ext.form.Panel',
    requires: [ 'Ext.form.FieldContainer',
              // 'Ext.tab.Panel',
            //   'Ext.layout.container.Border',
               'Ext.layout.container.Column',
               'Ext.form.FieldSet',
               'Ext.data.ArrayStore',
               'Ext.grid.Panel',
               'Ext.data.ArrayStore',
               'Ext.grid.RowNumberer',
               'Ext.form.field.Number',
               'Ext.form.field.Date',
               'Ext.form.field.Time'],
     alias : 'widget.layout1',

        layout: {
            type: 'border'
        },
        items: [        
        {
            region: 'north',
            margins: '0 0 5 0',
            title:'Legal Entity Account',
            height: 150,
            split: true, 
            collapsible: true, 
            xtype: 'grid',
            columnLines: true,
            viewConfig: {
              stripeRows: true
            },
            columns: [{
                        xtype: 'rownumberer'
                    },{
                        text: 'Account ID',
                        dataIndex: 'accountId'
                    },{  
                        text     : 'Account Name',  
                        width    : 150,
                        dataIndex: 'name'
                    },{  
                        text     : 'Status',  
                        width    : 100,
                        dataIndex: 'status'
                    }  
                   ],
                //minHeight: 300,
                store: {
                    fields: ['accountId','name','status'],
                    data: [
                        {accountId:'100',name: 'Name 1',status:'Active'},
                        {accountId:'200',name: 'Name 2',status:'Active'},
                        {accountId:'300',name: 'Name 3',status:'Active'},
                        {accountId:'400',name: 'Name 4',status:'Active'},
                        {accountId:'500',name: 'Name 5',status:'Active'}
                    ]
                }
            
        }, {
            region: 'west',
            title: 'LEIA Information',
            width: 200,
            split: true, 
            collapsible: true, 
        }, {
            region: 'center',
            items:{  
               xtype: 'tabpanel',
               activeTab: 0,
        
               items: [{
                 title: 'Investor Details',
                 items:{
                   columnWidth: 0.5,
                   layout: {
                     type: 'column',
                         },
                   autoHeight:true,
                   frame:true,
                   border: 5,
                   items:[{   
                         width: 500,
                         bodyStyle: 'padding:5px 5px 0',
                         defaults: {
                           labelWidth: 40,
                           anchor: '50%'
                         },
                        items:[{                                
                            xtype:'fieldset',
                            title:'fieldset left 1',  
                            items:[{
                               xtype: 'displayfield',
                               name: 'displayfield1',
                               fieldLabel: 'ID',
                              },{
                               xtype: 'textfield',
                               name : 'textfield',
                               fieldLabel:'Name',        
                              }
                             ]             
                           },{
                               xtype:'fieldset',
                               title:'fieldset left 2',
                               items:[{
                               xtype: 'displayfield',
                               name: 'displayfield1',
                               fieldLabel: 'ID',
                              },{
                               xtype: 'displayfield',
                               name : 'displayfield2',
                               fieldLabel:'Status',        
                              },{
                               xtype: 'displayfield',
                               name : 'displayfield3',
                               fieldLabel:'Type',
                              }
                             ] 
                           },{
                               xtype:'fieldset',
                               title:'fieldset left 3',
                               items:[{
                               xtype: 'displayfield',
                               name: 'displayfield4',
                               fieldLabel: 'ID',
                              },{
                                xtype: 'numberfield',
                                name: 'numberfield1',
                                fieldLabel: 'Number field',
                                value: 5,
                                minValue: 0,
                                maxValue: 50       
                              }
                             ] 
                           },{
                               xtype:'fieldset',
                               title:'fieldset left 4',
                               items:[{
                                    xtype: 'datefield',
                                    name: 'date1',
                                    fieldLabel: 'Date Field'
                               },{
                                    xtype: 'timefield',
                                    name: 'time1',
                                    fieldLabel: 'Time Field',
                                    minValue: '1:30 AM',
                                    maxValue: '9:15 PM' 
                               },{                     
                                    bbar: [{
                                        xtype: 'button',
                                        text: 'Home',
                                    }, {
                                        text: 'Analysis'
                                    }, {
                                        text: 'Testing'
                                    }, {
                                        text: 'Help'
                                    }]
                               }
                           ]         
                           }
                          ]
                       },{  
                          width: 500,
                          bodyStyle: 'padding:5px 5px 0',   
                          items:[{
                            xtype:'fieldset',
                            title:'fieldset right 1',
                            items:[{
                      
                                xtype:'combo',
                                fieldLabel: 'Level',
                                height: 20,
                                width: 400,
                                name:'locale',
                                queryMode: 'local',
                                displayField: 'name',
                                valueField: 'abbr',
                                triggerAction: 'all',
                                selectOnFocus: true,
                                shadow: 'drop',

                                store: {
                                    fields: ['name'],
                                    data : [
                                        { name:'Level 1'},
                                        { name:'Level 2'},
                                        { name:'Level 3'}
                                       ]
                                    } 
                                },
                           ]  
                          },{
                            xtype:'fieldset',
                            title:'fieldset right 2',
                            height:140,
                          },   {
                            xtype:'fieldset',
                            title:'fieldset right 3',
                            height:150,
                          }, {
                            xtype:'fieldset',
                            title:'fieldset right 4',
                            items:[{
                                 xtype: 'button',
                                 text: 'Edit'
                            },{
                                 xtype: 'button',
                                 html: 'Save'
                            }]  
                          }

                         ]
                        }]                    
                  }
                  },{
                   title: 'Panel 2',
                 },{
                   title: 'Panel 3',  
                 },{
                   title: 'Panel 4',  
                 }
             ]
          }
           },
        ]  
     });     
    
 
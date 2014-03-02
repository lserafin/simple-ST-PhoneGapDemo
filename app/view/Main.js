Ext.define('CocoaHeads.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'CocoaHeads Demo App'
                },

                html: [
                    "Hello CocoaHeads Brisbane Meetup!"
                ].join("")
            },
            {
                title: 'Feedback',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Feedback'
                    },
                    {
                    xtype: 'fieldset',
                    items: [
                        {
                            xtype: 'textfield',
                            name : 'name',
                            label: 'Name'
                        },
                        {
                            xtype: 'emailfield',
                            name : 'email',
                            label: 'Email'
                        },
                        {
                            xtype: 'sliderfield',
                            label: 'Rating',
                            value: 50,
                            minValue: 0,
                            maxValue: 100
                        },
                        {
                            xtype: 'button',
                            text: 'Submit'
                        }
                    ]
                    }
                ]
            }
        ]
    }
});

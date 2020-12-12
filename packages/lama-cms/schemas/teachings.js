export default {
    name: 'teachings',
    title: 'Teachings',
    type: 'document',
    fieldsets: [
        {
            name: 'transcription',
            title: 'Transcription',
            options: {
                collapsible: true,
                collapsed: false,
            },
        },
        {
            name: 'recordings',
            title: 'Recordings',
            options: {
                collapsible: true,
                collapsed: false,
            },
        }
        ],
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'lama',
            title: 'Lama',
            type: 'reference',
            to: [{type: 'lama'}]
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
        {
            name: 'archiveNumber',
            title: 'Archive Number',
            type: 'string',
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
        },
        {
            title: 'Virtual',
            name: 'virtual',
            type: 'boolean'
        },
        {
            name: 'city',
            title: 'City',
            type: 'string',
        },
        {
            name: 'state',
            title: 'State',
            type: 'string',
        },
        {
            name: 'country',
            title: 'Country',
            type: 'string',
        },
        {
            name: 'notes',
            title: 'Notes',
            type: 'blockContent',
        },
        {
            name: 'audioUrl',
            title: 'Audio URL',
            type: 'url',
            fieldset: 'recordings',
        },
        {
            name: 'videoUrl',
            title: 'Video URL',
            type: 'url',
            fieldset: 'recordings',
        },
        {
            name: 'transcriptionStatus',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    {title: 'Not Started', value: 'notStarted'},
                    {title: 'In Progress', value: 'inProgress'},
                    {title: 'Complete', value: 'complete'},
                ],
            },
            layout: 'dropdown',
            fieldset: 'transcription',
        },
        {
            name: 'transcriber',
            title: 'Transcriber',
            type: 'reference',
            to: [{type: 'transcriber'}],
            fieldset: 'transcription',
        },
        {
            name: 'transcriptUrl',
            title: 'Transcript URL',
            type: 'url',
            fieldset: 'transcription',
        },
        {
            name: 'transcriptFile',
            title: 'Transcript',
            type: 'file',
            fieldset: 'transcription',
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
}

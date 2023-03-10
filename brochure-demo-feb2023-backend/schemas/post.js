export default {
    name: 'post',
    type: 'document',
    title: 'Blog Post',
    fields: [
        {
            name: 'postedAt',
            type: 'geopoint',
            title: 'Location',
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96,
            }
        },
        {
            name: 'mainImage',
            type: 'image',
            title: 'Main Image',
            options: {
                hotspot: true,
            }
        }
    ]
}
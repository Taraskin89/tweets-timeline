// models/Message.js

module.exports = {
  create: (config, params, callback) => {
    const object = {
      title: params.author + ': ' + params.message,
      type_slug: config.bucket.type_slug,
      metafields: [
        {
          title: 'Message',
          key: 'message',
          value: params.message,
          type: 'textarea',
          edit: 1
        },
        {
          title: 'Author',
          key: 'author',
          value: params.author,
          type: 'text',
          edit: 1
        }
      ],
      options: {
        slug_field: 0,
        content_editor: 0,
        add_metafields: 0,
        metafields_title: 0,
        metafields_key: 0
      }
    }
  }
}
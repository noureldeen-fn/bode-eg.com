export default {
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Start Price (EGP)',
      type: 'number',
    },
    // 1. دي صورة الغلاف الرئيسية (واحدة بس)
    {
      name: 'mainImage',
      title: 'Main Image (Cover)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    // 2. دي الإضافة الجديدة: ألبوم صور للمشروع
    {
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid'
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    }
  ],
}
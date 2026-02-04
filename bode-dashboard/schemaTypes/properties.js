export default {
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    // 1. عنوان المشروع
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },
    // 2. الموقع (مثال: New Cairo, Egypt)
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    // 3. السعر (رقم فقط)
    {
      name: 'price',
      title: 'Start Price (EGP)',
      type: 'number',
    },
// 4. البادج (النص)
    {
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'اكتب الكلمة اللي هتظهر (مثال: New Launch, Sold Out). سيبها فاضية لو مش عايز بادج.',
    },
    // لون البادج (اختيار من ألوان البراند)
    {
      name: 'badgeColor',
      title: 'Badge Color',
      type: 'string',
      options: {
        list: [
          { title: 'Crimson (Dark Red)', value: '#8A321D' },     // لون ديفولت
          { title: 'Midnight (Dark Blue)', value: '#182E44' },   // لون الكحلي
          { title: 'Sunlit (Yellow)', value: '#F0C689' },        // لون الأصفر
          { title: 'Ivory (Off-White)', value: '#FBF6E9' }       // لون الأوف وايت
        ],
        layout: 'radio' // شكل زراير مدورة
      },
      initialValue: '#8A321D' // الديفولت أحمر
    },
    // 5. لوجو المطور (الصورة الصغيرة المدورة)
    {
      name: 'developerLogo',
      title: 'Developer Logo',
      type: 'image',
      options: { hotspot: true },
    },
    // 6. مواصفات الوحدة (غرف - حمام - مساحة)
    {
      name: 'beds',
      title: 'Number of Beds',
      type: 'number',
    },
    {
      name: 'baths',
      title: 'Number of Baths',
      type: 'number',
    },
    {
      name: 'area',
      title: 'Area (m²)',
      type: 'number',
    },
    // 7. تفاصيل خطة الدفع
    {
      name: 'paymentPlan',
      title: 'Payment Plan Text',
      type: 'string',
      description: 'مثال: 18,500 Monthly / 8 Years',
    },
    // 8. صورة الغلاف الرئيسية
    {
      name: 'mainImage',
      title: 'Main Image (Cover)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    // 9. ألبوم الصور (السلايدر)
    {
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid'
      }
    },
  ],
}
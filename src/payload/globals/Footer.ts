import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'copyright',
      label: 'Copyright',
      type: 'text',
      required: true,
    },
    {
      name: 'companyVat',
      label: 'Company VAT',
      type: 'text',
      required: true,
    },
    {
      name: 'companyInfo',
      label: 'Company Info',
      type: 'group',
      fields: [
        {
          name: 'companyName',
          label: 'Company Name',
          type: 'text',
          required: true,
        },
        {
          name: 'companyAddress',
          label: 'Company Address',
          type: 'text',
          required: true,
        },
        {
          name: 'companyCity',
          label: 'Company City',
          type: 'text',
          required: true,
        },
        {
          name: 'companyCountry',
          label: 'Company Country',
          type: 'text',
          required: true,
        },
        {
          name: 'companyEmail',
          label: 'Company Email',
          type: 'text',
          required: true,
        },
        {
          name: 'companyPhone',
          label: 'Company Phone',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'navItems',
      type: 'array',
      maxRows: 6,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
}

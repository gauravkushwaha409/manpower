import {
  IoCallOutline,
  IoLocationOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import { LuSettings2 } from 'react-icons/lu';
import { TbSeo } from 'react-icons/tb';
import { ScrollText, ShoppingCart } from 'lucide-react';

export const mainMenuItems = [
  {
    id: 'settings',
    icon: IoSettingsOutline,
    label: 'Settings',
    active: false,
    children: [
      {
        id: 'locations',
        label: 'Locations',
        icon: IoLocationOutline,
        // link: PATH.settings.locations.list,
      },
      {
        id: 'contact-us',
        label: 'Contact Us',
        icon: IoCallOutline,
        // link: PATH.settings.contactUs.list,
      },
      {
        id: 'policy',
        label: 'Policy',
        icon: ScrollText,
        // link: PATH.settings.policy.list,
      },
      {
        id: 'organization-settings',
        label: 'Organization Settings',
        icon: LuSettings2,
        // link: PATH.settings.organizationSettings.list,
      },
      {
        id: 'static-seo',
        label: 'Static SEO',
        icon: TbSeo,
        // link: PATH.settings.seo.list,
      },
    ],
  },
];

export const deliveryAgentMenuItems = [
  {
    id: 'order-management',
    icon: ShoppingCart,
    label: 'Order Management',
    active: false,
    // link: PATH.orderManagement.order.list,
  },
];

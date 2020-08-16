import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'dashboard',
        title: 'รถยนต์',
        type: 'collapse',
       // icon: 'feather icon-home',
        children: [
          {
            id: 'analytics',
            title: 'ซื้อประกันรถยนต์',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          },
          {
            id: 'sale',
            title: 'ชั้น 1',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          },
          {
            id: 'sale',
            title: 'ชั้น 2/2+',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          },
          {
            id: 'sale',
            title: 'ชั้น 3/3+',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          },
          {
            id: 'sale',
            title: 'พ.ร.บ.รถยนต์',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }
          ,
          {
            id: 'sale',
            title: 'ความคุ้มครองพิเศษเพิ่มเติม',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }
          ,
          {
            id: 'sale',
            title: 'เคล็ดลับประกันรถยนต์',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }
          ,
          {
            id: 'sale',
            title: 'เคลม',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }
          ,
          {
            id: 'sale',
            title: 'บริการรถใช้ระหว่างซ่อม',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }
          ,
          {
            id: 'sale',
            title: 'อู่ซ่อมรถ',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }
          ,
          {
            id: 'sale',
            title: 'ข้อกำหนดและเงื่อนไข',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }
          ,
          {
            id: 'sale',
            title: 'คำถามพบบ่อย',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'page-layouts',
        title: 'จักรยานยนต์',
        type: 'collapse',
       // icon: 'feather icon-layout',
        children: [
        
              {
                id: 'analytics',
                title: 'ซื้อประกันจักรยานยนต์',
                type: 'item',
                url: '/dashboard/analytics',
                breadcrumbs: false
              },
            
              {
                id: 'sale',
                title: 'ชั้น 2/2+',
                type: 'item',
                url: '/car',
                breadcrumbs: false
              },
              {
                id: 'sale',
                title: 'ชั้น 3/3+',
                type: 'item',
                url: '/car',
                breadcrumbs: false
              },
              {
                id: 'sale',
                title: 'พ.ร.บ.จักรยานยนต์',
                type: 'item',
                url: '/car',
                breadcrumbs: false
              }
              ,
   
              {
                id: 'sale',
                title: 'เคล็ดลับประกันจักรยานยนต์',
                type: 'item',
                url: '/car',
                breadcrumbs: false
              }
              ,
              {
                id: 'sale',
                title: 'เคลม',
                type: 'item',
                url: '/car',
                breadcrumbs: false
              }

              ,
              {
                id: 'sale',
                title: 'อู่ซ่อมรถ',
                type: 'item',
                url: '/car',
                breadcrumbs: false
              }
              ,
              {
                id: 'sale',
                title: 'ข้อกำหนดและเงื่อนไข',
                type: 'item',
                url: '/car',
                breadcrumbs: false
              }
              ,
              {
                id: 'sale',
                title: 'คำถามพบบ่อย',
                type: 'item',
                url: '/car',
                breadcrumbs: false
              }
            ]
      },
      {
        id: 'widget',
        title: 'เดินทาง',
        type: 'collapse',
       // icon: 'feather icon-layers',
        badge: {
          title: '100+',
          type: 'badge-success'
        },
        children: [
          {
            id: 'statistic',
            title: 'ซื้อประกันเดินทาง',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          {
            id: 'statistic',
            title: 'ความคุ้มครองวีซ่า',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          {
            id: 'statistic',
            title: 'ความคุ้มครองค่ารักษาพยาบาล',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          {
            id: 'statistic',
            title: 'ความคุ้มครองสัมภาระ',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          {
            id: 'statistic',
            title: 'ความคุ้มครองการยกเลิกการเดินทาง',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          {
            id: 'statistic',
            title: 'โปรโมชั่นประกันการเดินทาง',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          {
            id: 'statistic',
            title: 'จุดหมายการเดินทาง',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          {
            id: 'statistic',
            title: 'เคลม',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          {
            id: 'statistic',
            title: 'เคล็ดลับประกันการเดินทาง',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          {
            id: 'statistic',
            title: 'ข้อกำหนดและเงื่อนไข',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          {
            id: 'statistic',
            title: 'คำถามที่พบบ่อย',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          //  {
          //   id: 'statistic',
          //   title: 'Statistic',
          //   type: 'item',
          //   url: '/car'
          // },
          // {
          //   id: 'data',
          //   title: 'Data',
          //   type: 'item',
          //   url: '/widget/data'
          // },
          // {
          //   id: 'chart',
          //   title: 'Chart',
          //   type: 'item',
          //   url: '/widget/chart'
          // }
        ]
      },
      {
        id: 'users',
        title: 'อุบัติเหตุ',
        type: 'collapse',
       // icon: 'feather icon-users',
        children: [
          {
            id: 'cards',
            title: 'ซื้อประกันอุบัติเหตุ',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          },
          {
            id: 'cards',
            title: 'โปรโมชั่นประกันอุบัติเหตุ',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          {
            id: 'cards',
            title: 'เคล็ดลับประกันอุบัติเหตุ',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          },
          {
            id: 'statistic',
            title: 'เคลม',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
         
          {
            id: 'statistic',
            title: 'ข้อกำหนดและเงื่อนไข',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          {
            id: 'statistic',
            title: 'คำถามที่พบบ่อย',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          // {
          //   id: 'profile',
          //   title: 'Profile',
          //   type: 'item',
          //   url: '/users/profile',
          //   breadcrumbs: false
          // },
          // {
          //   id: 'cards',
          //   title: 'User Card',
          //   type: 'item',
          //   url: '/car'
          // },
          // {
          //   id: 'list',
          //   title: 'User List',
          //   type: 'item',
          //   url: '/users/list'
          // }
        ]
      }
      ,{
        id: 'users',
        title: 'ที่อยู่อาศัย',
        type: 'collapse',
       // icon: 'feather icon-users',
        children: [
          {
            id: 'cards',
            title: 'ซิ้อประกันบ้านและทรัพย์สิน',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          },
          {
            id: 'cards',
            title: 'เคล็ดลับประกันบ้านและที่อยู่อาศัย',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
        
          {
            id: 'statistic',
            title: 'เคลม',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
         
          {
            id: 'statistic',
            title: 'ข้อกำหนดและเงื่อนไข',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          {
            id: 'statistic',
            title: 'คำถามที่พบบ่อย',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          },
        ]
      }
      ,{
        id: 'users',
        title: 'ประกันกลุ่ม',
        type: 'collapse',
       // icon: 'feather icon-users',
        children: [
          {
            id: 'cards',
            title: 'ขอใบเสนอราคา',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          },
          {
            id: 'statistic',
            title: 'ข้อกำหนดและเงื่อนไข',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          {
            id: 'statistic',
            title: 'คำถามที่พบบ่อย',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
        
          {
            id: 'statistic',
            title: 'เคล็ดลับประกันกลุ่ม',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }
        ]
      }
      ,{
        id: 'users',
        title: 'ประกันกลุ่ม',
        type: 'collapse',
        //icon: 'feather icon-users',
        children: [
          {
            id: 'cards',
            title: 'ขอใบเสนอราคา',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          },
          {
            id: 'statistic',
            title: 'ข้อกำหนดและเงื่อนไข',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          {
            id: 'statistic',
            title: 'คำถามที่พบบ่อย',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
        
          {
            id: 'statistic',
            title: 'เคล็ดลับประกันกลุ่ม',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }
        ]
      }
      ,{
        id: 'users',
        title: 'ประกันสุขภาพ',
        type: 'collapse',
        //icon: 'feather icon-users',
        children: [
          {
            id: 'cards',
            title: 'ซื้อประกันสุขภาพ',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          },
          {
            id: 'statistic',
            title: 'เคล็ดลับประกันสุขภาพ',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          },
          {
            id: 'statistic',
            title: 'ข้อกำหนดและเงื่อนไข',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          {
            id: 'statistic',
            title: 'คำถามที่พบบ่อย',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }
        ]
      } ,{
        id: 'users',
        title: 'เกี่ยวกับเรา',
        type: 'collapse',
       // icon: 'feather icon-users',
        children: [
          {
            id: 'cards',
            title: 'หน้าหลัก',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          },
          {
            id: 'statistic',
            title: 'ทำไม ???',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          },
          {
            id: 'statistic',
            title: 'เกี่ยวกับ',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          {
            id: 'statistic',
            title: 'นโยบายความเป็นส่วนตัว',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }
          , 
          {
            id: 'statistic',
            title: 'บล๊อค',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          {
            id: 'statistic',
            title: 'วิธีชำระเงินประกันรถยนต์',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          {
            id: 'statistic',
            title: 'วิธีการชำระเงินประกันออนไลน์',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          {
            id: 'statistic',
            title: 'โปรโมชั่นแนะนำเพื่อน',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          {
            id: 'statistic',
            title: 'สิทธิพิเศษ Penguin Privilege',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }, 
          {
            id: 'statistic',
            title: 'ร่วมงานกับเรา',
            type: 'item',
            url: '/car',
            breadcrumbs: false
          }
        ]
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}

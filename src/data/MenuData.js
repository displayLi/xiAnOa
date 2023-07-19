const MenuData= [
    {
      path: '/',
      name: 'home',
      label: '首页',
      icon: 's-home',
      url: 'Home/Home'
    },
    {
      label: '业务支持系统',
      icon: 'location',
      children: [
        {
          path: '/page1',
          name: 'page1',
          label: '客户数据',
          icon: 'setting',
          url: 'Other/PageOne'
        },
        {
          path: '/page2',
          name: 'page2',
          label: '业务统计',
          icon: 'setting',
          url: 'Other/PageTwo'
        }
      ]
    }
]

export default MenuData
const sidebar = {
    '/': [
      {
        text: 'Guide',
        children: [
          { text: '快速开始', link: '/' }, 
          { text: '通用', link: '/components/button/' }, 
        ]
      },
      {
        text: 'Components',
        children: [
          { text: '组件', link: '/components/' },
          { text: '按钮', link: '/components/button/' }, 
        ]
      }
    ]
  }
  const config = {
    themeConfig: {
      sidebar,
    }
  }
  export default config
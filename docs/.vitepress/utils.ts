/**
 * @param {string} pathname pathname 值
 * @returns {SidebarItem[]} 侧边栏数组
 */
export const getSideBarList = (pathname: string) => {
  console.log('pathname', pathname)
  if (['/basic'].includes(pathname)) {
    return [
      {
        text: 'HTML',
        // collapsed: false,
        items: [
          { text: '基础篇', link: '/basic/html/index' },
          { text: '基础篇1', link: '/basic/html/basic1' },
          { text: '基础篇2', link: '/basic/html/basic2' }
        ]
      },
      {
        text: 'CSS',
        // collapsed: true,
        items: [
          { text: 'API篇', link: '/api/index' },
          { text: 'API篇1', link: '/api/api1' },
          { text: 'API篇2', link: '/api/api2' }
        ]
      },
      {
        text: 'JS',
        // collapsed: false,
        items: [
          { text: '核心篇', link: '/core/index' },
          { text: '核心篇1', link: '/core/core1' },
          { text: '核心篇2', link: '/core/core2' }
        ]
      }
    ]
  }

  else if (['/interview'].includes(pathname)) {
    return [
      {
        text: '前端基础',
        items: [
          { text: '计算机基础', link: 'interview/html/basic1' },
          { text: 'HTML-CSS', link: 'interview/html/basic2' },
          { text: 'SCSS', link: 'interview/html/basic3' },
          { text: 'JS', link: 'interview/html/basic3' },
          { text: 'TS', link: 'interview/html/basic4' },
          { text: 'HTTP网络', link: 'interview/html/basic5' },
          { text: '浏览器原理', link: 'interview/html/basic6' },
        ]
      },
      {
        text: '前端框架',
        items: [
          { text: 'VUE应用', link: 'interview/html/basic1' },
          { text: 'VUE原理', link: 'interview/html/basic1' },
          { text: 'REACT应用', link: 'interview/html/basic2' },
          { text: 'REACT原理', link: 'interview/html/basic2' },
          { text: 'Uniapp应用', link: 'interview/html/basic2' },
          { text: 'Uniapp原理', link: 'interview/html/basic2' },
        ]
      },
      {
        text: '前端工程化',
        items: [
          { text: 'vite/webpack', link: 'interview/html/basic1' },
          { text: '搭建插件', link: 'interview/html/basic2' },
        ]
      }
    ]
  }

  else if (['/vue'].includes(pathname)) {
    return [
      {
        text: '入门',
        items: [
          { text: 'Vue基本介绍', link: '/vue/basic/introduce' },
          { text: 'Vue开发环境搭建', link: '/vue/basic/introduce' },
          { text: '教学篇1', link: '/teach/teach1' },
          { text: '教学篇2', link: '/teach/teach2' }
        ]
      },
      {
        text: '原理底层',
        items: [
          { text: '总结篇', link: '/summarize/index' },
          { text: '总结篇1', link: '/summarize/summarize1' },
          { text: '总结篇2', link: '/summarize/summarize2' }
        ]
      },
      {
        text: '应用基础',
        items: [
          { text: '团队篇', link: '/team/index' },
          { text: '团队篇1', link: '/team/team1' },
          { text: '团队篇2', link: '/team/team2' }
        ]
      },
      {
        text: '组件',
        items: [
          { text: '团队篇', link: '/team/index' },
          { text: '团队篇1', link: '/team/team1' },
          { text: '团队篇2', link: '/team/team2' }
        ]
      }
    ]
  }
}
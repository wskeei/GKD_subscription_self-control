import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: 'Alipay',
  groups: [
    {
      key: 1,
      name: '禁止查看理财',
      desc: '检测到理财界面时自动返回',
      enable: true,
      rules: [
        {
          key: 0,
          activityIds: ['com.eg.android.AlipayGphone.AlipayLogin'],
          matches: [
            // 匹配理财页面的标题栏 ID
            '[id="com.alipay.android.widget.fortunehome:id/fortune_title_bar"]',
          ],
          action: 'back',
          snapshotUrls: [],
        },
      ],
    },
    {
      key: 2,
      name: '禁止查看指数',
      desc: '检测到指数页面时自动返回桌面',
      enable: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
          matches: [
            // 匹配指数页面的特有元素 (背景图文本)
            '[text="指数+背景图"]',
          ],
          action: 'back', // 使用返回 (回退到理财页后，理财页规则会继续触发返回，从而达到回桌面的效果)
          snapshotUrls: [],
        },
      ],
    },
    {
      key: 3,
      name: '禁止搜索指定关键词',
      desc: '在全局搜索页识别到指数/行情卡片时自动返回',
      enable: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.alipay.android.phone.businesscommon.globalsearch.ui.MainSearchActivity',
          ],
          matches: [
            '[id="com.alipay.android.phone.businesscommon.globalsearch:id/item_fly_bird_content"]',
            '[text="价格"]',
            '[text="涨跌额"]',
            '[text="涨跌幅"]',
            '[text$=".USI" || text$=".HK" || text$=".SH" || text$=".SZ"]',
          ],
          action: 'back',
          snapshotUrls: [],
        },
        {
          key: 1,
          activityIds: [
            'com.alipay.android.phone.businesscommon.globalsearch.ui.MainSearchActivity',
          ],
          matches: [
            '[id="com.alipay.android.phone.businesscommon.globalsearch:id/item_fly_bird_content"]',
            '[text*="基金" || text*="黄金" || text*="纳斯达克" || text*="恒生" || text*="股票" || text*="指数"]',
          ],
          action: 'back',
          snapshotUrls: [],
        },
        {
          key: 2,
          activityIds: [
            'com.alipay.android.phone.businesscommon.globalsearch.ui.MainSearchActivity',
          ],
          matches: [
            '[id="com.alipay.android.phone.businesscommon.globalsearch:id/item_cube_template_content"]',
            '[text*="基金" || text*="黄金" || text*="纳斯达克" || text*="恒生" || text*="股票" || text*="指数"]',
          ],
          action: 'back',
          snapshotUrls: [],
        },
      ],
    },
    {
      key: 4,
      name: '禁止查看股票详情',
      desc: '检测到股票/指数代码结果或详情页面时自动返回',
      enable: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.alipay.android.phone.businesscommon.globalsearch.ui.MainSearchActivity',
          ],
          matches: [
            '[id="com.alipay.android.phone.businesscommon.globalsearch:id/item_cube_template_content"]',
            '[text*=".USI" || text*=".HK" || text*=".SH" || text*=".SZ"]',
          ],
          action: 'back',
          snapshotUrls: [],
        },
        {
          key: 1,
          activityIds: [
            'com.antfortune.wealth.stock.common.cube.page.CubePageActivity',
          ],
          matches: ['[text="价格"]', '[text="涨跌额"]', '[text="涨跌幅"]'],
          action: 'back',
          snapshotUrls: [],
        },
      ],
    },
    {
      key: 5,
      name: '禁止查看评论区',
      desc: '检测到评论区页面时自动返回',
      enable: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
          matches: [
            '[text*="讨论区" || text*="推荐" || text*="评论" || text*="热议"]',
          ],
          action: 'back',
          snapshotUrls: [],
        },
      ],
    },
  ],
});

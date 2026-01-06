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
  ],
});

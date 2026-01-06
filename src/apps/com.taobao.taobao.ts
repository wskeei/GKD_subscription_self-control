import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: 'Taobao',
  groups: [
    {
      key: 1,
      name: '禁止刷淘宝视频',
      desc: '检测到淘宝逛逛/视频时自动返回',
      enable: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.taobao.tao.welcome.Welcome',
            'com.taobao.tao.TBMainActivity',
          ],
          matches: [
            // 匹配顶部Tab栏结构: "逛逛" 在 tab_layout 中 (4层结构)
            '[text="逛逛"][visibleToUser=true] < * < * < * < [id="com.taobao.taobao:id/tab_layout"]',
          ],
          action: 'back',
          snapshotUrls: [],
        },
      ],
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xunmeng.pinduoduo',
  name: 'Pinduoduo',
  groups: [
    {
      key: 1,
      name: '禁止刷多多视频',
      desc: '检测到多多视频/直播界面时自动返回',
      enable: true,
      rules: [
        {
          // 规则1：匹配底部导航栏的"多多视频"（沉浸模式和非沉浸模式都存在）
          key: 0,
          activityIds: [
            'com.xunmeng.pinduoduo.ui.activity.MainFrameActivity',
            'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          ],
          matches: ['[text="多多视频"]'],
          action: 'back',
          snapshotUrls: [],
        },
        {
          // 规则2：匹配视频播放器（沉浸模式特有）
          key: 1,
          activityIds: [
            'com.xunmeng.pinduoduo.ui.activity.MainFrameActivity',
            'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          ],
          matches: ['[desc="tronplayer_view"]'],
          action: 'back',
          snapshotUrls: [],
        },
        {
          // 规则3：匹配金币显示（WebView中的元素）
          key: 2,
          activityIds: [
            'com.xunmeng.pinduoduo.ui.activity.MainFrameActivity',
            'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          ],
          matches: ['[text="我的金币"]'],
          action: 'back',
          snapshotUrls: [],
        },
      ],
    },
  ],
});

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
          key: 0,
          activityIds: [
            'com.xunmeng.pinduoduo.ui.activity.MainFrameActivity',
            'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          ],
          matches: [
            // 匹配顶部Tab栏结构: 直播/关注/短剧/推荐 在一个 HorizontalScrollView 中
            // 结构: HorizontalScrollView > LinearLayout > arg > arg > arg > TextView[text="直播"]
            '[text="直播"] < * < * < * < * < HorizontalScrollView',

            // 匹配多多视频特有的奖励元素
            '[text="我的金币"]',

            // 匹配视频页右上角"悬浮"的关注按钮 (备用)
            '[text="关注"][id="com.xunmeng.pinduoduo:id/pdd"]',
          ],
          action: 'back',
          snapshotUrls: [],
        },
      ],
    },
  ],
});

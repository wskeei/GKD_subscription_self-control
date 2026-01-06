import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: 'WeChat',
  groups: [
    {
      key: 1,
      name: '视频号-打开退出',
      desc: '打开视频号时自动退出',
      enable: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.tencent.mm.plugin.finder.ui.FinderHomeAffinityUI',
            'com.tencent.mm.plugin.finder.ui.FinderHomeUI',
          ],
          action: 'back',
          matches: ['[id="android:id/content"]'],
          snapshotUrls: [],
        },
      ],
    },
    {
      key: 2,
      name: '朋友圈-打开退出',
      desc: '打开朋友圈时自动退出',
      enable: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI',
            'com.tencent.mm.plugin.sns.ui.SnsTimeLineUI',
          ],
          action: 'back',
          matches: ['[id="android:id/content"]'],
          snapshotUrls: [],
        },
      ],
    },
  ],
});

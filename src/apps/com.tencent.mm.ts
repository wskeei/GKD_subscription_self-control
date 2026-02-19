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
    {
      key: 3,
      name: '禁止打开知乎小程序',
      desc: '打开知乎小程序时自动返回',
      enable: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI05',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI06',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI07',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI08',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI09',
          ],
          matches: ['[text="热榜"]'],
          action: 'back',
          snapshotUrls: [],
        },
      ],
    },
    {
      key: 4,
      name: '禁止打开估值小助手',
      desc: '打开估值小助手自动返回',
      enable: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI05',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI06',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI07',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI08',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI09',
          ],
          matches: ['[id="com.tencent.mm:id/hc"][text*="估值计算小助手"]'],
          action: 'back',
          snapshotUrls: [],
        },
      ],
    },
    {
      key: 5,
      name: '禁止打开腾讯微证券小程序',
      desc: '打开腾讯微证券小程序时自动返回',
      enable: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI05',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI06',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI07',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI08',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI09',
          ],
          matches: ['[text="腾讯微证券"]'],
          action: 'back',
          snapshotUrls: [],
        },
      ],
    },
    {
      key: 6,
      name: '禁止打开公众号界面',
      desc: '进入公众号界面时自动返回',
      enable: true,
      rules: [
        {
          key: 0,
          activityIds: ['com.tencent.mm.ui.LauncherUI'],
          matches: ['[desc="公众号"]'],
          action: 'back',
          snapshotUrls: [],
        },
      ],
    },
    {
      key: 7,
      name: '禁止打开公众号文章页',
      desc: '进入公众号文章页时自动返回',
      enable: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewMMUI',
          ],
          matches: ['[id="activity-detail"]'],
          action: 'back',
          snapshotUrls: [],
        },
      ],
    },
    {
      key: 8,
      name: '禁止搜索指数和股票',
      desc: '微信搜一搜出现指数或股票内容时自动返回',
      enable: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.tencent.mm.plugin.webview.ui.tools.fts.MMFTSSOSHomeWebViewUI',
          ],
          matches: [
            '[text*="指数" || text*="股票" || text*="纳斯达克" || text*="恒生" || text*="美股" || text*="A股" || text*="港股"][visibleToUser=true]',
          ],
          action: 'back',
          snapshotUrls: [],
        },
      ],
    },
  ],
});

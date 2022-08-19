---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/loveyless.png',
    name: 'Loveyless',
    // title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/loveyless' },
      { icon: 'twitter', link: 'https://twitter.com/Lovey1ess' }
      //没有icon的svg
      // { icon: 'email', link: 'https://twitter.com/Lovey1ess' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      前端小萌新
    </template>
    <template #lead>
      <!-- 目前只会vue一点nodejs皮毛 -->
      学习go语言中……
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

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
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/loveyless' },
      { icon: 'twitter', link: 'https://twitter.com/Lovey1ess' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      团队是什么？
    </template>
    <template #lead>
      目前只有我一个人默默的记录自己学的算法
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

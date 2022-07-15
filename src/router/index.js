import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'emoji',
      component: import('../views/Emoji.vue')
    },
    // {
    //   path: '/',
    //   name: 'landingPage',
    //   component: import('../views/landingPage.vue')
    // },
    // {
    //   path: '/emojis',
    //   name: 'emoji',
    //   component: import('../views/Emoji.vue')
    // },
    {
      path: '/emoticons',
      name: 'emoticon',
      component: () => import('../views/Emoticon.vue')
    },
    {
      path: '/custom-emoticon',
      name: 'custom-emoticon',
      component: () => import('../views/customEmoticon.vue')
    },
    {
      path: '/emoji-game',
      name: 'emoji-game',
      component: () => import('../views/emojiGame.vue')
    }
  ]
})

export default router

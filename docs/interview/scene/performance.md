# 性能优化
::: tip

:::

## IntersectionObserver

::: details

### 🔍 概述
 `IntersectionObserver` 是一个现代的浏览器 API，用于异步观察目标元素与其祖先元素或顶级文档视窗（viewport）的交叉状态变化。它提供了一种高效的方式来检测元素是否进入或离开可视区域，无需使用传统的滚动事件监听和手动计算位置。

### 🌟 基本使用

#### 初始化观察器
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    console.log('元素可见状态变化:', entry.isIntersecting);
  });
}, {
  root: null,         // 默认视窗
  rootMargin: '10px', // 观察区域边距
  threshold: 0.5      // 触发阈值
});
```

#### 📊 回调参数解析

```js
{
  time: 1234.56,            // 时间戳
  target: element,          // 目标元素
  rootBounds: DOMRect,      // 根元素边界
  boundingClientRect: DOMRect, // 目标边界
  intersectionRect: DOMRect, // 交叉区域
  intersectionRatio: 0.7,   // 交叉比例(0-1)
  isIntersecting: true      // 是否交叉
}
```

#### 🚀 常见应用场景
1. 图片懒加载
```vue
<template>
    <div class="image-scroll-container">
        <!-- 图片列表 -->
        <div v-for="(item, index) in items" :key="item.id" :ref="el => {
            if (index === items.length - 1) {
                lastItemRef = el
                // console.log('更新最后一个元素引用:', el)
            }
        }" class="image-card">
            <div class="image-wrapper">
                <img :src="item.imageUrl" :alt="item.title" class="lazy-image" 
                loading="lazy">
            </div>
            <div class="image-info">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
            </div>
        </div>

        <!-- 加载状态 -->
        <div v-if="loading" class="loading-indicator">
            <div class="spinner"></div>
            正在加载更多图片...
        </div>

        <!-- 无更多提示 -->
        <div v-if="!hasMore" class="end-of-content">
            ~ 已显示所有图片 ~
        </div>
        <transition name="fade">
            <div v-show="showBackToTop" class="back-to-top" @click="scrollToTop">
                ↑
            </div>
        </transition>
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { fetchImageItems } from '@/mock/api'
import { throttle } from '@/utils/common'

// 状态管理
const items = ref([])
const loading = ref(false)
const currentPage = ref(1)
const hasMore = ref(true)
const lastItemRef = ref(null)
const showBackToTop = ref(false)

// IntersectionObserver实例
let observer = null

// 初始化观察器
const initObserver = () => {
    if (observer) observer.disconnect()

    observer = new IntersectionObserver((entries) => {
        // console.log('观察到元素:', entries)
        entries.forEach(entry => {
            if (entry.isIntersecting && hasMore.value && !loading.value) {
                // console.log('触发加载，当前页码:', currentPage.value)
                observer.unobserve(entry.target)
                loadMore()
            }
        })
    }, {
        root: null,
        rootMargin: '400px', // 增大预加载区域
        threshold: 0.05
    })

    bindObserver()
}

// 绑定观察目标
const bindObserver = () => {
    if (!lastItemRef.value) {
        // console.warn('未找到观察目标')
        return
    }

    // console.log('绑定新目标:', lastItemRef.value)
    observer.observe(lastItemRef.value)
}

// 加载更多图片
const loadMore = async () => {
    try {
        loading.value = true
        const { data, pagination } = await fetchImageItems(currentPage.value)

        items.value = [...items.value, ...data]

        // console.log('加载更多图片:', items.value)
        hasMore.value = pagination.hasMore
        currentPage.value++

        await nextTick()
        initObserver() // 重新初始化观察器
    } finally {
        loading.value = false
    }
}

const checkScroll = throttle(() => {
    showBackToTop.value = window.scrollY > 300
}, 200)

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

// 生命周期
onMounted(async () => {
    window.addEventListener('scroll', checkScroll)
    await loadMore()
    initObserver()
})

onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll)
    observer?.disconnect()
})
</script>
```



:::


## xxx

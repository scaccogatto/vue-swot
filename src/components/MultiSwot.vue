<template>
  <div
    v-key-nav
    class="multi-swot">
    <swot
      v-for="(swot, index) of swots"
      :class="{ 'multi-swot__swot--active': index === activeSwot }"
      :key="index"
      :points="swot.points"
      :objective="swot.objective" />
  </div>
</template>

<script>
import Swot from './Swot'

export default {
  components: {
    Swot
  },
  data: () => ({
    activeSwot: 0
  }),
  props: {
    swots: {
      type: Array,
      required: true
    }
  },
  methods: {
    $_keyAction ({ keyCode }) {
      const next = [39, 40, 32]
      const prev = [38, 37]
      if (next.includes(keyCode)) return this.$_goNext()
      if (prev.includes(keyCode)) return this.$_goPrev()
    },
    $_goNext () {
      if (this.activeSwot >= this.swots.length - 1) return
      this.activeSwot++
    },
    $_goPrev () {
      if (this.activeSwot <= 0) return
      this.activeSwot--
    }
  },
  watch: {
    activeSwot: {
      handler () {
        this.$setTitle(this.swots[this.activeSwot].objective)
      }
    }
  },
  directives: {
    'key-nav': {
      bind (el, binding, vnode) {
        window.addEventListener('keydown', vnode.context.$_keyAction)
      },
      unbind (el, binding, vnode) {
        window.removeEventListener('keydown', vnode.context.$_keyAction)
      }
    }
  }
}
</script>

<style>
.multi-swot {
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.swot {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transform: translateY(100%);
  transition: all .7s ease-in-out;
}

.multi-swot__swot--active {
  opacity: 1;
  transform: translateY(0%);
}
</style>

<template>
  <multi-swot
    :swots="swots" />
</template>

<script>
import MultiSwot from '@/components/MultiSwot'

export default {
  components: {
    MultiSwot
  },
  data: () => ({
    swots: require('./Base/data.json')
  })
}
</script>

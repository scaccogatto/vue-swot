<template>
  <div class="swot">
    <h2>Objective: {{ objective }}</h2>

    <div class="swot__inner">
      <div class="swot__s">
        <h3>Strengths</h3>
        <ul>
          <li
            v-for="(listElement, index) of points.s"
            v-html="listElement"
            :key="index"></li>
        </ul>
      </div>

      <div class="swot__o">
        <h3>Opportunities</h3>
        <ul>
          <li
            v-for="(listElement, index) of points.o"
            v-html="listElement"
            :key="index"></li>
        </ul>
      </div>
Y
      <div class="swot__w">
        <h3>Weaknesses</h3>
        <ul>
          <li
            v-for="(listElement, index) of points.w"
            v-html="listElement"
            :key="index"></li>
        </ul>
      </div>

      <div class="swot__t">
        <h3>Threats</h3>
        <ul>
          <li
            v-for="(listElement, index) of points.t"
            v-html="listElement"
            :key="index"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    objective: {
      type: String,
      required: true
    },
    points: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.swot {
  width: 100%;
  height: 100vh;
  position: relative;
  background: #fffdfa;
}

.swot h2 {
  height: 7vh;
  margin: 0 1rem;
  display: flex;
  align-items: center;
}

.swot h3 {
  margin: 1.5rem 1.5rem 0 1.5rem;
  display: flex;
  align-items: center;
}

.swot__inner {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 93vh;
  overflow: hidden;
}

.swot__s, .swot__w, .swot__o, .swot__t {
  flex-grow: 1;
  height: calc(50% - 2rem);
  width: calc(50% - 2rem);
  margin: 1rem;
  box-sizing: border-box;
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.1);
  transition: transform .3s ease-in-out;
  padding: 1rem;
  overflow-y: auto;
}

.swot__s:hover, .swot__w:hover, .swot__o:hover, .swot__t:hover {
  transform: scale(1.05);
  z-index: 100;
}

.swot__s {
  background: #bcf7bf;
}

.swot__w {
  background: #ff9a9a;
}

.swot__o {
  background: #b7f7cb;
}

.swot__t {
  background: #ffd3e1;
}

.swot__inner ul {
  text-align: left;
  padding: 1rem 1.5rem;
}

.swot__inner ul li {
  margin-bottom: .5rem;
}
</style>

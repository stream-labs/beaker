<template>
  <div>
    <div class="section">
      <h1>Global Transitions</h1>
      <p>
        This is the start of a collection of pre-made transitions to use in
        Beaker components. The CSS for these is automatically imported with a
        standard beaker CSS Import. They are used by wrapping an element which
        is dynamically shown with <code>v-if</code>, <code>v-else</code>, or
        <code>v-show</code> by wrapping it with
        <code>&lt;transition&gt;</code> or
        <code>&lt;transition-group&gt;</code>.
      </p>
      <pre><code>&lt;transition name="fadeY-from-left"&gt;
  &lt;div v-if="boolean"&gt;&lt;/div&gt;
&lt;/transition&gt;</code></pre>
    </div>
    <div class="section">
      <div class="flip-cont">
        <transition-group
          name="fadeX-from-left"
          tag="div"
        >
          <div
            v-if="flip"
            key="fadeXFirstLeft"
            class="first"
          >
            <h2>fadeX-from-left</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellat, dolores suscipit ut consequuntur necessitatibus
              reprehenderit placeat repellendus. Doloremque amet ducimus magni
              nam reprehenderit, suscipit vero! Unde rem expedita exercitationem
              recusandae?
            </p>
          </div>
          <div
            v-else
            key="fadeXSecondLeft"
            class="second"
          >
            <h2>fadeX-from-left</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              rerum ex minima, consequatur error laboriosam iusto voluptates
              quisquam cumque placeat porro nulla? Sequi ex reiciendis illo quia
              nesciunt odio id?
            </p>
          </div>
        </transition-group>
      </div>

      <div class="flip-cont">
        <transition-group
          name="fadeX-from-right"
          tag="div"
        >
          <div
            v-if="flip"
            key="fadeXFirstRight"
            class="first"
          >
            <h2>fadeX-from-right</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              architecto nobis recusandae porro necessitatibus tempore commodi
              distinctio rem deleniti veritatis veniam ab deserunt quidem neque
              asperiores eos, esse repellendus nemo?
            </p>
          </div>
          <div
            v-else
            key="fadeXSecondRight"
            class="second"
          >
            <h2>fadeX-from-right</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              accusamus voluptate tempora inventore dolor magnam assumenda
              reiciendis eum officia est impedit omnis aut, id vel dignissimos
              veritatis rerum vitae voluptas.
            </p>
          </div>
        </transition-group>
      </div>

      <div class="flip-cont">
        <transition-group
          name="fadeY-from-top"
          tag="div"
        >
          <div
            v-if="flip"
            key="fadeYFirstTop"
            class="first"
          >
            <h2>fadeY-from-top</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              architecto nobis recusandae porro necessitatibus tempore commodi
              distinctio rem deleniti veritatis veniam ab deserunt quidem neque
              asperiores eos, esse repellendus nemo?
            </p>
          </div>
          <div
            v-else
            key="fadeYSecondTop"
            class="second"
          >
            <h2>fadeY-from-top</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
              maiores accusantium consequatur praesentium voluptas facere
              tempora facilis quod sint a id saepe nulla voluptate eaque
              voluptatibus deserunt, fuga aliquid eveniet?
            </p>
          </div>
        </transition-group>
      </div>

      <div class="flip-cont">
        <transition-group
          name="fadeY-from-bottom"
          tag="div"
        >
          <div
            v-if="flip"
            key="fadeYFirstBottom"
            class="first"
          >
            <h2>fadeY-from-bottom</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              architecto nobis recusandae porro necessitatibus tempore commodi
              distinctio rem deleniti veritatis veniam ab deserunt quidem neque
              asperiores eos, esse repellendus nemo?
            </p>
          </div>
          <div
            v-else
            key="fadeYSecondBottom"
            class="second"
          >
            <h2>fadeY-from-bottom</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
              maiores accusantium consequatur praesentium voluptas facere
              tempora facilis quod sint a id saepe nulla voluptate eaque
              voluptatibus deserunt, fuga aliquid eveniet?
            </p>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, onUnmounted, ref,
} from 'vue';

export default defineComponent({
  setup() {
    const flip = ref(true);
    let flipLoop = 0;

    function flipProc() {
      flip.value = !flip.value;
    }

    onMounted(() => {
      flipLoop = setInterval(flipProc, 2500);
    });

    onUnmounted(() => {
      clearInterval(flipLoop);
    });

    return {
      flip,
      flipProc,
    };
  },
});
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.flip-cont {
  padding: 0;
  margin: 0;
  position: relative;

  div {
    width: 500px;
    height: 125px;
  }
}
</style>

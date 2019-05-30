<template>
  <div
    ref="wrap"
    :id="id"
    class="s-slider"
    @click="wrapClick">
    <div ref="elem" class="s-slider-bar">
      <template>
        <div ref="tooltip"
          class="s-slider-dot-cont"
          @mousedown="moveStart"
          >
          <div class="s-slider-dot">
            <div class="s-slider-dot-handle"></div>
          </div>
        </div>
      </template>
      <div ref="process" class="s-slider-process"></div>
    </div>
    <div v-if="range" class="vue-slide-bar-range">
      <div v-for="(r, index) in range" :key="index" class="vue-slide-bar-separate" >
        <span v-if="!r.isHide" class="vue-slide-bar-separate-text">
          {{ r.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Watch, Vue } from "vue-property-decorator";
@Component({})
export default class SliderTwo extends Vue {

$refs!: {
  elem: any,
  process: any,
  tooltip: any,
  wrap: any
}

private isDragging: boolean = false;
private size: number = 0;
private currentValue: any = 0;
private currentSlider: number = 0;
//private isComponentExists: boolean = true;
private interval: number = 1;
private lazy: boolean = false;
private realTime: boolean = false;
private offset: any = null;

@Prop({ default: null})
data!: [string, number];

@Prop({default: "wrap"})
id!: string;

@Prop({default: null})
range!: [];

@Prop({default: 0})
value!: [string,number];

@Prop({default: 0})
min!: number;

@Prop({default: 100})
max!: number;

@Prop({default: false})
isDisabled!: boolean;

@Prop({default: true})
draggable!: boolean;

get slider () {
  return this.$refs.tooltip;
}

get val() {
  return this.data ? this.data[this.currentValue] : this.currentValue;
}

set val(newVal) {

  if (this.data) {
    let index = this.data.indexOf(newVal);
    if (index > -1) {
      this.currentValue = index;
    }
  } else {
    this.currentValue = newVal;
  }
}

get currentIndex () {
  return (this.currentValue - this.minimum) / this.spacing;
}

get indexRange () {
  return [0, this.currentIndex];
}

get minimum () {
  return this.data ? 0 : this.min;
}

get maximum () {
  return this.data ? (this.data.length - 1) : this.max;
}

get multiple () {
  let decimals = `${this.interval}`.split('.')[1];
  return decimals ? Math.pow(10, decimals.length) : 1;
}

get spacing () {
  return this.data ? 1 : this.interval;
}

get total () {
  if (this.data) {
    return this.data.length - 1;
  } else if (Math.floor((this.maximum - this.minimum) * this.multiple) % (this.interval * this.multiple) !== 0) {
    this.printError('[VueSlideBar error]: Prop[interval] is illegal, Please make sure that the interval can be divisible')
  }
  return (this.maximum - this.minimum) / this.interval;
}






    get gap () {
      return this.size / this.total;
    }


    get position () {
      return ((this.currentValue - this.minimum) / this.spacing * this.gap);
    }


    get limit () {
      return [0, this.size];
    }


    get valueLimit () {
      return [this.minimum, this.maximum];
    }





  @Watch("value")
  watchValue(newVal) {
    this.setValue(newVal);
  }

  @Watch("max")
  watchMax(val) {
    let resetVal = this.limitValue(this.val)
    this.setValue(resetVal)
    this.refresh()
  }


  @Watch("min")
  watchMin(val) {
    if (val > this.max) {
      return this.printError('[VueSlideBar error]: The minimum value can not be greater than the maximum value.')
    }
    let resetVal = this.limitValue(this.val)
    this.setValue(resetVal)
    this.refresh()
  }








    bindEvents () {
      document.addEventListener('mousemove', this.moving)
      document.addEventListener('mouseup', this.moveEnd)
      document.addEventListener('mouseleave', this.moveEnd)
      window.addEventListener('resize', this.refresh)
    }


    unbindEvents () {
      window.removeEventListener('resize', this.refresh)
      document.removeEventListener('mousemove', this.moving)
      document.removeEventListener('mouseup', this.moveEnd)
      document.removeEventListener('mouseleave', this.moveEnd)
    }


    getPos (e) {
      this.realTime && this.getStaticData();
      return e.clientX - this.offset;
    }


    wrapClick (e) {
      if (this.isDisabled || (!this.draggable && e.target.id === this.id)) return false
      let pos = this.getPos(e)
      this.setValueOnPos(pos, true)
    }


    moveStart (e, index) {
      if (!this.draggable) return false;
      this.isDragging = true;
      this.$emit('dragStart', this);
    }

    moving (e) {
      if (!this.isDragging || !this.draggable) return false
      e.preventDefault()
      if (e.targetTouches && e.targetTouches[0]) {
        e = e.targetTouches[0];
      }
      this.setValueOnPos(this.getPos(e), true)
      this.setTransitionTime(0);
    }

    moveEnd (e) {
      console.log('moveEnd');
      if (this.isDragging && this.draggable) {
        console.log('moveEnd EMIT')
        this.$emit('dragEnd', this)
        if (this.lazy && this.isDiff(this.val, this.value)) {
          console.log('syncValue');
          this.syncValue()
        }
      } else {
        return false
      }
      this.isDragging = false
      this.setPosition()
      console.log('end of moveEnd');

    }



    dragEnd(e) {
      console.log('drag ended');
    }


    setValueOnPos (pos, isDrag) {
      let range = this.limit
      let valueRange = this.valueLimit
      if (pos >= range[0] && pos <= range[1]) {
        this.setTransform(pos)
        let v = (Math.round(pos / this.gap) * (this.spacing * this.multiple) + (this.minimum * this.multiple)) / this.multiple
        this.setCurrentValue(v, isDrag)
      } else if (pos < range[0]) {
        this.setTransform(range[0])
        this.setCurrentValue(valueRange[0], true)
        if (this.currentSlider === 1) this.currentSlider = 0
      } else {
        this.setTransform(range[1])
        this.setCurrentValue(valueRange[1], true)
        if (this.currentSlider === 0) this.currentSlider = 1
      }
    }


    isDiff (a, b) {
      if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
        return true
      } else if (Array.isArray(a) && a.length === b.length) {
        return a.some((v, i) => v !== b[i])
      }
      return a !== b
    }


    setCurrentValue (val, bool) {
      //console.log('setCurrentValue');
      if (val < this.minimum || val > this.maximum) return false
      if (this.isDiff(this.currentValue, val)) {
        this.currentValue = val
        if (!this.lazy || !this.isDragging) {
          this.syncValue()
        }
      }
      bool || this.setPosition()
    }


    setIndex (val) {
      console.log('setIndex');
      val = this.spacing * val + this.minimum
      this.setCurrentValue(val, true)
    }


    setValue (val) {
      //console.log('setValue');
      if (this.isDiff(this.val, val)) {
        let resetVal = this.limitValue(val)
        this.val = resetVal
        this.syncValue()
      }
      this.setPosition();
    }

    setPosition () {
      //console.log('setPosition');
      this.setTransitionTime(.25)
      this.setTransform(this.position)
    }


    setTransform (val) {
      let value = val - ((this.$refs.tooltip.scrollWidth - 2) / 2)
      let translateValue = `translateX(${value}px)`
      this.slider.style.transform = translateValue
      this.slider.style.WebkitTransform = translateValue
      this.slider.style.msTransform = translateValue
      this.$refs.process.style.width = `${val}px`
      this.$refs.process.style['left'] = 0
    }


    setTransitionTime (t) {
      this.slider.style.transitionDuration = `${t}s`
      this.slider.style.WebkitTransitionDuration = `${t}s`
      this.$refs.process.style.transitionDuration = `${t}s`
      this.$refs.process.style.WebkitTransitionDuration = `${t}s`;
    }


    limitValue (val) {
      if (this.data) {
        return val;
      }
      const inRange = (v) => {
        if (v < this.min) {
          return this.min;
        } else if (v > this.max) {
          return this.max;
        }
        return v;
      }
      return inRange(val);
    }


    syncValue () {
      //console.log('syncValue');
      let val = this.val
      if (this.range) {
        this.$emit('callbackRange', this.range[this.currentIndex])
      }
      this.$emit('input', val)
    }


    getValue () {
      return this.val
    }


    getIndex () {
      return this.currentIndex
    }


    getStaticData () {
      if (this.$refs.elem) {
        this.size = this.$refs.elem.offsetWidth;
        this.offset = this.$refs.elem.getBoundingClientRect().left;
      }
    }


    refresh () {
      if (this.$refs.elem) {
        this.getStaticData()
        this.setPosition()
      }
    }


    printError (msg) {
      console.error(msg)
    }



    updated() {
    console.log(this.data);
    }


  mounted () {

        this.getStaticData();
        this.setValue(this.limitValue(this.value));
        this.bindEvents();

  }


  beforeDestroy () {
    // this.isComponentExists = false
    this.unbindEvents()
  }
}
</script>





<style lang="less" scoped>

@import "./../styles/Imports";

.vue-slide-bar-component {

}
.vue-slide-bar {
  position: relative;
  display: block;
  border-radius: 15px;
  background-color: @light-3;
  cursor: pointer;
}
.vue-slide-bar::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.vue-slide-bar-process {
  position: absolute;
  border-radius: 15px;
  background-color: #1066FD;
  transition: all 0s;
  z-index: 1;
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  will-change: width;
}

.vue-slide-bar-tooltip-wrap {
  /* display: none; */
  position: absolute;
  z-index: 9;
  width: 100%;
  height: 100%;
  display: block !important;
}
.vue-slide-bar-tooltip-top {
  top: -12px;
  left: 40%;
  transform: translate(-50%, -100%);
}
.vue-slide-bar-tooltip {
  position: relative;
  font-size: 14px;
  white-space: nowrap;
  padding: 2px 5px;
  min-width: 20px;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  border: 1px solid #1066FD;
  background-color: #1066FD;
}
.vue-slide-bar-tooltip::before {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-top-color: inherit;
  transform: translate(-50%, 0);
}
.vue-slide-bar-range {
  display: flex;
  padding: 5px 0;
  justify-content: space-between;
}
.vue-slide-bar-separate {
  position: relative;
  width: 2px;
  background-color: #9e9e9e;
  height: 5px;
  cursor: pointer;
}
.vue-slide-bar-separate-text {
  text-align: center;
  position: absolute;
  white-space: nowrap;
  transform: translate(-50%, 0);
  top: 6px;
}













.s-slider {
  width: 100%;
  flex: 1;
  padding: 4px 0px !important;
  position: relative;
  box-sizing: border-box;
  user-select: none;

  .s-slider-bar {
    background-color: @light-3;
    height: 8px;
    border-radius: 4px;
  }

  .s-slider-process {
    position: absolute;
    z-index: 1;
    width: 0;
    height: 8px;
    top: 4px;
    left: 0;
    border-radius: 4px;
    background-color: @teal;
    transition: all 0s;
    //will-change: width;
  }


.s-slider-dot-cont {
  position: absolute;
  transition: all 0s;
  will-change: transform;
  cursor: pointer;
  z-index: 3;
  left: 0;
  top: 0;
}

  .s-slider-dot {
    .s-slider-dot-handle {

      width: 24px;
      height: 16px;


      background-color: @dark-2;
      box-shadow: none;
      .radius(3);
      position: relative;


      &:before,
      &:after {
        border: none;
        font-family: "icomoon";
        font-weight: 900;
        position: absolute;
        top: 0px;
        color: @light-3;
        font-size: 11px;
        line-height: 15px;
        content: "\e996";
        display: inline-block;
      }

      &:before {
        transform: rotate(90deg);
        left: 2px;
      }

      &:after {
        transform: rotate(-90deg);
        right: 2px;
      }
    }
  }

  .vue-slider-tooltip {
    background-color: transparent;
    border: 0;
    color: @day-title;
    padding: 0;

    &:before {
      border: 0 !important;
    }
  }
}

.s-slider--simple {
  .vue-slider-process {
    background-color: @selected;
  }
}

.s-slider--has-tooltip {
  padding: 4px 0px 26px !important;
}

.night,
.night-theme {
  .s-slider {
    .vue-slider {
      background-color: @dark-4;
    }

    .vue-slider-dot {
      .vue-slider-dot-handle {
        background-color: @light-1;
        &:before,
        &:after {
          color: @dark-5;
        }
      }
    }

    .vue-slider-tooltip {
      color: @night-title;
    }
  }

  .s-slider--simple {
    .vue-slider-process {
      background-color: @dark-5;
    }
  }
}
</style>
<template>
   

      <component
                 @mousedown="pressDown"
                 @mouseup="pressUp"
    :is="type"
    :to="to"
    :href="href"
    :type="submit"
    class="button"
    :class="buttonClasses"
    :disabled="state === 'disabled'"
    :key="type">
    
    
    

  <div class="ripple"></div>
      <span><slot/></span>

  
  
  
  
  
  
  
  
  
  
  
  </component>
  
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class Button extends Vue {
  @Prop()
  href!: {
    type: string;
    default: null;
  };

  // standard, medium, large, square
  @Prop()
  size!: {
    type: string;
    size: null;
  };

  // hover, focus, loading, disabled
  @Prop()
  state!: {
    type: string;
    default: null;
  };

  // set buttons type to "submit"
  @Prop()
  submit!: {
    type: string;
    default: null;
  };


  


  @Prop()
  to!: {
    type: string;
    default: null;
  };

  // button, a, router-link
  @Prop({ default: "button" })
  type!: string;

  @Prop()
  variation!: {
    type: string;
    default: "default";
  };
  


  @Prop()
  ripple!: {
    type: boolean;
    default: null;
  };
  
  
  
  
  
  
  
  
  
  /*
  @Watch('ripple')
    onPropertyChanged(value: string, oldValue: string) {

    this.$el.childNodes[0].classList.remove('rippleEffect');
    let buttonWidth = this.$el.offsetWidth;
    let buttonHeight = this.$el.offsetHeight;
    
    if(buttonWidth >= buttonHeight) {
      buttonHeight = buttonWidth;
    } else {
      buttonWidth = buttonHeight; 
    }
  

  var x = this.mouseX - this.posX - buttonWidth / 2;
  var y = this.mouseY - this.posY - buttonHeight / 2;
 
  // console.log(this.posX, this.posY, buttonWidth, buttonHeight, this.mouseX, this.mouseY);


console.log('posX: ' + this.posX + ' || posY: ' + this.posY + ' || mouseX: ' + this.mouseX + ' || mouseY: ' + this.mouseY);
      
  
  this.$el.childNodes[0].style.width = buttonWidth + 'px'; 
  this.$el.childNodes[0].style.height = buttonHeight + 'px';
  this.$el.childNodes[0].style.top = y + 'px';
  this.$el.childNodes[0].style.left = x + 'px';


  this.$el.childNodes[0].classList.add('rippleEffect');
      
      
      
    }
      
*/

  





    pressDown() {
      this.$el.classList.remove('pressDownEffect');
      this.$el.classList.remove('pressUpEffect');
      this.$el.classList.add('pressDownEffect');
      
      this.$el.childNodes[0].classList.remove('rippleEffect');
      
       this.mouseX = event.pageX;
    this.mouseY = event.pageY;
     
    this.ripple = !this.ripple;
     
     
         
    let buttonWidth = this.$el.offsetWidth;
    let buttonHeight = this.$el.offsetHeight;
    
    if(buttonWidth >= buttonHeight) { buttonHeight = buttonWidth; } else { buttonWidth = buttonHeight; }
        
    let rect = this.$el.getBoundingClientRect();
    let posX = rect.left;
    let posY = rect.top;
  let x = this.mouseX - posX - buttonWidth / 2;
  let y = this.mouseY - posY - buttonHeight / 2;
 

console.log('posX: ' + posX + ' || posY: ' + posY + ' || mouseX: ' + this.mouseX + ' || mouseY: ' + this.mouseY);
      
  
  this.$el.childNodes[0].style.width = buttonWidth + 'px'; 
  this.$el.childNodes[0].style.height = buttonHeight + 'px';
  this.$el.childNodes[0].style.top = y + 'px';
  this.$el.childNodes[0].style.left = x + 'px';


  this.$el.childNodes[0].classList.add('rippleEffect');
    }
  
  
  pressUp() {
    
    // this.$el.childNodes[0].classList.remove('rippleEffect');
     this.$el.classList.remove('pressDownEffect', 'pressUpEffect');
   
    
    /*
    this.mouseX = event.pageX;
    this.mouseY = event.pageY;
     
    this.ripple = !this.ripple;
     
     
         
    let buttonWidth = this.$el.offsetWidth;
    let buttonHeight = this.$el.offsetHeight;
    
    if(buttonWidth >= buttonHeight) { buttonHeight = buttonWidth; } else { buttonWidth = buttonHeight; }
        
    let rect = this.$el.getBoundingClientRect();
    let posX = rect.left;
    let posY = rect.top;
  let x = this.mouseX - posX - buttonWidth / 2;
  let y = this.mouseY - posY - buttonHeight / 2;
 

console.log('posX: ' + posX + ' || posY: ' + posY + ' || mouseX: ' + this.mouseX + ' || mouseY: ' + this.mouseY);
      
  
  this.$el.childNodes[0].style.width = buttonWidth + 'px'; 
  this.$el.childNodes[0].style.height = buttonHeight + 'px';
  this.$el.childNodes[0].style.top = y + 'px';
  this.$el.childNodes[0].style.left = x + 'px';

*/
 // this.$el.childNodes[0].classList.add('rippleEffect');
  this.$el.classList.add('pressUpEffect');
     
     
 




  
   

    
  }
  
  
  
  get buttonClasses() {
    let classes = [];

    if (this.variation) {
      classes.push(`button--${this.variation}`);
    }

    if (this.size) {
      classes.push(`button--${this.size}`);
    }

    if (this.state) {
      classes.push(`button--${this.state}`);
    }

    return classes.join(" ");
  }
  
  

  


ggripple() {
  this.$el.classList.remove('ripple');
  let posX = this.$el.offsetLeft;
  let posY = this.$el.offsetTop;
  let buttonWidth = this.$el.offsetWidth;
  let buttonHeight = this.$el.offsetHeight;
  console.log(posX, posY, buttonWidth, buttonHeight);
  let rippleSpan = document.createElement('span');
  rippleSpan.className = 'ripple';
  this.$el.insertBefore(rippleSpan, this.$el.childNodes[0]);
  
  if(buttonWidth >= buttonHeight) {
    buttonHeight = buttonWidth;
  } else {
    buttonWidth = buttonHeight; 
  }
  
  var x = this.$el.pageX - posX - buttonWidth / 2;
  var y = this.$el.pageY - posY - buttonHeight / 2;
 
  

  
  this.$el.childNodes[0].style.width = buttonWidth;
  this.$el.childNodes[0].style.height = buttonHeight;
   //this.$el.childNodes[0].style.top = y + 'px';
   //this.$el.childNodes[0].style.left = x + 'px';
  this.$el.childNodes[0].innerHTML = 'px';

  this.$el.childNodes[0].classList.add('rippleEffect');
  
  

  
  
}
  
  
  
  
  }
  /*
  
  // Remove any old one
  $(".ripple").remove();

  // Setup
  var posX = $(this).offset().left,
      posY = $(this).offset().top,
      buttonWidth = $(this).width(),
      buttonHeight =  $(this).height();
  
  // Add the element
  $(this).prepend("<span class='ripple'></span>");

  
 // Make it round!
  if(buttonWidth >= buttonHeight) {
    buttonHeight = buttonWidth;
  } else {
    buttonWidth = buttonHeight; 
  }
  
  // Get the center of the element
  var x = e.pageX - posX - buttonWidth / 2;
  var y = e.pageY - posY - buttonHeight / 2;
  
 
  // Add the ripples CSS and start the animation
  $(".ripple").css({
    width: buttonWidth,
    height: buttonHeight,
    top: y + 'px',
    left: x + 'px'
  }).addClass("rippleEffect");
});


*/



</script>



<style lang="less" scoped>

  
  
  .button {
    overflow: hidden;
  }
  
  .button {
    outline: 0;
  }
  
  
  .buttonMove {
    width: 100%;
    height: 100%;
    background-color: red;
  }

  
  
.ripple {

  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: scale(0);
  position: absolute;
  opacity: 1;
}
.rippleEffect {
    animation: rippleDrop .25s cubic-bezier(0.4, 0.0, 0.2, 1);
}
  
  .pressDownEffect {
    animation: pressDown .05s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
  } 
  
  .pressUpEffect {
    animation: pressUp .25s cubic-bezier(0.4, 0.0, 0.2, 1);
  }
  

@keyframes rippleDrop {
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
  
  @keyframes pressDown {

    100% {
      transform: scale(.99);
    }
  }
  
    @keyframes pressUp {

    100% {
      transform: scale(1);
    }
  }
  

  
  
  
</style>
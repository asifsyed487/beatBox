
class Beat {
  constructor(location) {
    this.audio = new Audio(location);
  }
  createSound = () => {
    this.audio.currentTime = 0;
    this.audio.play();
  }
}

class Button {
    constructor(color, keyCode){
      this.color = color;
      this.keyCode = keyCode;
      this.element = document.getElementById(keyCode);
      this.setButtonColorInHTML();
      this.setTransitionEndListener();
    }

    setTransitionEndListener = () => {
      this.element.addEventListener("transitionend", ()=> {
        this.deselect();
      })
    }

    setButtonColorInHTML = () => {
      this.element.style.borderColor = this.color;
    }

    select = () => {
      this.element.style.backgroundColor = this.color;
      this.element.style.boxShadow = `0px 0px 17px ${this.color}`;
      // setTimeout(() =>{
      //   this.deselect();
      // }, 300)
    }

    deselect = () => {
      this.element.style.backgroundColor = "transparent";
      this.element.style.boxShadow = "none";
    }
}

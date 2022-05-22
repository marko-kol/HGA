const body = document.querySelector("body");
    const hganavbar = document.querySelector(".hganavbar");
    const menu = document.querySelector(".hganavmenu-list");
    const menuBtn = document.querySelector(".hganavmenu-btn");
    const cancelBtn = document.querySelector(".hganavcancel-btn");
    menuBtn.onclick = ()=>{
      menu.classList.add("active");
      menuBtn.classList.add("hide");
      cancelBtn.classList.add("show");
      body.classList.add("disabledScroll");
    }
    cancelBtn.onclick = ()=>{
      menu.classList.remove("active");
      menuBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      body.classList.remove("disabledScroll");
    }
    menu.onclick = ()=>{
      menu.classList.remove("active");
      menuBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      body.classList.remove("disabledScroll");
    }
    

    window.onscroll = ()=>{
      this.scrollY > 20 ? hganavbar.classList.add("sticky") : hganavbar.classList.remove("sticky");
    }
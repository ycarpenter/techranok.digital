let scrollPosition = 0;

export const disableScroll = () => {
  scrollPosition = window.scrollY;
  const widthScroll = window.innerWidth - document.body.offsetWidth;

  document.body.style.cssText = `
    position: fixed; 
    top: ${-window.scrollY}px;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    padding-right: ${widthScroll};
  `;
}

export const enableScroll = () => {
  document.body.style.cssText = '';
  window.scroll(0, scrollPosition)
};
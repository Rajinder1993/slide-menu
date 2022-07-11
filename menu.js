const navApp = {
  init() {
    this.submenuTriggers = document.querySelectorAll('.new-main-nav__link--submenu');
    this.submenuDestroyers = document.querySelectorAll('.submenu__back');
    
    this.mainNavDestroyer = document.querySelector('.drw-Drawer_Close');
    this.mainContent = document.querySelector('#MainContent');
    this.setupEventListeners();
  },
  
  setupEventListeners() {
    this.submenuTriggers.forEach(trigger => trigger.onclick = this.handleSubmenuTriggerClick.bind(this, trigger));
  	this.submenuDestroyers.forEach(destroyer => destroyer.onclick = this.handleSubmenuDestroyerClick.bind(this, destroyer));
  	this.mainNavDestroyer.onclick = this.handleMainNavDestroyerClick.bind(this);
  },
  
  handleSubmenuTriggerClick(trigger, e) {
    e.preventDefault();
    const submenu = trigger.nextElementSibling;
    this.showSubmenu(submenu);
  },
  
  handleSubmenuDestroyerClick(destroyer) {
    const submenu = destroyer.closest('.new-nav');
    this.closeSubmenu(submenu);
  },
  
  handleMainNavDestroyerClick() {
    this.mainContent.click();
  },
  
  showSubmenu(submenu) {
    submenu.classList.add('slide-in');
  },
  
  closeSubmenu(submenu) {
    submenu.classList.remove('slide-in');  
  }
}

navApp.init();

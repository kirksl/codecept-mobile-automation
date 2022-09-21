Feature('Demo');

Scenario('Demo @android', ({ I, Page }) => {
	I.see('This is home fragment', Page.main.homeText);
	I.tap(Page.main.navButton);
	I.tap(Page.nav.galleryButton);
	I.see('This is gallery fragment', Page.main.galleryText);
	I.tap(Page.main.navButton);
	I.tap(Page.nav.slideshowButton);
	I.see('This is slideshow fragment', Page.main.slideshowText);
});

Scenario('Demo @ios', ({ I, Page }) => {

});
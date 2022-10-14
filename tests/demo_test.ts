Feature('Demo');

Scenario('Demo @android @C<testrail_id_here>', ({ I, Page }) => {
	I.see('This is home fragment', Page.main.homeText);
	I.tap(Page.main.navButton);
	I.tap(Page.nav.galleryButton);
	I.see('This is gallery fragment', Page.main.galleryText);
	I.tap(Page.main.navButton);
	I.tap(Page.nav.slideshowButton);
	I.see('This is slideshow fragment', Page.main.slideshowText);
	I.doSomethingCustom();
	I.doSomethingGlobal();
});

let values = new DataTable(['price', 'sales_tax', 'total']);
values.add(['20.00', '0', '$20.00']);
values.add(['20.00', '.05', '$21.00']);
values.add(['20.00', '1', '$40.00']);
values.add(['20.00', '2', '$60.00']);
values.add(['20.00', '3', '$80.00']);

Data(values).Scenario('Demo @ios @<testrail_id_here>', ({ I, current }) => {
	I.see('$0.00', '~lbl_total_price');
	I.fillField('~inp_price', current.price);
	I.fillField('~inp_sales_tax', current.sales_tax);
	I.tap('~btn_calculate');
	I.see(current.total, '~lbl_total_price');
});
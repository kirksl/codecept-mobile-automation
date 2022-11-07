const { I } = inject();

class main {
    totalPriceLabel = '~lbl_total_price';
    priceInput = '~inp_price';
    salesTaxInput = '~inp_sales_tax';
    calculateButton = '~btn_calculate';

    calculateAndAssert(price: string, sales_tax: string, total: string) {
        I.see('$0.00', '~lbl_total_price');
        I.fillField('~inp_price', price);
        I.fillField('~inp_sales_tax', sales_tax);
        I.tap('~btn_calculate');
        I.see(total, '~lbl_total_price');
    }
}

export = main;

let app;
$(function () {
    // vueSet
    vueSet();
});

// vueSet
function vueSet() {
    app = new Vue({
        el: '#main',
        data: {
            package: 0,
            totalObj: 0,
            totalAll: 0,
            totalPay: 0,
            sale: 400,
            T: 0,
            TBS: 0,
            TBM: 0,
            TBL: 0,
            TBXL: 0,
            TWS: 0,
            TWM: 0,
            TWL: 0,
            TWXL: 0,
            bag: 0,
            bagB: 0,
            bagW: 0,
            card: 0,
            bigTowel: 0,
            smallTowel: 0,
            sock: 0,
            price: {
                T: 500,
                bag: 500,
                card: 300,
                bigTowel: 500,
                smallTowel: 400,
                sock: 200
            },
            priceText: {
                T: 'NT$500',
                bag: 'NT$500',
                card: 'NT$300',
                bigTowel: 'NT$500',
                smallTowel: 'NT$400',
                sock: 'NT$200'
            }
        },
        beforeCreate: function () {
            // console.log('beforeCreate');
        },
        created: function () {
            // console.log('created');   
        },
        methods: {
            ThousandsSign: function (_totleAll) {
                return ("NT$" + (Math.round(_totleAll * 100) / 100).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            },
            planningTotla: function () {
                this.T = Number(this.TBS) + Number(this.TBM) + Number(this.TBL) + Number(this.TBXL) + Number(this.TWS) + Number(this.TWM) + Number(this.TWL) + Number(this.TWXL);
                this.bag = Number(this.bagB) + Number(this.bagW);

                this.totalObj = Number(this.T) + Number(this.bag) + Number(this.card) + Number(this.bigTowel) + Number(this.smallTowel) + Number(this.sock);

                this.totalAll = Number(this.T * this.price.T) + Number(this.bag * this.price.bag) + Number(this.card * this.price.card) + Number(this.bigTowel * this.price.bigTowel) + Number(this.smallTowel * this.price.smallTowel) + Number(this.sock * this.price.sock);

                this.package = Math.min(this.T, this.bag, this.card, this.bigTowel, this.smallTowel, this.sock);

                this.totalPay = this.totalAll - (this.package * this.sale);
            },
            resetOrder: function () {
                this.TBS = 0;
                this.TBM = 0;
                this.TBL = 0;
                this.TBXL = 0;
                this.TWS = 0;
                this.TWM = 0;
                this.TWL = 0;
                this.TWXL = 0;
                this.bag = 0;
                this.bagB = 0;
                this.bagW = 0;
                this.card = 0;
                this.bigTowel = 0;
                this.smallTowel = 0;
                this.sock = 0;
                this.planningTotla();
            },
        },
        computed: {
            totalAllText: function () {
                this.planningTotla();
                return this.ThousandsSign(this.totalAll);
            },
            totalPayText: function () {
                this.planningTotla();
                return this.ThousandsSign(this.totalPay);
            },
            packageSaleText: function () {
                this.planningTotla();
                return this.ThousandsSign(this.package * this.sale);
            },
        },
        updated: function () {
            // console.log('updated');
        }
    })
}
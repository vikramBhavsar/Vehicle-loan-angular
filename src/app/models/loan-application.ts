export class LoanApplication {

    lappid!:number;
    uid!:number;
    vid!:number;
    loanAmmount!:number;
    loanTenure!:number;
    rateOfInterest!:number;
    isUsed!:string;
    ageold!:number;
    statusId!:number;

    constructor(Lappid:number,
        Uid:number,
        Vid:number,
        LoanAmmount:number,
        LoanTenure:number,
        RateOfInterest:number,
        IsUsed:string,
        Ageold:number,
        StatusId:number){

            this.lappid = Uid;
            this.uid = Uid;
            this.vid = Vid;
            this.loanAmmount = LoanAmmount;
            this.loanTenure = LoanTenure;
            this.rateOfInterest = RateOfInterest;
            this.isUsed = IsUsed;
            this.ageold = Ageold;
            this.statusId = StatusId;
        }
}

export class LoanOffer{
    loanAmmount!:number;
    loanTenure!:number;
    rateOfInterest!:number;

    // constructor
    constructor(loanAmmount:number,
        loanTenure:number,
        rateOfInterest:number){
            this.loanAmmount = loanAmmount;
            this.loanTenure = loanTenure;
            this.rateOfInterest = rateOfInterest;
    }
}

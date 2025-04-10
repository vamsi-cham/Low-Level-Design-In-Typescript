import { FiveHundredWithdrawal } from "./CashWithdrawalProcessor/FiveHundredWithdrawal";
import { OneHundredWithdrawal } from "./CashWithdrawalProcessor/OneHundredWithdrawal";
import { TwoThousandWithdrawal } from "./CashWithdrawalProcessor/TwoThousandWithdrawal";

const twothousandProcessor = new TwoThousandWithdrawal(2);
const fiveHundredProcessor = new FiveHundredWithdrawal(4);
const oneHundredProcessor = new OneHundredWithdrawal(5);

twothousandProcessor.setNextProcessor(fiveHundredProcessor);
fiveHundredProcessor.setNextProcessor(oneHundredProcessor);

twothousandProcessor.withdraw(4800)
twothousandProcessor.withdraw(100)
twothousandProcessor.withdraw(3000)
import { PurchaseService } from "./Purchase/PurchaseItem";
import { OnboardUser } from "./User/OnboardUser";
import { User } from "./User/User";

const onboardingUser = OnboardUser.getOnboardingInstance();

onboardingUser.addUser('vamsi');

const vamsi: User = onboardingUser.getUser('vamsi');

vamsi.getUserStats();

PurchaseService.processPurchase(vamsi, 800,0)

PurchaseService.processPurchase(vamsi, 4200,100)

PurchaseService.processPurchase(vamsi, 4200,0)

PurchaseService.processPurchase(vamsi, 3000,300)

PurchaseService.processPurchase(vamsi, 5000,0)

PurchaseService.processPurchase(vamsi, 5000,1200)

vamsi.getUserStats();




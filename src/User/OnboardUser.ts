import { User } from "./User";

export class OnboardUser{

    private usersList: Map<string, User> = new Map();

    static onboardingInstance: OnboardUser;

    private constructor(){

    }

    //SINGLETON
    static getOnboardingInstance(){
      if(!OnboardUser.onboardingInstance){
        OnboardUser.onboardingInstance = new OnboardUser();
      }

      return OnboardUser.onboardingInstance;
    }

    addUser(username: string){

      if(this.usersList.has(username)) {
        console.log('\nUsername already registered');
        return;
      }

      const user = new User(username);

      this.usersList.set(username, user);

    }

    getUser(username: string): User{

      return this.usersList.get(username) ?? new User(username);

    }
}
export interface User {
  id: string;
  walletAddress: string;
  twitterHandle?: string;
  joinedDate: Date;
  nftsMinted: number;
  referralCode?: string;
}

export class UserTracker {
  private users: User[] = [];
  private storageKey = 'socialvibe_users';

  constructor() {
    this.loadUsers();
  }

  addUser(walletAddress: string, twitterHandle?: string) {
    const existingUser = this.users.find(u => u.walletAddress === walletAddress);
    if (!existingUser) {
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        walletAddress,
        twitterHandle,
        joinedDate: new Date(),
        nftsMinted: 0
      };
      this.users.push(newUser);
      this.saveUsers();
      
      console.log(`🎉 New user added: ${twitterHandle || walletAddress}`);
      console.log(`📊 Total users: ${this.users.length}/40`);
      
      return newUser;
    }
    return existingUser;
  }

  recordMint(walletAddress: string) {
    const user = this.users.find(u => u.walletAddress === walletAddress);
    if (user) {
      user.nftsMinted++;
      this.saveUsers();
    }
  }

  getStats() {
    return {
      totalUsers: this.users.length,
      totalMints: this.users.reduce((sum, user) => sum + user.nftsMinted, 0),
      progress: (this.users.length / 40) * 100,
      recentUsers: this.users.slice(-5)
    };
  }

  private saveUsers() {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.storageKey, JSON.stringify(this.users));
    }
  }

  private loadUsers() {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        this.users = JSON.parse(stored);
      }
    }
  }
}

export const userTracker = new UserTracker();

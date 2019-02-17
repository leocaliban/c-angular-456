export class User {
  constructor(
    public email: string,
    public name: string,
    private password: string
  ) { }

  matches(outro: User): boolean {
    return outro !== undefined &&
      outro.email === this.email &&
      outro.password === this.password;
  }
}


export const users: { [key: string]: User } = {
  'jack@gmail.com': new User('jack@gmail.com', 'Jack Bauer', 'uct123'),
  'padrao@gmail.com': new User('padrao@gmail.com', 'padrao', 'padrao')
}

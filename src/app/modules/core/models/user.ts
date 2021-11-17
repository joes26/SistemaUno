import { Menu } from './menu';

export interface User {
  UserId?: string;
  Name?: string;
  Token?: string;
  Roles: any;
  Menus: Menu[];
  Sociedad?:[];
}

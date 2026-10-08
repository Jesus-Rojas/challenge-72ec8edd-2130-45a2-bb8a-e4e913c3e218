export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest'
}

export interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
  role: UserRole;
  createdAt: Date;
  lastLogin?: Date;
  isActive: boolean;
  phoneNumber?: string;
  address?: string;
  avatarUrl?: string;
}

export interface AuthCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  token?: string;
  message?: string;
}

export interface UserPermissions {
  canViewAdminPanel: boolean;
  canViewUserPanel: boolean;
  canManageUsers: boolean;
  canViewTransactions: boolean;
  canMakeTransfers: boolean;
  canManageAccounts: boolean;
}

export function mapRoleToPermissions(role: UserRole): UserPermissions {
  switch (role) {
    case UserRole.ADMIN:
      return {
        canViewAdminPanel: true,
        canViewUserPanel: true,
        canManageUsers: true,
        canViewTransactions: true,
        canMakeTransfers: true,
        canManageAccounts: true
      };
    case UserRole.USER:
      return {
        canViewAdminPanel: false,
        canViewUserPanel: true,
        canManageUsers: false,
        canViewTransactions: true,
        canMakeTransfers: true,
        canManageAccounts: false
      };
    case UserRole.GUEST:
    default:
      return {
        canViewAdminPanel: false,
        canViewUserPanel: false,
        canManageUsers: false,
        canViewTransactions: false,
        canMakeTransfers: false,
        canManageAccounts: false
      };
  }
}

export function hasPermission(user: User | null, permission: keyof UserPermissions): boolean {
  if (!user || !user.isActive) {
    return false;
  }
  const permissions = mapRoleToPermissions(user.role);
  return permissions[permission];
}

export function isAdmin(user: User | null): boolean {
  return user?.role === UserRole.ADMIN;
}

export function isAuthenticated(user: User | null): boolean {
  return user !== null && user.isActive;
}
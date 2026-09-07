declare global {
  namespace App {
    interface Locals {
      user: { id: string; email: string; name: string } | null;
      tenant: { id: string; slug: string; name: string } | null;
    }
  }
}

export {};

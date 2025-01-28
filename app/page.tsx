'use client';

import { useState } from 'react';
import { User } from './types';
import { UserTable } from './components/UserTable';
import { UserForm } from './components/UserForm';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | undefined>();
  const { toast } = useToast();

  const handleCreateUser = (userData: Partial<User>) => {
    const newUser: User = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...userData,
    } as User;
    
    setUsers([...users, newUser]);
    setIsFormOpen(false);
    toast({
      title: 'Success',
      description: 'User created successfully',
    });
  };

  const handleUpdateUser = (userData: Partial<User>) => {
    if (!editingUser) return;
    
    const updatedUsers = users.map((user) =>
      user.id === editingUser.id ? { ...user, ...userData } : user
    );
    
    setUsers(updatedUsers);
    setEditingUser(undefined);
    toast({
      title: 'Success',
      description: 'User updated successfully',
    });
  };

  const handleDeleteUser = (id: string) => {
    setUsers(users.filter((user) => user.id !== id));
    toast({
      title: 'Success',
      description: 'User deleted successfully',
    });
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <Users className="h-6 w-6" />
          <h1 className="text-2xl font-bold">User Management</h1>
        </div>
        <Button onClick={() => setIsFormOpen(true)}>Add User</Button>
      </div>

      <UserTable
        users={users}
        onEdit={setEditingUser}
        onDelete={handleDeleteUser}
      />

      <Dialog
        open={isFormOpen || !!editingUser}
        onOpenChange={(open) => {
          setIsFormOpen(open);
          if (!open) setEditingUser(undefined);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingUser ? 'Edit User' : 'Create User'}
            </DialogTitle>
          </DialogHeader>
          <UserForm
            user={editingUser}
            onSubmit={editingUser ? handleUpdateUser : handleCreateUser}
            onCancel={() => {
              setIsFormOpen(false);
              setEditingUser(undefined);
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
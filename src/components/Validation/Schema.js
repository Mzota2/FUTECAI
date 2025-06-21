import { z } from 'zod';

export const registrationSchema = z.object({
    username: z.string().min(2, 'Username must be at least 2 characters'),
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().regex(/^\+?\d{10,15}$/, 'Invalid phone number').optional(),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,'Password must be at least 8 characters and include uppercase, lowercase, number, and special character'),
    reason: z.string().min(8, 'Reason must be at least 8 characters').optional(),
    source:z.string().min(2, 'Source must be at least 8 characters').optional(),
    role:z.string().min(2, 'Role must be at least 8 characters').optional(),
})

export const resetPasswordSchema = z.object({
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,'Password must be at least 8 characters and include uppercase, lowercase, number, and special character'),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface AuthDialogProps {
  children: React.ReactNode;
  type: "login" | "signup";
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ children, type }) => {
  const [open, setOpen] = React.useState(false);
  
  const loginSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  });
  
  const signupSchema = loginSchema.extend({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    confirmPassword: z.string().min(8),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
  
  const schema = type === "login" ? loginSchema : signupSchema;
  
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      ...(type === "signup" ? { name: "", confirmPassword: "" } : {}),
    },
  });
  
  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log(values);
    
    // Here you would typically call your authentication API
    toast({
      title: type === "login" ? "Login Successful" : "Account Created",
      description: type === "login" 
        ? "Welcome back to FinPay!" 
        : "Your account has been created successfully.",
    });
    
    setOpen(false);
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {type === "login" ? "Login to your account" : "Create a new account"}
          </DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
            {type === "signup" && (
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="name@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {type === "signup" && (
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            
            <Button type="submit" className="w-full">
              {type === "login" ? "Login" : "Create Account"}
            </Button>
            
            {type === "login" ? (
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Don't have an account? <Button variant="link" className="p-0 h-auto" onClick={() => setOpen(false)}>Sign Up</Button>
              </p>
            ) : (
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Already have an account? <Button variant="link" className="p-0 h-auto" onClick={() => setOpen(false)}>Login</Button>
              </p>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

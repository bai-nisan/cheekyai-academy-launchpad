
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calendar, Mail, Phone, User, Building, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  teamSize: z.string().min(1, 'Please select team size'),
  challenges: z.string().min(10, 'Please describe your current challenges'),
});

type FormData = z.infer<typeof formSchema>;

interface DiscoveryCallFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiscoveryCallForm: React.FC<DiscoveryCallFormProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      teamSize: '',
      challenges: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    
    // Store the form data in localStorage for now
    localStorage.setItem('discoveryCallData', JSON.stringify(data));
    
    toast({
      title: "Thank you for your interest!",
      description: "We've received your information and will contact you soon.",
    });

    // Reset form and close dialog
    form.reset();
    onClose();
  };

  const openCalendar = () => {
    // Open Google Calendar in a new tab
    window.open('https://calendar.app.google/E9SKp9BEXq6owExG6', '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Book Your Discovery Call
          </DialogTitle>
          <DialogDescription className="text-slate-300">
            Tell us about your team and challenges. We'll use this information to prepare a customized discussion for your discovery call.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-200">First Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input 
                          placeholder="John" 
                          className="pl-10 bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-200">Last Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input 
                          placeholder="Doe" 
                          className="pl-10 bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-200">Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input 
                          placeholder="john@company.com" 
                          type="email"
                          className="pl-10 bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-200">Phone</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input 
                          placeholder="+1 (555) 123-4567" 
                          type="tel"
                          className="pl-10 bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Company Fields */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-200">Company</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input 
                          placeholder="Your Company" 
                          className="pl-10 bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="teamSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-200">Team Size</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Users className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <select 
                          className="flex h-10 w-full rounded-md border border-slate-600 bg-slate-800 px-3 py-2 pl-10 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          {...field}
                        >
                          <option value="">Select team size</option>
                          <option value="1-3">1-3 developers</option>
                          <option value="4-10">4-10 developers</option>
                          <option value="11-25">11-25 developers</option>
                          <option value="25+">25+ developers</option>
                        </select>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Challenges Field */}
            <FormField
              control={form.control}
              name="challenges"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-200">Current Development Challenges</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your biggest development bottlenecks, delivery pressure, or AI adoption challenges..."
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription className="text-slate-400">
                    This helps us prepare a more targeted discussion for your call.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                type="submit" 
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                Submit & We'll Contact You
              </Button>
              
              <Button 
                type="button"
                onClick={openCalendar}
                className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule with us
              </Button>
            </div>

            <p className="text-xs text-slate-400 text-center">
              By submitting this form, you agree to be contacted by our team about AI development transformation opportunities.
            </p>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

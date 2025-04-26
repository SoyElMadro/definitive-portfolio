
'use client';

import type { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Linkedin, Send } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useTranslations } from 'next-intl';

interface ContactProps {
  email: string;
  linkedInLink: string;
}

export const Contact: FC<ContactProps> = ({ email, linkedInLink }) => {
  const t = useTranslations('Contact');
  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().min(2, {
      message: t('form.nameError'),
    }),
    email: z.string().email({
      message: t('form.emailError'),
    }),
    message: z.string().min(10, {
      message: t('form.messageError'),
    }),
  });


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    fetch('https://formspree.io/f/xrbqbpvv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(response => {
        if (response.ok) {
          toast({
            title: t('form.successTitle'),
            description: t('form.successDescription'),
          });
          form.reset();
        } else {
          toast({
            title: t('form.errorTitle'),
            description: t('form.errorDescription'),
            variant: 'destructive',
          });
        }
      })
      .catch(() => {
        toast({
          title: t('form.errorTitle'),
          description: t('form.errorDescription'),
          variant: 'destructive',
        });
      })
      .catch(() => {
        toast({
          title: t('form.errorTitle'),
          description: t('form.errorDescription'),
          variant: 'destructive',
        });
      });
  }

  return (
    <section id="contact" className="bg-background">
      <div className="container mx-auto max-w-screen-lg px-4 animate-fade-in animation-delay-800">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary">{t('getInTouch')}</h3>
                <p className="text-muted-foreground">
                   {t('intro')}
                </p>
                <div className="space-y-4">
                     <Link href={`mailto:${email}`} className="flex items-start gap-3 group sm:items-center transition-opacity duration-200 hover:opacity-80">
                         <div className="flex-shrink-0 rounded-full bg-primary/10 p-3 group-hover:bg-accent transition-colors duration-300 ease-in-out mt-1 sm:mt-0">
                            <Mail className="h-6 w-6 text-primary group-hover:text-accent-foreground transition-colors duration-300 ease-in-out" />
                         </div>
                         <div>
                            <p className="font-medium text-primary">{t('email')}</p>
                            <p className="text-muted-foreground group-hover:text-accent transition-colors duration-300 ease-in-out break-words">{email}</p>
                         </div>
                     </Link>
                     <Link href={linkedInLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group sm:items-center transition-opacity duration-200 hover:opacity-80">
                         <div className="flex-shrink-0 rounded-full bg-primary/10 p-3 group-hover:bg-accent transition-colors duration-300 ease-in-out mt-1 sm:mt-0">
                            <Linkedin className="h-6 w-6 text-primary group-hover:text-accent-foreground transition-colors duration-300 ease-in-out" />
                         </div>
                         <div>
                             <p className="font-medium text-primary">{t('linkedIn')}</p>
                             <p className="text-muted-foreground group-hover:text-accent transition-colors duration-300 ease-in-out break-words">linkedin.com/in/madro</p>
                         </div>
                    </Link>
                </div>
            </div>

            {/* Contact Form */}
             <Card className="shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
                  <CardHeader>
                     <CardTitle className="text-2xl font-semibold text-primary">{t('sendMessage')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{t('form.name')}</FormLabel>
                                  <FormControl>
                                    <Input placeholder={t('form.namePlaceholder')} {...field} className="transition-colors duration-200 focus:border-accent focus:ring-accent" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{t('form.email')}</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder={t('form.emailPlaceholder')} {...field} className="transition-colors duration-200 focus:border-accent focus:ring-accent" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="message"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{t('form.message')}</FormLabel>
                                  <FormControl>
                                    <Textarea placeholder={t('form.messagePlaceholder')} rows={5} {...field} className="transition-colors duration-200 focus:border-accent focus:ring-accent"/>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <Button type="submit" className="w-full transition-all duration-300 ease-in-out hover:bg-primary/90 hover:scale-[1.02]" size="lg">
                              {t('form.submit')} <Send className="ml-2 h-4 w-4" />
                            </Button>
                          </form>
                      </Form>
                </CardContent>
             </Card>
        </div>
      </div>
    </section>
  );
};

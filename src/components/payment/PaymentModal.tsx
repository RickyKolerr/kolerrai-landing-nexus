
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CreditCard, Lock } from "lucide-react";

const paymentFormSchema = z.object({
  cardNumber: z.string().min(16).max(19),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/),
  cvv: z.string().length(3),
  cardholderName: z.string().min(3),
});

type PaymentFormData = z.infer<typeof paymentFormSchema>;

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planDetails: {
    name: string;
    price: string;
    interval: "monthly" | "yearly";
  };
}

export function PaymentModal({ isOpen, onClose, planDetails }: PaymentModalProps) {
  const form = useForm<PaymentFormData>({
    resolver: zodResolver(paymentFormSchema),
  });

  const onSubmit = (data: PaymentFormData) => {
    // Payment processing will be implemented here when backend is ready
    console.log("Payment data:", data);
    console.log("Plan details:", planDetails);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Complete Your Purchase
          </DialogTitle>
        </DialogHeader>

        <div className="mb-6 p-4 bg-accent/10 rounded-lg">
          <h3 className="font-semibold">{planDetails.name} Plan</h3>
          <p className="text-muted-foreground">
            {planDetails.price}/{planDetails.interval === "monthly" ? "mo" : "year"}
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="cardholderName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cardholder Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Number</FormLabel>
                  <FormControl>
                    <Input placeholder="4242 4242 4242 4242" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="expiryDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expiry Date</FormLabel>
                    <FormControl>
                      <Input placeholder="MM/YY" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cvv"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CVV</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="123" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Lock className="h-4 w-4" />
              <span>Your payment info is securely encrypted</span>
            </div>

            <ButtonGradient type="submit" className="w-full hover-lift glow">
              Pay Now
            </ButtonGradient>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

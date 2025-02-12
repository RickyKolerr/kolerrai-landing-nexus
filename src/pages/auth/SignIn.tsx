
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Lock, Mail } from "lucide-react";

const SignIn = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Sign in successful!",
      description: "Welcome back!",
    });
    navigate('/');
  };

  return (
    <div className="relative min-h-screen">
      <EnhancedNav />
      
      <div className="pt-16">
        <div className="relative overflow-hidden py-24">
          <div className="absolute inset-0 hero-gradient opacity-10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
          
          <div className="relative mx-auto max-w-md px-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10">
              <div className="text-center mb-8">
                <h1 className="text-gradient text-3xl font-bold mb-2">Welcome Back</h1>
                <p className="text-muted-foreground">Sign in to your account</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <input
                      type="email"
                      required
                      className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-accent/10 focus:border-accent/20 focus:outline-none focus:ring-2 focus:ring-accent/10"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <input
                      type="password"
                      required
                      className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-accent/10 focus:border-accent/20 focus:outline-none focus:ring-2 focus:ring-accent/10"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="rounded border-accent/10 bg-white/5 text-accent focus:ring-accent/10"
                    />
                    <label htmlFor="remember" className="ml-2 text-muted-foreground">
                      Remember me
                    </label>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate('/auth/reset-password')}
                    className="text-accent hover:text-accent/80"
                  >
                    Forgot password?
                  </button>
                </div>

                <ButtonGradient type="submit" className="w-full hover-lift glow">
                  Sign In
                </ButtonGradient>

                <p className="text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => navigate('/auth/sign-up')}
                    className="text-accent hover:text-accent/80"
                  >
                    Sign up
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;


import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'vi' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="fixed bottom-4 right-4 rounded-full bg-accent/10 hover:bg-accent/20"
    >
      <Languages className="h-5 w-5" />
      <span className="sr-only">
        {language === 'en' ? 'Switch to Vietnamese' : 'Chuyển sang tiếng Anh'}
      </span>
    </Button>
  );
};

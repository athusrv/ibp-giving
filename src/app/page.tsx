"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  PoundSterlingIcon as BanknotePound,
  Building,
  Copy,
  CreditCard,
  Hash,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

export default function Home() {
  const copyItems = [
    {
      label: "Dízimos",
      text: "PIX: ",
      icon: <Mail className="h-6 w-6" />,
    },
    {
      label: "Ofertas",
      text: "+1 (555) 123-4567",
      icon: <Phone className="h-6 w-6" />,
    },
  ];

  const bankAccounts = [
    {
      bank: "Banco Bradesco",
      accountName: "John Doe",
      accountNumber: "1234567890",
      routingNumber: "987654321",
      swift: "FNBUS12345",
    },
    {
      bank: "Banco Santander",
      accountName: "John Doe",
      accountNumber: "0987654321",
      routingNumber: "123456789",
      swift: "GBCUS67890",
    },
  ];

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast("Copied to clipboard", {
      description: `${label} has been copied to your clipboard.`,
      duration: 3000,
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center py-8 px-4 bg-gray-50">
      {/* Logo and Header Section */}
      <div className="flex flex-col items-center mb-12">
        <div className="w-24 h-24 mb-6 relative">
          <Image
            src="/placeholder.svg?height=96&width=96"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold text-center mb-2">
          Dízimos e Ofertas
        </h1>
        <p className="text-muted-foreground text-center max-w-md font-mono text-xs">
          Cada um dê conforme determinou em seu coração, não com pesar ou por
          obrigação, pois Deus ama quem dá com alegria.
          <br />
          <b>(2 Co 9:7)</b>
        </p>
      </div>

      {/* Copy Buttons Section */}
      <div className="w-full max-w-md mb-12 space-y-3">
        {copyItems.map((item, index) => (
          <Button
            key={index}
            variant="outline"
            size="lg"
            className="w-full justify-between px-4 py-3"
            onClick={() => copyToClipboard(item.text, item.label)}
          >
            <div className="flex items-center">
              <span className="mr-3">{item.icon}</span>
              <div className="flex flex-col">
                <span>{item.label}</span>
              </div>
            </div>
            <div className="flex items-center flex-1 overflow-hidden justify-end">
              <span className="text-sm text-muted-foreground mr-2 flex-1 truncate text-right">
                {item.text}
              </span>
              <Copy className="h-4 w-4" />
            </div>
          </Button>
        ))}
      </div>

      {/* Bank Account Sections */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {bankAccounts.map((account, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{account.bank}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <Building className="h-6 w-6 mr-2" />
                    <span className="text-muted-foreground">Account Name</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{account.accountName}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() =>
                        copyToClipboard(account.accountName, "Account Name")
                      }
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <Separator />

                <div className="flex justify-between">
                  <div className="flex items-center">
                    <CreditCard className="h-6 w-6 mr-2" />
                    <span className="text-muted-foreground">
                      Account Number
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{account.accountNumber}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() =>
                        copyToClipboard(account.accountNumber, "Account Number")
                      }
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <Separator />

                <div className="flex justify-between">
                  <div className="flex items-center">
                    <Hash className="h-6 w-6 mr-2" />
                    <span className="text-muted-foreground">
                      Routing Number
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{account.routingNumber}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() =>
                        copyToClipboard(account.routingNumber, "Routing Number")
                      }
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <Separator />

                <div className="flex justify-between">
                  <div className="flex items-center">
                    <BanknotePound className="h-6 w-6 mr-2" />
                    <span className="text-muted-foreground">SWIFT Code</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{account.swift}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() =>
                        copyToClipboard(account.swift, "SWIFT Code")
                      }
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}

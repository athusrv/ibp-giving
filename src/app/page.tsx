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
} from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

export default function Home() {
  const copyItems = [
    {
      label: "Dízimos",
      text: "PIX: tesouraria@ibpituba.com.br",
      icon: <img src="/santander_black.svg" alt="logo_santander"  className="h-6 w-6"/>,
    },
    {
      label: "Ofertas",
      text: "PIX: tesouraria@ibpituba.com.br",
      icon: <img src="/bradesco_black.svg" alt="logo_bradesco"  className="h-6 w-6"/>,
    },
  ];

  const bankAccounts = [
    {
      bank: "Banco Bradesco",
      accountName: "Igreja Batista a Pituba",
      accountNumber: "3646-3",
      routingNumber: "5581-6",
      swift: "13.659.792/0001-52",
    },
    {
      bank: "Banco Santander",
      accountName: "Igreja Batista a Pituba",
      accountNumber: "3747",
      routingNumber: "13006040-1",
      swift: "13.659.792/0001-52",
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
            src="/IBP.svg"
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
                    <span className="text-muted-foreground">Nome da Conta</span>
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
                      Agência
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
                      Conta Corrente
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
                    <span className="text-muted-foreground">CNPJ </span>
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

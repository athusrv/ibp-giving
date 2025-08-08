"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Copy } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

const bankAccounts = [
  {
    BankImage: () => (
      <div className="w-6 h-6 relative">
        <Image fill src="/sicredi_black.svg" alt="logo_sicredi" />
      </div>
    ),
    bank: "748 - Banco Sicredi",
    accountName: "Igreja Batista da Pituba",
    routingNumber: "0903",
    accountNumber: "18377-2",
    swift: "13.659.792/0001-52",
    pix: "13.659.792/0001-52",
  },
  {
    BankImage: () => (
      <div className="w-6 h-6 relative">
        <Image fill src="/bradesco_black.svg" alt="logo_bradesco" />
      </div>
    ),
    bank: "237 - Banco Bradesco",
    accountName: "Igreja Batista da Pituba",
    routingNumber: "3646",
    accountNumber: "5581-6",
    swift: "13.659.792/0001-52",
    pix: "tesouraria@ibpituba.com.br",
  },
];

export default function Giving() {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast("Copiado com sucesso", {
      description: `${label} foi copiado para a área de transferência`,
      duration: 3000,
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center py-8 px-4 bg-gray-50">
      {/* Logo and Header Section */}
      <div className="flex flex-col items-center mb-12">
        <div className="w-40 h-40 relative">
          <Image src="/IBP.svg" alt="Logo" fill className="object-contain" />
        </div>
        <h1 className="text-3xl font-bold text-center mb-2 -mt-8">
          Dízimos e Ofertas
        </h1>
        <p className="text-muted-foreground text-center max-w-md font-mono text-xs">
          Cada um dê conforme determinou em seu coração, não com pesar ou por
          obrigação, pois Deus ama quem dá com alegria.
          <br />
          <b>(2 Co 9:7)</b>
        </p>
      </div>
      <div className="flex flex-col w-full max-w-4xl gap-3">
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-3">
          {bankAccounts.map((account, index) => (
            <Card key={index} className="mb-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-4 text-md">
                  <account.BankImage />
                  {account.bank}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between gap-2">
                    <div className="flex items-center">
                      <span className="text-muted-foreground">
                        Beneficiário
                      </span>
                    </div>
                    <div className="flex items-center gap-2 flex-1 overflow-hidden justify-end ">
                      <span className="truncate">{account.accountName}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() =>
                          copyToClipboard(account.accountName, "Beneficiário")
                        }
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <Separator />

                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <span className="text-muted-foreground">Agência</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>{account.routingNumber}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() =>
                          copyToClipboard(account.routingNumber, "Agência")
                        }
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <Separator />

                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <span className="text-muted-foreground">
                        Conta Corrente
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>{account.accountNumber}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() =>
                          copyToClipboard(
                            account.accountNumber,
                            "Conta corrente"
                          )
                        }
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <Separator />

                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <span className="text-muted-foreground">CNPJ </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>{account.swift}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => copyToClipboard(account.swift, "CNPJ")}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <Separator />

                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <span className="text-muted-foreground">PIX </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>{account.pix}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => copyToClipboard(account.pix, "PIX")}
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
      </div>
    </main>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Copy, MoveRight } from "lucide-react";
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

const anexoAccounts = [
  {
    BankImage: () => (
      <div className="w-6 h-6 relative">
        <Image fill src="/santander_black.svg" alt="logo_santander" />
      </div>
    ),
    bank: "033 - Banco Santander",
    accountName: "Igreja Batista da Pituba",
    routingNumber: "3747",
    accountNumber: "13006040-1",
    swift: "13.659.792/0001-52",
    pix: "anexo@ibpituba.com.br",
  },
];

export default function Home() {
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

      <div className="flex flex-col max-w-4xl w-full gap-2">
        <a href="/giving">
          <div className="flex  items-center w-full p-4 rounded-lg border border-input bg-white gap-4 hover:bg-gray-50 transition cursor-pointer active:scale-99 active:bg-gray-100">
            <div className="flex flex-col justify-center flex-1">
              <h3 className="flex items-center gap-4 text-md font-bold leading-tight hidden lg:block">
                Quero dar meu dízimo ou uma oferta
              </h3>
              <h3 className="flex items-center gap-4 text-md font-bold leading-tight block lg:hidden">
                Dízimos e Ofertas
              </h3>
              <p className="text-muted-foreground text-xs  leading-none">
                Honre ao Senhor oferecendo a Ele uma parte daquilo que Ele te
                deu para administrar
              </p>
            </div>
            <MoveRight />
          </div>
        </a>
        <a href="/anexo">
          <div className="flex  items-center w-full p-4 rounded-lg border border-input bg-white gap-4 hover:bg-gray-50 transition cursor-pointer active:scale-99 active:bg-gray-100">
            <div className="flex flex-col justify-center flex-1">
              <h3 className="flex items-center gap-4 text-md font-bold leading-tight hidden lg:block">
                Quero dar uma oferta para o Anexo
              </h3>
              <h3 className="flex items-center gap-4 text-md font-bold leading-tight block lg:hidden">
                Ofertas para o Anexo
              </h3>
              <p className="text-muted-foreground text-xs  leading-none">
                Nos ajude a manter o Anexo funcionando e alcançando vidas
              </p>
            </div>
            <MoveRight />
          </div>
        </a>
      </div>
    </main>
  );
}

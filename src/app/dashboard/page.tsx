import Container from "@/components/container";
import Link from "next/link";
import React from "react";
import TiketItem from "./components/ticket";

export default async function Dashboard() {
  return (
    <Container>
      <main className="mt-9 mb-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Chamados</h1>
          <Link
            href="/dashboard/customer/new"
            className="bg-blue-500 px-4 py-1 rounded text-white"
          >
            Abrir chamado
          </Link>
        </div>

        <table className="min-w-full my-2">
          <thead>
            <tr>
              <th className="font-medium text-left pl-1">CLIENTE</th>
              <th className="font-medium text-left hidden sm:block">
                DATA CADASTRO
              </th>
              <th className="font-medium text-left">STATUS</th>
              <th className="font-medium text-left">#</th>
            </tr>
          </thead>
          <tbody>
            <TiketItem />
            <TiketItem />
          </tbody>
        </table>
      </main>
    </Container>
  );
}

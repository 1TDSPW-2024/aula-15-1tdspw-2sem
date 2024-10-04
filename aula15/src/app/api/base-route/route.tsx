import { TipoLanche } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {

    const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf-8');
    const data = JSON.parse(file);
    return NextResponse.json(data);
}

export async function POST(request: Request) {
    const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf-8');
    const produtos: TipoLanche[] = JSON.parse(file);

    const produto: TipoLanche = await request.json();

    console.log("Produto: ", produto);

    const novoId = produtos[produtos.length - 1].id + 1
    produto.id + novoId;

    produtos.push(produto);


    return NextResponse.json({ msg: "Hello" }, { "status": 201 });
}